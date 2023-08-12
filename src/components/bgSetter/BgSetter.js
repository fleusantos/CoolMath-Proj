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
import bg2 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Blue.png'
import bg3 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_CMGTG.png'
import bg4 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Cyan.png'
import bg5 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_FBWG.png'
import bg6 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Green.png'
import bg7 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Orange.png'
import bg8 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Pizzeria.png'
import bg9 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Purple.png'
import bg10 from '../../assets/images/UI/Desktop/MainPage/Background/UIDesktop_MainPage_Background_Run.png'

import bg1Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Blonx.png'
import bg2Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Blue.png'
import bg3Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_CMGTG.png'
import bg4Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Cyan.png'
import bg5Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_FBWG.png'
import bg6Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Green.png'
import bg7Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Orange.png'
import bg8Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Pizzeria.png'
import bg9Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Purple.png'
import bg10Mob from '../../assets/images/UI/Mobile/MainPage/Background/UIMobile_MainPage_Background_Run.png'
///////////////////


const bgs = (mobileMod) => mobileMod ?
  [bg1Mob, bg2Mob, bg3Mob, bg4Mob, bg5Mob, bg6Mob, bg7Mob, bg8Mob, bg9Mob, bg10Mob] :
  [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10]
let curBgIndex = 4

const BgSetter = ({ setBg, mobileMod }) => {
  useEffect(() => {
    setBg(bgs(mobileMod)[curBgIndex])
  }, [])
  useEffect(() => {
    setBg(bgs(mobileMod)[curBgIndex])
  }, [mobileMod])
  const hPrev = () => {
    curBgIndex = curBgIndex - 1 < 0 ? bgs(mobileMod).length - 1 : curBgIndex - 1
    setBg(bgs(mobileMod)[curBgIndex])
  }
  const hNext = () => {
    curBgIndex = curBgIndex + 1 == bgs(mobileMod).length ? 0 : curBgIndex + 1
    // setBg(bgs(mobileMod)[curBgIndex])
    console.log('dsfjaslkjfklj')
    anime({
      targets: '#panel-bg',
      opacity: ['1', '0']
    })
  }
  return <>
    <div className='bg-setter'>
      <Lazy className='main' src={bgBtnBg} placeholder={placeholder} />
      <Lazy className='btn next' src={prev} placeholder={placeholder} onClick={hPrev} />
      <Lazy className='btn prev' src={next} placeholder={placeholder} onClick={hNext} />
    </div>
  </>
}
export default BgSetter