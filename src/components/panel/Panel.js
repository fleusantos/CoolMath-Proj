import './Panel.scss'
import Base from '../base/Base'
import { useEffect, useState } from 'react'
import { SketchPicker } from 'react-color'
import domtoimage from 'dom-to-image';
import Tabs from '../tabs/Tabs'
/////// resource import ///////
import gray from './Head_Triangle_Grayscale.png'
import outline from './Head_Triangle_Outline.png'
import { ReactComponent as color } from './Head_Triangle_WhiteOverlay.svg'
import gray2 from './Head_Oval_Grayscale.png'
import outline2 from './Head_Oval_Outline.png'
import { ReactComponent as color2 } from './Head_Oval_WhiteOverlay.svg'
import grayb from './Body_Grayscale.png'
import outlineb from './Body_Outline.png'
import { ReactComponent as colorb } from './Body_WhiteOverlay.svg'
import graybt from './Bottom_LongPants_Grayscale.png'
import outlinebt from './Bottom_LongPants_Outline.png'
import { ReactComponent as colorbt } from './Bottom_LongPants_WhiteOverlay.svg'
import graybt2 from './Bottom_LongSkirt_Grayscale.png'
import outlinebt2 from './Bottom_LongSkirt_Outline.png'
import highlightbt2 from './Bottom_LongSkirt_Highlight.png'
import { ReactComponent as colorbt2 } from './Bottom_LongSkirt_WhiteOverlay.svg'

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

let rendered = false

const Panel = () => {
 const [width, setWidth] = useState(0)
 const [categoryColor, setCategoryColor] = useState({
  head: 'white',
  body: 'white',
  bottom: 'white',
 })
 const [categoryObj, setCategoryObj] = useState({
  head: 'triangle',
  body: 'body',
  bottom: 'longPants'
 })
 const [category, setCategory] = useState('head')

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
 const hChangeColorComplete = (color) => {
  setCategoryColor(prev => ({ ...prev, [category]: color.hex }))
 }
 const selectCatObj = (category, object) => {
  setCategoryObj(prev => ({ ...prev, [category]: object }))
 }
 const selectCat = (category) => {
  setCategory(category)
 }
 const hSc = () => {
  let el = document.getElementById('pan')
  capture(el)
 }
 function capture(element) {
  domtoimage.toPng(element)
   .then(function (dataUrl) {
    // Convert the data URL to a blob
    var blob = dataURLToBlob(dataUrl);

    var link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = URL.createObjectURL(blob);
    link.click();
    // }
   })
   .catch(function (error) {
    console.error("Error taking screenshot:", error);
   });

  // Utility function to convert a data URL to a blob
  function dataURLToBlob(dataURL) {
   var parts = dataURL.split(';base64,');
   var contentType = parts[0].split(':')[1];
   var raw = window.atob(parts[1]);
   var rawLength = raw.length;
   var uInt8Array = new Uint8Array(rawLength);
   for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
   }
   return new Blob([uInt8Array], { type: contentType });
  }
 }

 return <>
  <div className='panel'>
   <div id='pan' className='pan'>
    <Base
     color={categoryColor.head} width={width} height={width} object={heads[categoryObj.head]} baseZindex={5}
    />
    <Base
     color={categoryColor.body} width={width} height={width} object={bodies[categoryObj.body]} baseZindex={1}
    />
    <Base
     color={categoryColor.bottom} width={width} height={width} object={bottoms[categoryObj.bottom]} baseZindex={9}
    />
   </div>
   <SketchPicker color={categoryColor[category]} onChangeComplete={hChangeColorComplete} />
   <Tabs selectCatObj={selectCatObj} selectCat={selectCat} />
   <div><button onClick={hSc}>cli</button></div>
  </div>
 </>
}

export default Panel