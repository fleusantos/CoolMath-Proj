import { useRef, useState, useEffect } from 'react'
import Base from '../base/Base'
import { tile } from '../../utils/globals'
import './Tile.scss'


const Tile = ({ index, color, changeColor }) => {
 const tileRef = useRef(null)
 const [width, setWidth] = useState(tileRef?.current?.clientWidth)

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
  // setWidth(tileRef.current.clientWidth)
 }
 const hClick = () => {
  changeColor(index)
 }

 return <>
  <div className='color-tile'
   onClick={hClick}
  >
   <Base
    color={color}
    width={20}
    height={20}
    object={tile}
    baseZindex={100}
    style={{ position: 'relative', width: '100%', top: 0, left: 0 }}
   />
  </div>
 </>
}
export default Tile