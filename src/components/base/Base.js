import './Base.scss'
import $ from 'jquery'
import { useEffect, useRef, useState } from 'react'

const Base = ({
 color: color_,
 object,
 width,
 height,
 baseZindex
}) => {
 const svgRef = useRef(null)
 const [style, setStyle] = useState({})

 useEffect(() => {
  let el = svgRef?.current.querySelector('path')
  if (el) el.style.fill = color_
 }, [color_, object.layers.color])

 useEffect(() => {
  setStyle(prev => ({ ...prev, width, height }))
 }, [width, height])

 const generateUniqueId = () => {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16).replace('.', '');

  return `id-${timestamp}-${hexadecimalString}`;
}

 return <>
  <div className="base" style={style}>

   <img className="image layer-1" src={object.layers.gray} style={{ zIndex: baseZindex + 1 }} />

   {object.layers.color &&
    <object.layers.color
    className="image layer-2"
    width={width}
    height={height}
    viewBox={`0 0 ${object.original.width} ${object.original.height}`}
    preserveAspectRatio='xMinYMin meet' style={{ zIndex: baseZindex }}
    ref={svgRef} />}

   {object.layers.highlight &&
    <img className="image layer-3" src={object.layers.highlight} style={{ zIndex: baseZindex + 2 }} />}

   <img className="image layer-4" src={object.layers.outline} style={{ zIndex: baseZindex + 3 }} />
  </div>
 </>
}

export default Base