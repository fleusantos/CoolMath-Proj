import { useEffect, useState } from 'react'
import anime from 'animejs'
import Lazy from '../lazy/Lazy'
import placeholder from '../../assets/images/placeholder.png'
import './BgSetter.scss'
import bgBtnBg from '../../assets/images/UI/Desktop/MainPage/Button/UIDesktop_MainPage_Button_BackgroundButton.png'
import prev from '../../assets/images/UI/Desktop/MainPage/Button/UIDesktop_MainPage_Button_BackgroundArrows_Left.png'
import next from '../../assets/images/UI/Desktop/MainPage/Button/UIDesktop_MainPage_Button_BackgroundArrows_Right.png'
/////// bg ///////
import bg1 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Blonx.png'
import bg2 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_CMGTG.png'
import bg3 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_FBWG.png'
import bg4 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Pizzeria.png'
import bg5 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Run.png'
import bg6 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Blue.png'
import bg7 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Cyan.png'
import bg8 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Green.png'
import bg9 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Orange.png'
import bg10 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Purple.png'

import bg1Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Blonx.png'
import bg2Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_CMGTG.png'
import bg3Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_FBWG.png'
import bg4Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Pizzeria.png'
import bg5Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Run.png'
import bg6Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Blue.png'
import bg7Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Cyan.png'
import bg8Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Green.png'
import bg9Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Orange.png'
import bg10Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Purple.png'
///////////////////

let curBgIndex = 2

const BgSetter = ({ setBg, mobileMod, playBtnClickSound, ...props }) => {
  // useEffect(() => {
  //   setBg(bgs(mobileMod)[curBgIndex])
  // }, [])
  // const hPrev = () => {
  //   curBgIndex = curBgIndex - 1 < 0 ? bgs(mobileMod).length - 1 : curBgIndex - 1
  //   setBg(bgs(mobileMod)[curBgIndex])
  //   playBtnClickSound()
  // }
  // const hNext = () => {
  //   curBgIndex = curBgIndex + 1 == bgs(mobileMod).length ? 0 : curBgIndex + 1
  //   setBg(bgs(mobileMod)[curBgIndex])
  //   anime({
  //     targets: '#panel-bg',
  //     opacity: ['1', '0']
  //   })
  //   playBtnClickSound()
  // }
  return <>
    <div {...props} className='bg-setter'>
      <Lazy className='main' src={bgBtnBg} placeholder={placeholder} />
      <img className='btn next' src={prev} placeholder={placeholder} />
      <img className='btn prev' src={next} placeholder={placeholder} />
    </div>
  </>
}
export default BgSetter