import './Base.scss'
import anime from 'animejs'
import { useEffect, useRef, useState, memo } from 'react'

const Base = ({
  color: color_,
  object,
  width,
  height,
  transparent,
  transform,
  baseZindex,
  animation,
  setLoaded,
  ...props
}) => {
  const layersRef = useRef({})
  const baseRef = useRef(null)
  const loadedRef = useRef({
    gray: false,
    outline: false,
    highlight: false,
  })
  const imgDatRef = useRef({
    gray: null,
    outline: null,
    highlight: null,
  })
  const [imgDatState, setImgDatState] = useState({
    gray: null,
    outline: null,
    highlight: null,
  })
  const [style, setStyle] = useState({})

  useEffect(() => {
    let loadedCount = 0

    imgDatRef.current.gray = new Image()
    imgDatRef.current.gray.src = object.layers.gray
    imgDatRef.current.gray.onload = () => {
      loadedRef.current.gray = true
      checkAllLoaded()
    }
    imgDatRef.current.outline = new Image()
    imgDatRef.current.outline.src = object.layers.outline
    imgDatRef.current.outline.onload = () => {
      loadedRef.current.outline = true
      checkAllLoaded()
    }
    imgDatRef.current.highlight = new Image()
    imgDatRef.current.highlight.src = object.layers.highlight
    imgDatRef.current.highlight.onload = () => {
      loadedRef.current.highlight = true
      checkAllLoaded()
    }
    setImgDatState({
      gray: imgDatRef.current.gray,
      outline: imgDatRef.current.outline,
      highlight: imgDatRef.current.highlight,
    })

    // layersRef.current.gray?.addEventListener('load', () => {
    //   loadedRef.current.gray = true
    //   console.log('image loaded newly')
    //   checkAllLoaded()
    //   loadedCount++
    // })
    // layersRef.current.outline?.addEventListener('load', () => {
    //   loadedRef.current.outline = true
    //   console.log('image loaded newly')
    //   checkAllLoaded()
    //   loadedCount++
    // })
    // layersRef.current.highlight?.addEventListener('load', () => {
    //   loadedRef.current.highlight = true
    //   console.log('image loaded newly')
    //   checkAllLoaded()
    //   loadedCount++
    // })
    if (object.layers.outline?.includes('data:image')) {
      loadedRef.current.outline = true
      checkAllLoaded()
      loadedCount++
    }
  }, [JSON.stringify(object)])

  useEffect(() => {
    let svg = layersRef.current?.color
    if (svg) eraseOpacity(svg)
  }, [color_, object.layers.color])

  useEffect(() => {
    setStyle(prev => ({
      ...prev,
      width,
      height,
      zIndex: baseZindex,
      transform: `scale(${transform?.scale}) translateX(${transform?.translateX}%) translateY(${transform?.translateY}%)`
    }))
  }, [width, height, JSON.stringify(transform)])

  const checkAllLoaded = () => {
    if (object.layers.gray && !loadedRef.current.gray) return
    if (object.layers.outline && !loadedRef.current.outline) return
    if (object.layers.highlight && !loadedRef.current.highlight) return

    // All loaded
    if (setLoaded) setLoaded()

    loadedRef.current.gray = false
    loadedRef.current.outline = false
    loadedRef.current.highlight = false
    if (animation) {
      let property = { ...animation.init }
      anime({
        ...animation,
        targets: property,
        update: () => {
          let translate = ''
          if (property.translateX && property.translateY) {
            translate = `translate(${property.translateX}%, ${property.translateY}%)`
          } else if (property.translateX) {
            translate = `translate(${property.translateX}%, ${transform?.translateY || 0}%)`
          } else if (property.translateY) {
            translate = `translate(${transform?.translateX || 0}%, ${property.translateY}%)`
          } else if (transform) {
            translate = `translate(${transform.translateX}%, ${transform.translateY}%)`
          }
          setStyle(prev => ({
            ...prev,
            opacity: property.opacity,
            transform: `scale(${property.scale || transform.scale}) ${translate}`
          }))
        }
      })
    } else {
      setStyle(prev => ({ ...prev, opacity: 1 }))
    }
  }

  const eraseOpacity = (element) => {
    let els = element.getElementsByTagName('path')
    if (els && els.length) {
      for (let i = 0; i < els.length; i++) {
        els[i].style.fill = color_
        if (!transparent) els[i].style.opacity = 1
      }
    }
  }
  const hClick = () => {
    if (props.onClick) props.onClick()
  }

  return <>
    <div className="base"
      style={{ opacity: 0, ...props.style, ...style }}
      ref={ref => baseRef.current = ref}
      onClick={hClick}
    >
      {object.layers.color &&
        <object.layers.color
          className="image layer-2"
          width={width}
          height={height}
          viewBox={`0 0 ${object.original.width} ${object.original.height}`}
          preserveAspectRatio='xMinYMin meet'
          style={{ zIndex: baseZindex }}
          ref={ref => layersRef.current.color = ref} />}

      {object.layers.gray &&
        <img className="image layer-1"
          // src={object.layers.gray}
          src={imgDatState.gray?.src}
          style={{ zIndex: baseZindex + 1 }}
          ref={ref => layersRef.current.gray = ref} />}

      {object.layers.highlight &&
        <img className="image layer-3"
          // src={object.layers.highlight}
          src={imgDatState.highlight?.src}
          style={{ zIndex: baseZindex + 2 }}
          ref={ref => layersRef.current.highlight = ref} />}

      {object.layers.outline &&
        <img className="image layer-4"
          // src={object.layers.outline}
          src={imgDatState.outline?.src}
          style={{ zIndex: baseZindex + 3 }}
          ref={ref => layersRef.current.outline = ref} />}
    </div>
  </>
}

export default memo(Base)