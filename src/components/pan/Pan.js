import { useState, useEffect } from 'react'
import config from '../../config.json'
import Base from '../base/Base'
import './Pan.scss'
/////// resource import ///////
import gray from '../../assets/images/Character/Head/Triangle/Head_Triangle_Grayscale_v2.png'
import outline from '../../assets/images/Character/Head/Triangle/Head_Triangle_Outline.png'
import { ReactComponent as color } from '../../assets/images/Character/Head/Triangle/Head_Triangle_WhiteOverlay.svg'
import gray2 from '../../assets/images/Character/Head/Oval/Head_Oval_Grayscale_v2.png'
import outline2 from '../../assets/images/Character/Head/Oval/Head_Oval_Outline.png'
import { ReactComponent as color2 } from '../../assets/images/Character/Head/Oval/Head_Oval_WhiteOverlay.svg'
import grayb from '../../assets/images/Character/Body/Body_Grayscale_v2.png'
import outlineb from '../../assets/images/Character/Body/Body_Outline.png'
import { ReactComponent as colorb } from '../../assets/images/Character/Body/Body_WhiteOverlay.svg'
import graybt from '../../assets/images/Character/Bottom/LongPants/Bottom_LongPants_Grayscale_v2.png'
import outlinebt from '../../assets/images/Character/Bottom/LongPants/Bottom_LongPants_Outline.png'
import { ReactComponent as colorbt } from '../../assets/images/Character/Bottom/LongPants/Bottom_LongPants_WhiteOverlay.svg'
import graybt2 from '../../assets/images/Character/Bottom/LongSkirt/Bottom_LongSkirt_Grayscale_v2.png'
import outlinebt2 from '../../assets/images/Character/Bottom/LongSkirt/Bottom_LongSkirt_Outline.png'
import highlightbt2 from '../../assets/images/Character/Bottom/LongSkirt/Bottom_LongSkirt_Highlight.png'
import { ReactComponent as colorbt2 } from '../../assets/images/Character/Bottom/LongSkirt/Bottom_LongSkirt_WhiteOverlay.svg'
import grayhr from '../../assets/images/Character/Hair/Long/Hair_Long_Grayscale_v2.png'
import outlinehr from '../../assets/images/Character/Hair/Long/Hair_Long_Outline.png'
import { ReactComponent as colorhr } from '../../assets/images/Character/Hair/Long/Hair_Long_WhiteOverlay.svg'
import grayhrpf from '../../assets/images/Character/Hair/Poofy/Hair_Poofy_Grayscale_v2.png'
import outlinehrpf from '../../assets/images/Character/Hair/Poofy/Hair_Poofy_Outline.png'
import { ReactComponent as colorhrpf } from '../../assets/images/Character/Hair/Poofy/Hair_Poofy_WhiteOverlay.svg'



const triangle = {
 layers: {
  gray,
  color,
  outline
 },
 original: {
  width: 1024,
  height: 1024
 }
}
const oval = {
 layers: {
  gray: gray2,
  color: color2,
  outline: outline2,
 },
 original: {
  width: 1024,
  height: 1024
 }
}
const heads = { triangle, oval }
const body = {
 layers: {
  gray: grayb,
  color: colorb,
  outline: outlineb
 },
 original: {
  width: 1024,
  height: 1024
 }
}
const bodies = { body }
const longPants = {
 layers: {
  gray: graybt,
  color: colorbt,
  outline: outlinebt
 },
 original: {
  width: 1024,
  height: 1024
 }
}
const longSkirt = {
 layers: {
  gray: graybt2,
  color: colorbt2,
  outline: outlinebt2,
  highlight: highlightbt2
 },
 original: {
  width: 1024,
  height: 1024
 }
}
const bottoms = { longPants, longSkirt }
const hairLong = {
 layers: {
  gray: grayhr,
  color: colorhr,
  outline: outlinehr,
 },
 original: {
  width: 1024,
  height: 1024
 }
}
const hairPoofy = {
 layers: {
  gray: grayhrpf,
  color: colorhrpf,
  outline: outlinehrpf,
 },
 original: {
  width: 1024,
  height: 1024
 }
}
const hairs = { hairLong, hairPoofy }

let rendered = false


const Pan = ({ categoryColor, categoryObj }) => {
 const [width, setWidth] = useState(0)


 useEffect(() => {
  if (rendered) return
  rendered = true

  window.addEventListener('resize', hResize)

  let pan = document.getElementById('pan')
  setWidth(pan.clientWidth)
 }, [])
 useEffect(() => {
 }, [categoryColor.head, categoryColor.body, categoryColor.bottom])



 const hResize = () => {
  let pan = document.getElementById('pan')
  setWidth(pan.clientWidth)
 }


 return <div id='pan' className='pan'>
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
   baseZindex={13}
  />
  <Base
   color={categoryColor.head}
   width={width}
   height={width}
   object={heads[categoryObj.head]}
   baseZindex={5}
  />
  <Base
   color={categoryColor.body}
   width={width}
   height={width}
   object={bodies[categoryObj.body]}
   baseZindex={1}
  />
  <Base
   color={categoryColor.bottom}
   width={width}
   height={width}
   object={bottoms[categoryObj.bottom]}
   baseZindex={9}
  />
 </div>
}

export default Pan