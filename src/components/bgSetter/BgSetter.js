import { useEffect, useState } from 'react'
import anime from 'animejs'
import Lazy from '../lazy/Lazy'
import placeholder from '../../assets/images/placeholder.png'
import './BgSetter.scss'
import bgBtnBg from '../../assets/images/UI/Desktop/MainPage/Button/UIDesktop_MainPage_Button_BackgroundButton.png'
import prev from '../../assets/images/UI/Desktop/MainPage/Button/UIDesktop_MainPage_Button_BackgroundArrows_Left.png'
import next from '../../assets/images/UI/Desktop/MainPage/Button/UIDesktop_MainPage_Button_BackgroundArrows_Right.png'
/////// bg ///////
import bgLg1 from '../../assets/images/UI/Desktop/MainPage/Background-Large/UIMobile_MainPage_FullBackground_Blonx.png'
import bgLg2 from '../../assets/images/UI/Desktop/MainPage/Background-Large/UIMobile_MainPage_FullBackground_CMGTG.png'
import bgLg3 from '../../assets/images/UI/Desktop/MainPage/Background-Large/UIMobile_MainPage_FullBackground_FBWG.png'
import bgLg4 from '../../assets/images/UI/Desktop/MainPage/Background-Large/UIMobile_MainPage_FullBackground_Pizzeria.png'
import bgLg5 from '../../assets/images/UI/Desktop/MainPage/Background-Large/UIMobile_MainPage_FullBackground_Run.png'
import bgLg6 from '../../assets/images/UI/Desktop/MainPage/Background-Large/UIMobile_MainPage_FullBackground_Blue.png'
import bgLg7 from '../../assets/images/UI/Desktop/MainPage/Background-Large/UIMobile_MainPage_FullBackground_Cyan.png'
import bgLg8 from '../../assets/images/UI/Desktop/MainPage/Background-Large/UIMobile_MainPage_FullBackground_Green.png'
import bgLg9 from '../../assets/images/UI/Desktop/MainPage/Background-Large/UIMobile_MainPage_FullBackground_Orange.png'
import bgLg10 from '../../assets/images/UI/Desktop/MainPage/Background-Large/UIMobile_MainPage_FullBackground_Purple.png'

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


const bgs = (mobileMod) => mobileMod ?
  [bg1Mob, bg2Mob, bg3Mob, bg4Mob, bg5Mob, bg6Mob, bg7Mob, bg8Mob, bg9Mob, bg10Mob] :
  [bgLg1, bgLg2, bgLg3, bgLg4, bgLg5, bgLg6, bgLg7, bgLg8, bgLg9, bgLg10]
let curBgIndex = 2

const BgSetter = ({ setBg, bgID, setBgID, mobileMod, playBtnClickSound, ...props }) => {
  useEffect(() => {
    setBg(bgs(mobileMod)[curBgIndex])
  }, [])
  useEffect(() => {
    const curBgID = ( bgID == null ? curBgIndex : bgID )
    setBg(bgs(mobileMod)[curBgID])
  }, [bgID])
  useEffect(() => {
    setBg(bgs(mobileMod)[curBgIndex])
  }, [mobileMod])
  const hPrev = () => {
    curBgIndex = curBgIndex - 1 < 0 ? bgs(mobileMod).length - 1 : curBgIndex - 1
    setBg(bgs(mobileMod)[curBgIndex])
    setBgID(curBgIndex)
    playBtnClickSound()
  }
  const hNext = () => {
    curBgIndex = curBgIndex + 1 == bgs(mobileMod).length ? 0 : curBgIndex + 1
    setBg(bgs(mobileMod)[curBgIndex])
    setBgID(curBgIndex)
    anime({
      targets: '#panel-bg',
      opacity: ['1', '0']
    })
    playBtnClickSound()
  }
  return <>
    <div {...props} className='bg-setter'>
      <Lazy className='main' src={bgBtnBg} placeholder={placeholder} />
      <img className='btn next' src={prev} placeholder={placeholder} onClick={hPrev} />
      <img className='btn prev' src={next} placeholder={placeholder} onClick={hNext} />
    </div>
  </>
}
export default BgSetter