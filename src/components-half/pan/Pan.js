import './Pan.scss'
import {
  heads,
  body,
  top,
  bottoms,
  sh,
  hairs,
  fa,
  fx
} from '../../utils/globals'
import Lazy from '../lazy/Lazy'
import { useState, useEffect, lazy, useRef } from 'react'
import shadow from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Shadow.png'
import useSound from 'use-sound'
import clothingSound from '../../assets/sounds/characterCustomizerSfx/change-clothes.wav'

const Base = lazy(() => import('../base/Base'))
let rendered = false
let gMob = false
let sameAnim = {}

const Pan = ({ categoryColor, categoryObj, mobileMod, config, panelWidth, panelHeight }) => {
  const panRef = useRef(null)
  const [width, setWidth] = useState(0)
  const [style, setStyle] = useState({})
  const [shadowStyle, setShadowStyle] = useState({})
  const [playClothingSound] = useSound(clothingSound)

  useEffect(() => {
    if (panRef.current) {
      hResize();
    }
    const resizeObserver = new ResizeObserver(hResize);
    if (panRef.current) {
      resizeObserver.observe(panRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [])
  useEffect(() => {
    gMob = mobileMod
    hResize()
  }, [mobileMod])
  useEffect(() => {
    if (!mobileMod) {
      setStyle({})
      setShadowStyle({})
      return
    }
    if (panelHeight / panelWidth > 1.6893) {
      setStyle({})
      setShadowStyle({})
    } else {
      setStyle(prev => ({ ...prev, height: '80%', width: 'auto', aspectRatio: '1/1' }))
      setShadowStyle(prev => ({ ...prev, width: '30%', left: '35%', bottom: '6%' }))
    }
  }, [panelWidth, panelHeight])
  const hResize = () => {
    let pan = document.getElementById('pan')
    if (gMob) {
      setWidth(pan.clientWidth)
    } else {
      setWidth((pan.clientWidth + 180) * 0.85)
    }
  }
  // const topLoaded = () => {
  //   playClothingSound()
  // }
  // const bottomLoaded = () => {
  //   playClothingSound()
  // }
  const elementLoaded = () => {
    playClothingSound()
  }

  return <div id='pan' className='pan' style={style} ref={panRef}>
    <Lazy src={shadow}
      className='shadow'
      style={shadowStyle} />

    {/* ----- Face Acessary ------ */}
    {categoryObj.fa != 'none' &&
      <Base
        color={categoryColor.fa}
        width={width}
        height={width}
        transparent={true}
        transform={{
          scale: config.position.head[categoryObj.head].fa[categoryObj.fa].scale,
          translateX: config.position.head[categoryObj.head].fa[categoryObj.fa].translateX,
          translateY: config.position.head[categoryObj.head].fa[categoryObj.fa].translateY
        }}
        animation={{
          ...sameAnim,
          init: { opacity: 0, scale: 0.9, translateY: -20 },
          opacity: 1,
          translateY: config.position.head[categoryObj.head].fa[categoryObj.fa].translateY,
          scale: config.position.head[categoryObj.head].fa[categoryObj.fa].scale,
        }}
        object={fa[categoryObj.fa]}
        baseZindex={29}
        setLoaded={elementLoaded}
      />}


    {/* ----- Hair ------ */}
    <Base
      color={categoryColor.hair}
      width={width}
      height={width}
      transform={{
        scale: config.position.head[categoryObj.head].hair[categoryObj.hair].scale,
        translateX: config.position.head[categoryObj.head].hair[categoryObj.hair].translateX,
        translateY: config.position.head[categoryObj.head].hair[categoryObj.hair].translateY
      }}
      animation={{
        ...sameAnim,
        init: { opacity: 0, scale: 0.8, translateY: -20 },
        opacity: 1,
        scale: config.position.head[categoryObj.head].hair[categoryObj.hair].scale,
        translateY: config.position.head[categoryObj.head].hair[categoryObj.hair].translateY,
      }}
      object={hairs[categoryObj.hair]}
      baseZindex={25}
      setLoaded={elementLoaded}
    />


    {/* ----- Face Expression ------ */}
    <Base
      color={categoryColor.fx}
      width={width}
      height={width}
      transform={{
        scale: config.position.head[categoryObj.head].fx[categoryObj.fx].scale,
        translateX: config.position.head[categoryObj.head].fx[categoryObj.fx].translateX,
        translateY: config.position.head[categoryObj.head].fx[categoryObj.fx].translateY
      }}
      animation={{
        ...sameAnim,
        init: { opacity: 0, scale: 0.7 },
        opacity: 1,
        scale: config.position.head[categoryObj.head].fx[categoryObj.fx].scale,
      }}
      object={fx[categoryObj.fx]}
      baseZindex={21}
      setLoaded={elementLoaded}
    />


    {/* ----- Head ------ */}
    <Base
      color={categoryColor.head}
      width={width}
      height={width}
      transform={{
        scale: config.position.head[categoryObj.head].scale,
        translateX: config.position.head[categoryObj.head].translateX,
        translateY: config.position.head[categoryObj.head].translateY
      }}
      animation={{
        ...sameAnim,
        init: { opacity: 0, scale: 0.7 },
        opacity: 1,
        scale: config.position.head[categoryObj.head].scale,
      }}
      object={heads[categoryObj.head]}
      baseZindex={17}
      setLoaded={elementLoaded}
    />


    {/* ----- Body ------ */}
    <Base
      color={categoryColor.head}
      width={width}
      height={width}
      object={body}
      baseZindex={1}
      animation={{
        ...sameAnim,
        init: { opacity: 0, scale: 0 },
        opacity: 1,
        scale: 1,
      }}
      setLoaded={elementLoaded}
    />


    {/* ----- Shoes ------ */}
    <Base
      color={categoryColor.sh}
      width={width}
      height={width}
      object={sh[categoryObj.sh]}
      baseZindex={5}
      animation={{
        ...sameAnim,
        init: { opacity: 0, scale: 0.9, translateY: 14 },
        opacity: 1,
        scale: 1,
        translateY: 0,
      }}
      setLoaded={elementLoaded}
    />


    {/* ----- Bottom ------ */}
    <Base
      color={categoryColor.bottom}
      width={width}
      height={width}
      object={bottoms[categoryObj.bottom]}
      baseZindex={9}
      animation={{
        ...sameAnim,
        init: { scale: 0.8, translateY: 10 },
        scale: 1,
        translateY: 0,
      }}
      setLoaded={elementLoaded}
    />


    {/* ----- Top ------ */}
    <Base
      color={categoryColor.top}
      width={width}
      height={width}
      object={top[categoryObj.top]}
      baseZindex={13}
      animation={{
        ...sameAnim,
        init: { scale: 0.8, translateY: -3 },
        scale: 1,
        translateY: 0,
      }}
      setLoaded={elementLoaded}
    />
  </div>
}

export default Pan