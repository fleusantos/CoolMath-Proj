import './Cover.scss'
import cover from '../../assets/images/UI/Desktop/TitlePage/UIDesktop_TitlePage_Idle.gif'
import coverMob from '../../assets/images/UI/Mobile/TitlePage/UIMobile_TitlePage_Idle.gif'
import flip from '../../assets/images/UI/Desktop/TitlePage/UIDesktop_TitlePage_Animation.gif'
import flipMob from '../../assets/images/UI/Mobile/TitlePage/UIMobile_TitlePage_Animation.gif'
import { useRef, useState } from 'react'
import Moz from '../moz/Moz'


const Cover = ({ hideCover, mobileMod, setCoverLoaded, playStartClickSound, ...props }) => {
 const howmany = useRef(0)
 const [shouldFlip, setShouldFlip] = useState(false)
 const animate = () => {
  setShouldFlip(true)
  setTimeout(() => {
   hideCover()
  }, 1700);
 }
 const start = () => {
  animate()
  playStartClickSound()
 }
 const setLoaded = () => {
  howmany.current++
  if (howmany.current == 2) {
   setCoverLoaded()
   howmany.current = 0
  }
 }

 return <div {...props} id='cover' className={`${props.className}`}>
  <Moz className='first'
   src={mobileMod ? coverMob : cover}
   setLoaded={setLoaded}
   style={{ display: shouldFlip ? 'none' : 'block' }} />
  <Moz src={mobileMod ? flipMob : flip}
   setLoaded={setLoaded}
   style={{ display: !shouldFlip ? 'none' : 'block' }} />
  <div className='btn-cornor' onClick={start}></div>
 </div>
}

export default Cover