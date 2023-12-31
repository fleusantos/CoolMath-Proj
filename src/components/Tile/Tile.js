import { useRef, useState, useEffect } from 'react'
import Base from '../base/Base'
import { tile } from '../../utils/globals'
import './Tile.scss'
import colorSelectSound from '../../assets/sounds/characterCustomizerSfx/changing-color-in-color-palet.wav'
import useSound from 'use-sound'


const Tile = ({ index, color, changeColor }) => {
 const tileRef = useRef(null)
 const [playColorSelectSound] = useSound(colorSelectSound)
 const [width, setWidth] = useState(tileRef?.current?.clientWidth || 0)

 useEffect(() => {
  if (tileRef.current) {
   hSizeChange();
  }
  const resizeObserver = new ResizeObserver(hSizeChange);
  if (tileRef.current) {
   resizeObserver.observe(tileRef.current);
  }
  return () => {
   resizeObserver.disconnect();
  };
 }, [])
 const hSizeChange = () => {
  setWidth(tileRef.current.clientWidth)
 }
 const hClick = () => {
  changeColor(index)
  playColorSelectSound()
 }

 return <>
  <div className='color-tile'
   onClick={hClick}
   ref={tileRef}
  >
   <Base
    color={color}
    width={width}
    height={width}
    object={tile}
    baseZindex={100}
    style={{ position: 'relative', width: '100%', top: 0, left: 0 }}
   />
  </div>
 </>
}
export default Tile