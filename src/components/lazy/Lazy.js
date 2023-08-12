import React, { useEffect, useRef } from 'react';
import placeholder from '../../assets/images/placeholder.png'
import './Lazy.scss'

const Lazy = ({ placeholder: placeholderSrc, src: realSrc, alt, ...props }) => {
 const imgRef = useRef(null);

 useEffect(() => {
  const imgElement = imgRef.current;

  const handleLoad = () => {
   imgElement.src = realSrc;
   imgElement.style.opacity = 1
   console.log('load')
   imgElement.removeEventListener('load', handleLoad);
  };

  const handleError = () => {
   console.log('Error loading image', realSrc);
   imgElement.src = placeholderSrc ? placeholderSrc : placeholder;
  };

  imgElement.addEventListener('load', handleLoad);
  imgElement.addEventListener('error', handleError);

  imgElement.style.opacity = 0
  imgElement.src = placeholderSrc ? placeholderSrc : placeholder;

  return () => {
   imgElement.removeEventListener('load', handleLoad);
   imgElement.removeEventListener('error', handleError);
  };
 }, [realSrc]);

 return <img ref={imgRef} alt={alt} loading="lazy" {...props} className={`lazy-load-image ${props.className}`} />;
}

export default Lazy