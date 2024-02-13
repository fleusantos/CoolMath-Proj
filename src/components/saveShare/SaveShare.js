import './SaveShare.scss'
import { memo, useEffect, useRef, useState } from 'react'
import { ReactSVG } from 'react-svg'

import Lazy from '../lazy/Lazy'
import { getCookie, cmgSaveAvatar } from '../../utils/cmg-character-tool'
import { svgToPng } from '../../utils/functions'
import loadingIcon from '../../assets/images/loading.gif'

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

import successUpload from '../../assets/images/UI/Desktop/SavePage/NotebookPage/UIDesktop_SavePage_NotebookPage_Avatar_Updated.png'
import successUploadMob from '../../assets/images/UI/Mobile/SavePage/NotebookPage/UIMobile_SavePage_NotebookPage_Avatar_Updated.png'

import anime from 'animejs'


const SaveShare = ({
  cap,
  headCap,
  copy,
  conf,
  bgID,
  showWhile,
  download,
  mobileMod,
  headType,
  categoryObj,
  categoryColor,
  showSaveShare,
  closeSaveShare,
  copyClipSuccess,
  setCopyClipSuccess,
  playBtnClickSound,
  ...props }) => {

  const dataUrlRef = useRef(null)
  const [opacity, setOpacity] = useState(0)
  const [testImg, setTestImg] = useState(null)
  const [head, setHead] = useState(null)
  const [loading, setLoading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  useEffect(() => {
    return () => {
      setCopyClipSuccess(false)
    }
  }, [])
  useEffect(() => {
    let properties = { opacity: 0 }
    anime({
      targets: properties,
      opacity: 1,
      update: () => {
        setOpacity(properties.opacity)
      }
    })
    svgToPng(cap.data, cap.originWidth, cap.originHeight)
      .then(dataUrl => {
        dataUrlRef.current = dataUrl
      })
  }, [cap])
  useEffect(() => {
    setOpacity(0)
  }, [showSaveShare])

  const hClose = () => {
    closeSaveShare()
    playBtnClickSound()
  }
  async function dataURLToBlob(dataURL) {
    var parts = dataURL.split(';base64,');
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;
    var uInt8Array = new Uint8Array(rawLength);
    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }

  const hCopy = async () => {

    navigator.clipboard.write([
      new ClipboardItem({
        'image/png': await dataURLToBlob(dataUrlRef.current)
      })
    ]).then(() => {
      showWhile()
    }).catch(error => {
      console.error('Failed to copy image to clipboard:', error);
      showWhile()
    }).catch(error => {
      console.error('2 Failed to copy image to clipboard:', error);
    });

    playBtnClickSound()
  }
  const hDownload = () => {
    download()
    playBtnClickSound()
  }
  const signal_Finished = (uploadSuccess) => {
    setLoading(false)
    if (uploadSuccess) {
      setUploadSuccess(true)
      setTimeout(() => {
        setUploadSuccess(false)
      }, 3000);
    }
  }
  const hUpload = () => {
    // cropImageFromDataURL(cap.data, 80, 25, 240, 240, (faceOnlyImageDataUrl) => {
    const { x, y } = conf.position.head[headType].crop.desktop
    cropImageFromDataURL(cap.data, x, y, 240, 240, (faceOnlyImageDataUrl) => {
      const ifLoggedin = getCookie("cmg_l")
      // if (ifLoggedin != "" && ifLoggedin != "undefined") {
      console.log('categoryObj', categoryObj)
      svgToPng(cap.data, cap.originWidth, cap.originHeight)
        .then(fullBodyDataUrl => {
          cmgSaveAvatar(faceOnlyImageDataUrl, fullBodyDataUrl, categoryObj, categoryColor, bgID, signal_Finished)
        })
    })
    setLoading(true)
  }
  function cropImageFromDataURL(dataURL, x, y, width, height, callback) {
    // Create an Image object
    var img = new Image();

    // Set a callback function to execute once the image is loaded
    img.onload = function () {
      // Create a canvas element
      var canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      // Draw the cropped image onto the canvas
      var context = canvas.getContext('2d');
      context.drawImage(img, x, y, width, height, 0, 0, width, height);

      // Retrieve the cropped image data URL
      var croppedDataURL = canvas.toDataURL();

      // Use the croppedDataURL as needed (e.g., display or save it)
      console.log(croppedDataURL);

      setHead(croppedDataURL)
      callback(croppedDataURL)
    };

    // Set the source of the image as the data URL
    img.src = dataURL;
  }

  return <div
    id='dlg-save-share' {...props}
    style={{ display: showSaveShare ? '' : 'none' }}>

    <Lazy className='bg' src={!mobileMod ? bg : bgMob} />

    <img className={`msg ${copyClipSuccess ? 'show' : ''}`}
      src={!mobileMod ? successMsg : successMsgMob} />
    <img className={`msg ${uploadSuccess ? 'show' : ''}`}
      src={!mobileMod ? successUpload : successUploadMob} />
    <img className='btn close' src={close} onClick={hClose} />

    <div className='main'>
      <div className='img-container'>
        {/* <img src={head} /> */}

        <div className='box'>
          <div className='viewport'>
            <img className='load-icon' src={loadingIcon} />
            <svg
              className='avatar'
              width={300}
              height={300}
              viewBox={`0 0 ${cap.originWidth} ${cap.originHeight}`}
              style={{
                ...mobileMod ?
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
                  }),
                opacity
              }}
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
        <div className='btn-container'>
          <img className='btn' src={!mobileMod ? setaBtn : setaBtnMob} onClick={hUpload} />
          <div className={`icon-container ${loading ? 'show' : ''}`}>
            <img className='icon-load' src={loadingIcon} />
          </div>
        </div>
      </div>
    </div>


  </div>
}
export default memo(SaveShare)