import Tile from '../Tile/Tile'
import bg from '../../assets/images/UI/Mobile/MainPage/ColorPalette/UIMobile_ColorPalette_PaletteBackground.png'
import closeIcon from '../../assets/images/UI/Mobile/MainPage/ColorPalette/UIMobile_ColorPalette_XButton.png'
import './ColorPicker.scss'
import { useState } from 'react'
import Lazy from '../lazy/Lazy'
import placeholder from '../../assets/images/placeholder.png'

const ColorPicker = ({ cat, obj, changeColor, config, style, close }) => {
 return <>
   <div className='color-picker' style={style}>
    <img src={closeIcon} onClick={close} id='close' />
    <div className='bgr'>
     <Lazy src={bg} placeholder={placeholder} />
    </div>
    <div className='main'>
     {config.color[cat][obj]?.options.map((color, index) =>
      <Tile index={index} color={color} changeColor={changeColor} />
     )}
    </div>
   </div>
 </>
}
export default ColorPicker