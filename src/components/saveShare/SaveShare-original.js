import './SaveShare.scss'
import { memo, useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'

import Lazy from '../lazy/Lazy'
import { getCookie, cmgSaveAvatar } from '../../utils/cmg-character-tool'
import { svgToPng } from '../../utils/functions'

import bg from '../../assets/images/UI/Desktop/SavePage/NotebookPage/UIDesktop_SavePage_NotebookPage_PageBackground.png'
import bgMob from '../../assets/images/UI/Mobile/SavePage/NotebookPage/UIMobile_SavePage_NotebookPage_PageBackground.png'

import cas from '../../assets/images/UI/Desktop/SavePage/NotebookPage/UIDesktop_SavePage_NotebookPage_PhotoFrame.png'
import casMob from '../../assets/images/UI/Mobile/SavePage/NotebookPage/UIMobile_SavePage_NotebookPage_PhotoFrame.png'

import close from '../../assets/images/UI/Desktop/SavePage/NotebookPage/UIDesktop_SavePage_NotebookPage_XButton.png'

import copyBtn from '../../assets/images/UI/Desktop/SavePage/Button/UIDesktop_SavePage_CopyButton.png'
import downBtn from '../../assets/images/UI/Desktop/SavePage/Button/UIDesktop_SavePage_DownloadButton.png'
import setaBtn from '../../assets/images/UI/Desktop/SavePage/Button/UIDesktop_SavePage_SetAvatarButton.png'

import copyBtnMob from '../../assets/images/UI/Mobile/SavePage/Button/UIMobile_SavePage_Button_ShareButton.png'
import downBtnMob from '../../assets/images/UI/Mobile/SavePage/Button/UIMobile_SavePage_Button_DownloadButton.png'
import setaBtnMob from '../../assets/images/UI/Mobile/SavePage/Button/UIMobile_SavePage_Button_SetAvatarButton.png'

import successMsg from '../../assets/images/UI/Desktop/SavePage/NotebookPage/UIDesktop_SavePage_NotebookPage_CopiedMessage.png'
import successMsgMob from '../../assets/images/UI/Mobile/SavePage/NotebookPage/UIMobile_SavePage_NotebookPage_CopiedMessage.png'


const SaveShare = ({
  cap,
  copy,
  download,
  mobileMod,
  showSaveShare,
  closeSaveShare,
  copyClipSuccess,
  setCopyClipSuccess,
  playBtnClickSound,
  ...props }) => {

  const [style, setStyle] = useState({})

  useEffect(() => {
    return () => {
      setCopyClipSuccess(false)
    }
  }, [])
  useEffect(() => {
    if (!copyClipSuccess) setStyle({ display: 'none' })
    else setStyle({ display: 'block' })
  }, [copyClipSuccess])

  const hClose = () => {
    closeSaveShare()
    playBtnClickSound()
  }
  const hCopy = () => {
    copy()
    playBtnClickSound()
  }
  const hDownload = () => {
    download()
    playBtnClickSound()
  }
  const hUpload = () => {
    const ifLoggedin = getCookie("cmg_l")
    console.log('ifloggedin', ifLoggedin)
    if (ifLoggedin == true) {
      svgToPng(cap.data, cap.originWidth, cap.originHeight)
      .then(dataURL => {
        cmgSaveAvatar(dataURL)
      })
    }
  }

  return <div
    id='dlg-save-share' {...props}
    style={{ display: showSaveShare ? '' : 'none' }}>

    <Lazy className='bg' src={!mobileMod ? bg : bgMob} />

    <img className='msg'
      src={!mobileMod ? successMsg : successMsgMob}
      style={style} />
    <img className='btn close' src={close} onClick={hClose} />

    <div className='main'>
      <div className='img-container'>
        <div className='box'>
          <div className='viewport'>
            {/* <img className='avatar' src={cap.data} style={
              mobileMod ?
                (cap.mobileMod ? {
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(-50%, -50%)`,
                } : {
                  left: `50%`,
                  top: `50%`,
                  transform: `scale(0.9) translate(-59%, -56%)`,
                })
                : (cap.mobileMod ? {
                  left: `50%`,
                  top: `3%`,
                  transform: `scale(1.3) translate(-40%, 10%)`,
                } : {
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(-50%, -50%)`,
                })
            } /> */}
            {/* <ReactSVG 
            src={cap.data} /> */}
            <svg
              className='avatar'
              width={300}
              height={300}
              viewBox={`0 0 ${cap.originWidth} ${cap.originHeight}`}
              style={
                mobileMod ?
                  (cap.mobileMod ? {
                    left: `50%`,
                    top: `50%`,
                    transform: `translate(-50%, -50%)`,
                  } : {
                    left: `50%`,
                    top: `50%`,
                    transform: `translate(-50%, -50%) scale(1.1)`,
                  })
                  : (cap.mobileMod ? {
                    left: `50%`,
                    top: `3%`,
                    transform: `scale(1.3) translate(-40%, 10%)`,
                  } : {
                    left: `50%`,
                    top: `50%`,
                    transform: `translate(-50%, -50%) scale(1.2)`,
                  })
              }
            >
              <image href={cap.data} />
            </svg>
          </div>
          <Lazy className='case' src={!mobileMod ? cas : casMob} />
        </div>
      </div>
      <div className='btn-group'>
        <img className='btn' src={!mobileMod ? copyBtn : copyBtnMob} onClick={hCopy} />
        <img className='btn' src={!mobileMod ? downBtn : downBtnMob} onClick={hDownload} />
        <img className='btn' src={!mobileMod ? setaBtn : setaBtnMob} onClick={hUpload} />
      </div>
    </div>


  </div>
}
export default memo(SaveShare)