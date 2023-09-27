import { memo, useEffect, useRef, useState } from 'react'
import './Moz.scss'

const Moz = ({ src, setLoaded, ...props }) => {
 const imgRef  = useRef(null)

 function hLoad() {
  setLoaded()
 }

 return <img {...props} 
 src={src} 
 onLoad={hLoad}
 ref={imgRef}
 />
}
export default memo(Moz)