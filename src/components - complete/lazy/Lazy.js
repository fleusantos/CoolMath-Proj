import React, { useEffect, useRef } from 'react';
import './Lazy.scss'
import generateRandomId from '../../utils/functions';

const Lazy = ({ placeholder: placeholderSrc, src: realSrc, alt, ...props }) => {
 const imgRef = useRef(null);
 const rendered = useRef(false)

 useEffect(()=> {
  if (rendered.current) return
  rendered.current = true
  if (!imgRef) return
  imgRef.current.id = generateRandomId()
 }, [])

 useEffect(() => {
  const imgElement = imgRef.current;

  const handleLoad = () => {
   imgElement.style.opacity = 1
   // imgElement.removeEventListener('load', handleLoad);
  };

  const handleError = () => {
   console.log('Error loading image', realSrc);
  };

  imgElement.addEventListener('load', handleLoad);
  imgElement.addEventListener('error', handleError);

  // imgElement.style.opacity = 0
  // imgElement.src = placeholderSrc ? placeholderSrc : placeholder;

  return () => {
   imgElement.removeEventListener('load', handleLoad);
   imgElement.removeEventListener('error', handleError);
  };
 }, [realSrc]);

 return <img ref={imgRef} alt={alt} src={realSrc} loading="lazy" {...props} className={`lazy-load-image ${props.className}`} />;
}

export default Lazy