import { memo, useEffect, useRef, useState } from 'react'
import generateRandomId from '../../utils/functions'
import anime from 'animejs'
import './Smooth.scss'

const Smooth = ({ src, panelWidth, panelHeight, mobileMod, setBgLoaded, ...props }) => {
  const elesRef = useRef({})
  const oldLength = useRef(0)
  const firstLoaded = useRef(false)
  const [data, setData] = useState([])
  const [scale, setScale] = useState(2.5)
  const [translate, setTranslate] = useState('')

  useEffect(() => {
    if (!src) return
    addNew(src)
  }, [src])
  useEffect(() => {
    if (panelHeight === null || panelWidth === null) return
    const rate = panelHeight / panelWidth
    if (mobileMod) {
      setScale(rate)
      setTranslate('')
    }
    else {
      setScale(1.33123)
      // setScale(1.1)
      // setTranslate('translate(36px, -45px)')
    }
  }, [panelWidth, panelHeight])
  useEffect(() => {
    if (data.length > oldLength.current) {
      elesRef.current[data[data.length - 1].id].addEventListener('load', handleLoad)
      elesRef.current[data[data.length - 1].id].removeEventListener('error', handleError)
      // handleLoad()

      data.forEach(({ id, deleted, opacity }) => {
        if (!deleted) return
        let property = { opacity }
        anime({
          targets: property,
          opacity: 0,
          easing: 'linear',
          update: () => {
            setData(prev => prev.map(dat =>
              dat.id == id ? { ...dat, opacity: property.opacity } : dat))
          },
          complete: () => {
            setData(prev => prev.filter(({ id: elId }) => elId != id))
          }
        })
      })
    }
    oldLength.current = data.length
  }, [data.length])


  const handleLoad = () => {
    let property = { opacity: 1 }
    anime({
      targets: property,
      opacity: [0, 1],
      easing: 'linear',
      update: () => {
        setData(prev => prev.map(dat =>
          dat.id == data[data.length - 1].id ? { ...dat, opacity: property.opacity } : dat))
      },
      complete: () => {
        if (!firstLoaded.current) {
          firstLoaded.current = true
          setBgLoaded(true)
        }
      }
    })
  }
  const handleError = () => {
    console.log('Error loading image of img with id', data[data.length - 1].id)
  }
  const addNew = () => {
    setData(prev => {
      let clone = [...prev]
      if (clone.length > 0) {
        const lastElIndex = clone.length - 1
        clone[lastElIndex].deleted = true
      }
      clone.push({ src, id: generateRandomId(), deleted: false, opacity: 0 })
      return clone
    })
  }

  return <div {...props} className={`smooth ${props.className}`}>
    {data.map(({ src, id, opacity }) =>
      <img ref={ref => elesRef.current[id] = ref}
        id={id}
        src={src}
        style={{ position: 'absolute', left: '0', opacity, transform: `scale(${scale}) ${translate}` }}
        key={`key-${id}`} />)}
  </div>
}
export default memo(Smooth)