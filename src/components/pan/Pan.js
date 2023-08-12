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
import Base from '../base/Base'
import Lazy from '../lazy/Lazy'
import { useState, useEffect } from 'react'
import shadow from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Shadow.png'

let rendered = false
let gMob = false

const Pan = ({ categoryColor, categoryObj, mobileMod, config }) => {
 const [width, setWidth] = useState(0)

 useEffect(() => {
  if (rendered) return
  rendered = true

  window.addEventListener('resize', hResize)
  hResize()
 }, [])
 useEffect(() => {
  gMob = mobileMod
  hResize()
 }, [mobileMod])
 const hResize = () => {
  let pan = document.getElementById('pan')
  if (gMob) {
   setWidth(pan.clientWidth)
  } else {
   setWidth(pan.clientWidth + 180)
  }
 }


 return <div id='pan' className='pan'>
  <Lazy src={shadow}
   className='shadow'/>
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
    object={fa[categoryObj.fa]}
    baseZindex={29}
   />}
  <Base
   color={categoryColor.hair}
   width={width}
   height={width}
   transform={{
    scale: config.position.head[categoryObj.head].hair[categoryObj.hair].scale,
    translateX: config.position.head[categoryObj.head].hair[categoryObj.hair].translateX,
    translateY: config.position.head[categoryObj.head].hair[categoryObj.hair].translateY
   }}
   object={hairs[categoryObj.hair]}
   baseZindex={25}
  />
  <Base
   color={categoryColor.fx}
   width={width}
   height={width}
   transform={{
    scale: config.position.head[categoryObj.head].fx[categoryObj.fx].scale,
    translateX: config.position.head[categoryObj.head].fx[categoryObj.fx].translateX,
    translateY: config.position.head[categoryObj.head].fx[categoryObj.fx].translateY
   }}
   object={fx[categoryObj.fx]}
   baseZindex={21}
  />
  <Base
   color={categoryColor.head}
   width={width}
   height={width}
   transform={{
    scale: config.position.head[categoryObj.head].scale,
    translateX: config.position.head[categoryObj.head].translateX,
    translateY: config.position.head[categoryObj.head].translateY
   }}
   object={heads[categoryObj.head]}
   baseZindex={17}
  />
  <Base
   color={categoryColor.head}
   width={width}
   height={width}
   object={body}
   baseZindex={1}
  />
  <Base
   color={categoryColor.sh}
   width={width}
   height={width}
   object={sh[categoryObj.sh]}
   baseZindex={5}
  />
  <Base
   color={categoryColor.bottom}
   width={width}
   height={width}
   object={bottoms[categoryObj.bottom]}
   baseZindex={9}
  />
  <Base
   color={categoryColor.top}
   width={width}
   height={width}
   object={top[categoryObj.top]}
   baseZindex={13}
  />
 </div>
}

export default Pan