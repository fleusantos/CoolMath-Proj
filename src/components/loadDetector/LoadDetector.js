import './LoadDetector.scss'
import anime from 'animejs'
import loadingIcon from '../../assets/images/loading.gif'
import { useEffect, useState } from 'react'

const LoadDetector = ({ allLoaded }) => {
  const [style, setStyle] = useState({
    display: 'block',
    opacity: 1,
  })
  useEffect(() => {
    if (allLoaded) {
      const property = { opacity: 1 }
      anime({
        targets: property,
        opacity: 0,
        update: () => {
          setStyle(s => ({ ...s, opacity: property.opacity }))
        },
        complete: () => {
          setStyle(s => ({ ...s, display: 'none' }))
        }
      })
    } else {
      setStyle(s => ({ ...s, display: 'block', opacity: 1 }))
    }
  }, [allLoaded])
  return <>
    <div className='load-detector' style={style}>
      <img src={loadingIcon} />
    </div>
  </>
}
export default LoadDetector