import './SaveShare.scss'
import Lazy from '../lazy/Lazy'

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

import { useEffect } from 'react'

const SaveShare = ({ closeSaveShare, cap, copy, download, mobileMod, copyClipSuccess, setCopyClipSuccess, ...props }) => {

 useEffect(() => {
  if (!copyClipSuccess) return
  setTimeout(() => {
   setCopyClipSuccess(false)
  }, 1000);
 })

 return <div id='dlg-save-share' {...props}>
  <Lazy className='bg' src={!mobileMod ? bg : bgMob} />
  {copyClipSuccess &&
   <img className='msg' src={!mobileMod ? successMsg : successMsgMob} />}
  <img className='close' src={close} onClick={closeSaveShare} />


  <div className='main'>
   <div className='img-container'>
    <div className='box'>
     <div className='viewport'>
      <Lazy className='avatar' src={cap.data} style={
       mobileMod ?
        (cap.mobileMod ? {
         left: `50%`,
         top: `3%`,
         transform: `scale(0.9) translate(-61%, -6%)`,
        } : {
         left: `50%`,
         top: `3%`,
         transform: `scale(0.9) translate(-55%, -26%)`,
        })
        : (cap.mobileMod ? {
         left: `50%`,
         top: `3%`,
         transform: `translate(-54%, 4%)`,
        } : {
         left: `50%`,
         top: `3%`,
         transform: `translate(-48%, -16%)`,
        })
      } />
     </div>
     <Lazy className='case' src={!mobileMod ? cas : casMob} />
    </div>
   </div>
   <div className='btn-group'>
    <img className='btn' src={!mobileMod ? copyBtn : copyBtnMob} onClick={copy} />
    <img className='btn' src={!mobileMod ? downBtn : downBtnMob} onClick={download} />
    <img className='btn' src={!mobileMod ? setaBtn : setaBtnMob} />
   </div>
  </div>


 </div>
}
export default SaveShare