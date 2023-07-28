import './Panel.scss'
import { useEffect, useState } from 'react'
import { SketchPicker } from 'react-color'
import domtoimage from 'dom-to-image';
import Tabs from '../tabs/Tabs'
import Pan from '../pan/Pan'


const Panel = () => {
 const [categoryColor, setCategoryColor] = useState({
  hair: 'white',
  head: 'white',
  body: 'white',
  bottom: 'white',
 })
 const [categoryObj, setCategoryObj] = useState({
  hair: 'hairLong',
  head: 'triangle',
  body: 'body',
  bottom: 'longPants'
 })
 const [category, setCategory] = useState('head')

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
    var blob = dataURLToBlob(dataUrl);
    var link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = URL.createObjectURL(blob);
    link.click();
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
   <Pan categoryColor={categoryColor} categoryObj={categoryObj} />
   <SketchPicker color={categoryColor[category]} onChangeComplete={hChangeColorComplete} />
   <Tabs selectCatObj={selectCatObj} selectCat={selectCat} />
   <div><button onClick={hSc}>cli</button></div>
  </div>
 </>
}

export default Panel