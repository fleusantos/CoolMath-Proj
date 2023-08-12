import './Base.scss'
import { useEffect, useRef, useState } from 'react'

const Base = ({
  color: color_,
  object,
  width,
  height,
  transparent,
  transform,
  baseZindex,
  ...props
}) => {
  const svgRef = useRef(null)
  const [style, setStyle] = useState({})

  useEffect(() => {
    let els = svgRef?.current?.getElementsByTagName('path')
    if (els && els.length) {
      for (let i = 0; i < els.length; i++) {
        els[i].style.fill = color_
        if (!transparent) els[i].style.opacity =  1
      }
    }
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

  return <>
    <div className="base" style={{...props.style, ...style}} onClick={props.onClick}>
      {object.layers.color &&
        <object.layers.color
          className="image layer-2"
          width={width}
          height={height}
          viewBox={`0 0 ${object.original.width} ${object.original.height}`}
          preserveAspectRatio='xMinYMin meet' 
          style={{ zIndex: baseZindex }}
          ref={svgRef} />}

      {object.layers.gray &&
        <img className="image layer-1" src={object.layers.gray} style={{ zIndex: baseZindex + 1 }} />}

      {object.layers.highlight &&
        <img className="image layer-3" src={object.layers.highlight} style={{ zIndex: baseZindex + 2 }} />}

      {object.layers.outline &&
        <img className="image layer-4" src={object.layers.outline} style={{ zIndex: baseZindex + 3 }} />}
    </div>
  </>
}

export default Base