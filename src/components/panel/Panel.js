import { useCallback, useEffect, useRef, useState } from 'react'
import domtoimage from 'dom-to-image';
import useSound from 'use-sound'

import './Panel.scss'
import config from '../../config.json'
import Tabs from '../tabs/Tabs'
import Pan from '../pan/Pan'
import Lazy from '../lazy/Lazy';
import Smooth from '../smooth/Smooth';
import BgSetter from '../bgSetter/BgSetter';
import SaveShare from '../saveShare/SaveShare';
import Cover from '../cover/Cover';
import LoadDetector from '../loadDetector/LoadDetector';
import LandscapeModeDetector from '../landscapeModeDetector/LandscapeModeDetector copy';

////////// Image Resouce ////////////
import saveImg from '../../assets/images/UI/Desktop/MainPage/Button/UIDesktop_MainPage_Button_ShareSaveButton.png'
import randomBtn from '../../assets/images/UI/Desktop/MainPage/Button/UIDesktop_MainPage_Button_ShuffleButton.png'
import {
  categories,
  objects,
  defaultCat,
  fa,
  RandomizeObj,
  GetRandomCategory,
  GetCurrentObj
} from '../../utils/globals';
import { svgToPng } from '../../utils/functions';
////////// Image Resouce ////////////

////////// SOund Resouce ////////////
import randClick from '../../assets/sounds/characterCustomizerSfx/randomize-button-click.wav'
import shutterSound from '../../assets/sounds/characterCustomizerSfx/share-and-save-click.wav'
import btnClickSound from '../../assets/sounds/characterCustomizerSfx/general-button-press.wav'
import startClickSound from '../../assets/sounds/characterCustomizerSfx/start-button-press-page-turn.wav'
////////// Sound Resouce ////////////

const isMobileMode = false

const Panel = () => {
  const panelRef = useRef(null)
  const capRgRef = useRef(null)
  const characterBodyDataRef = useRef(null)
  const characterBodyColorRef = useRef(null)
  const [categoryColor, setCategoryColor] = useState({
    hair: 'white',
    fa: 'white',
    fx: 'white',
    head: 'white',
    sh: 'white',
    bottom: 'white',
    top: 'white',
  })
  const loadResult = useRef({
    tabs: false,
    cover: false,
    listbg: false,
    character: false,
  })
  const [allLoaded, setAllLoaded] = useState(false)
  const [bg, setBg] = useState(null)
  const [bgID, setBgID] = useState(null)
  const [conf, setConf] = useState(config)

  const showCoverRef = useRef(true)
  const [showCover, setShowCover] = useState(true)

  const isMob = useRef(isMobileMode)
  const [mobileMod, setMobileMode] = useState(isMobileMode)

  const [category, setCategory] = useState(defaultCat)
  const [showSaveShare, setShowSaveShare] = useState(false)
  const [copyClipSuccess, setCopyClipSuccess] = useState(false)
  const [cap, setCap] = useState({ data: null, mobileMod: false })
  const [characterImgLoaded, setCharacterImgLoaded] = useState(false)
  // const [categoryObj, setCategoryObj] = useState(config.defaultObj)
  const [categoryObj, setCategoryObj] = useState(RandomizeObj())
  const [panelWH, setPanelWH] = useState({ width: 1, height: 1 })
  const [bgLoaded, setBgLoaded] = useState(false)

  const [randSound] = useSound(randClick)
  const [playShutterSound] = useSound(shutterSound)
  const [playBtnClickSound] = useSound(btnClickSound)
  const [playStartClickSound] = useSound(startClickSound)

  useEffect(() => {
    // panel resize
    if (panelRef.current) {
      hSizeChange();
    }
    const resizeObserver = new ResizeObserver(hSizeChange);
    if (panelRef.current) {
      resizeObserver.observe(panelRef.current);
    }

    // get saved character model info
    GetCurrentObj((characterBodyData, characterBodyColor, backgroundID) => {
      if (!characterBodyData) {
        setCharacterLoaded()
      } else {
        console.log('characterbodydata', characterBodyData)
        characterBodyDataRef.current = characterBodyData
        characterBodyColorRef.current = characterBodyColor
        setCategoryObj(characterBodyData)
        setBgID(backgroundID)
      }
    })

    return () => {
      resizeObserver.disconnect();
    };
  }, [])
  useEffect(() => {
    console.log('characterBodyColorRef.current', characterBodyColorRef.current)

    if (characterBodyColorRef.current) {
      const cloneVal = JSON.parse(JSON.stringify(characterBodyColorRef.current))
      console.log('cloneVal', cloneVal)
      setCategoryColor(cloneVal)
      setCharacterLoaded()
      characterBodyColorRef.current = null
      console.log('11111111111111111')
    } else {
      console.log('2222222222222222222')

      const defaultColors = { ...categoryColor }
      defaultColors.hair = conf.color.hair.options[conf.color.hair[categoryObj.hair].selected]
      defaultColors.fa = conf.color.fa.options[conf.color.fa[categoryObj.fa]?.selected] || 'white'
      defaultColors.head = conf.color.head.options[conf.color.head[categoryObj.head].selected]
      defaultColors.sh = conf.color.sh.options[conf.color.sh[categoryObj.sh].selected]
      defaultColors.bottom = conf.color.bottom.options[conf.color.bottom[categoryObj.bottom].selected]
      defaultColors.top = conf.color.top.options[conf.color.top[categoryObj.top].selected]
      setCategoryColor(prev => ({ ...defaultColors }))
    }

  }, [JSON.stringify(categoryObj)])

  useEffect(() => {
    console.log('-- bgid --', bgID)
  }, [bgID])

  const getCurPanelWidth = () => panelRef?.current.clientWidth
  const getCurPanelHeight = () => panelRef?.current.clientHeight
  const hSizeChange = () => {
    const clientWidth = getCurPanelWidth()
    const clientHeight = getCurPanelHeight()
    function resetLoadingStatus() {
      loadResult.current = {
        tabs: false,
        cover: !showCoverRef.current || false,
        listbg: false,
        character: false,
      }
      setAllLoaded(false)
    }
    if (clientWidth < 800) {
      if (!isMob.current) resetLoadingStatus()
      setMobileMode(true)
      isMob.current = true
    } else {
      if (isMob.current) resetLoadingStatus()
      setMobileMode(false)
      isMob.current = false
    }
    setPanelWH({ width: clientWidth, height: clientHeight })
  }
  const hChangeColorComplete = (objColorOptionIndex) => {
    objColorOptionIndex = Number(objColorOptionIndex)
    const color = conf.color[category].options[objColorOptionIndex]
    setCategoryColor(prev => ({ ...prev, [category]: color }))
    setConf(prev => {
      let clone = { ...prev }
      clone.color[category][categoryObj[category]].selected = objColorOptionIndex
      return clone
    })
  }
  const selectCatObj = useCallback((category, object) => {
    setCategoryObj(prev => ({ ...prev, [category]: object }))
  }, [])
  const selectCat = useCallback((category) => {
    setCategory(category)
  }, [])
  const hSc = () => {
    let el = document.querySelector('.capture-region')
    setTimeout(() => {
      capture(el)
    }, 1000);
    setShowSaveShare(true)
  }
  function getChildRect(childElement, parentElement) {
    const parentRect = parentElement.getBoundingClientRect();
    const childRect = childElement.getBoundingClientRect();

    const x = childRect.left - parentRect.left;
    const y = childRect.top - parentRect.top;
    const width = childRect.width;
    const height = childRect.height;

    return { x, y, width, height };
  }
  function capture(element) {
    // Set the crop rectangle dimensions
    let parentElement = document.querySelector('.capture-region')
    let childElement = document.querySelector('.pan')
    let { x, y, width, height } = getChildRect(childElement, parentElement)

    function filter(node) {
      return ['IMG', 'DIV', 'svg', 'g', 'path'].includes(node.nodeName)
        && !JSON.stringify(node.className).includes('bg-setter')
        && !JSON.stringify(node.className).includes('tab-container')
        && !JSON.stringify(node.className).includes('btn-rand')
        && !JSON.stringify(node.className).includes('btn-save-share');
      // return true
    }
    var options = {
      width: width,
      height: height,
      useCORS: true,
      // x,
      // y,
      // ignoreElements: ()=>true,
      style: {
        transform: `translate(${-x}px, ${-y}px)`
      },
      filter,
    };
    domtoimage.toSvg(element, options)
      .then(function (dataUrl) {
        setCap({
          data: dataUrl,
          originWidth: width,
          originHeight: height,
          mobileMod
        })
      })
      .catch(function (error) {
        console.error("Error taking screenshot:", error);
      });
  }

  function dataURLToBlob(dataURL) {
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
  const ShowSaveShare = () => {
    hSc(() => setShowSaveShare(true))
    playShutterSound()
  }
  const closeSaveShare = () => {
    setShowSaveShare(false)
    setCap(prev => ({ ...prev, data: null }))
  }
  function copyDataUrlToClipboard(dataUrl) {
    const tempElement = document.createElement('textarea');
    tempElement.value = dataUrl;
    tempElement.setAttribute('readonly', '');
    tempElement.style.position = 'absolute';
    tempElement.style.left = '-9999px';

    document.body.appendChild(tempElement);

    tempElement.select();
    tempElement.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand('copy');

    document.body.removeChild(tempElement);
  }
  const showWhile = () => {
    setCopyClipSuccess(true)
    setTimeout(() => {
      setCopyClipSuccess(false)
    }, 3000);
  }
  const copy = () => {
    
    svgToPng(cap.data, cap.originWidth, cap.originHeight)
      .then(dataUrl => {
        if (navigator?.clipboard) {
          console.log('navigator.clipboard is existing')
        
          // navigator.clipboard.write([
          //   new ClipboardItem({
          //     'image/png': Promise.resolve(dataURLToBlob(dataUrl)),
          //   })
          // ]).then(() => {
          //   showWhile()
          // }).catch(error => {
          //   console.error('Failed to copy image to clipboard:', error);
          //   copyDataUrlToClipboard(dataUrl)
          //   showWhile()
          // }).catch(error => {
          //   console.error('2 Failed to copy image to clipboard:', error);
          // });
        } else {
          alert('else')
          copyDataUrlToClipboard(dataUrl)
          showWhile()
        }
      })
  }
  const download = () => {
    svgToPng(cap.data, cap.originWidth, cap.originHeight)
      .then(dataUrl => {
        var blob = dataURLToBlob(dataUrl);

        var link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = URL.createObjectURL(blob);
        link.click();
      })
  }
  const hRand = () => {
    categories.map(category => {
      const objNames = Object.keys(objects[category])
      const randIndex = rand(0, objNames.length - 1)
      setCategoryObj(prev => ({ ...prev, [category]: objNames[randIndex] }))
    })
    // play sound
    randSound()

    console.log('categoryobject', categoryObj)
  }
  function rand(lowValue, highValue) {
    return Math.floor(Math.random() * (highValue - lowValue + 1)) + lowValue
  }
  const hideCover = () => {
    setShowCover(false)
    showCoverRef.current = false
  }



  ///////////// Load Relatives ///////////
  const checkAllLoaded = () => {
    const { cover, tabs, listbg, character } = loadResult.current
    console.log('{ cover, tabs, listbg, character }', { cover, tabs, listbg, character })
    return cover && tabs && listbg && character
  }
  const setTabsLoaded = () => {
    loadResult.current.tabs = true
    setTimeout(() => {
      setAllLoaded(checkAllLoaded())
    }, 1000);
  }
  const setCoverLoaded = () => {
    loadResult.current.cover = true
    setTimeout(() => {
      setAllLoaded(checkAllLoaded())
    }, 1000);
  }
  const setListBgLoaded = () => {
    loadResult.current.listbg = true
    setTimeout(() => {
      setAllLoaded(checkAllLoaded())
    }, 1000);
  }
  const setCharacterLoaded = () => {
    loadResult.current.character = true
    setTimeout(() => {
      setAllLoaded(checkAllLoaded())
    }, 1000);
  }



  return <>
    {/* -------------- Panel --------------- */}
    <div className='panel' ref={panelRef}>
      <LoadDetector allLoaded={allLoaded} />
      <LandscapeModeDetector screenWidth={panelWH.width} screenHeight={panelWH.height} />
      {
        showCover &&
        <Cover
          className='cover'
          hideCover={hideCover}
          mobileMod={mobileMod}
          setCoverLoaded={setCoverLoaded}
          playStartClickSound={playStartClickSound}
        />}
      <div className='capture-region' ref={capRgRef}>
        <Smooth className='panel-bg'
          src={bg}
          mobileMod={mobileMod}
          panelWidth={panelWH.width}
          panelHeight={panelWH.height}
          setBgLoaded={setBgLoaded} />
        <div className='pan-container'>
          {bgLoaded &&
            <Pan
              categoryColor={categoryColor}
              categoryObj={categoryObj}
              mobileMod={mobileMod}
              panelWidth={panelWH.width}
              panelHeight={panelWH.height}
              setCharacterImgLoaded={setCharacterImgLoaded}
              config={conf}
            />}
          {!showCover &&
            <img className='btn btn-rand' src={randomBtn} onClick={hRand} data-html2canvas-ignore="true" />}
        </div>
        <div className='tab-container'>
          {bgLoaded && <Tabs
            config={conf}
            selectCatObj={selectCatObj}
            categoryColor={categoryColor}
            selectCat={selectCat}
            mobileMod={mobileMod}
            panelWidth={panelWH.width}
            panelHeight={panelWH.height}
            changeColor={hChangeColorComplete}
            setTabsLoaded={setTabsLoaded}
            setListBgLoaded={setListBgLoaded}
            playBtnClickSound={playBtnClickSound}
            data-html2canvas-ignore="true"
          />}
        </div>
      </div>
      <BgSetter
        style={showCover ? { display: 'none' } : {}}
        setBg={setBg}
        bgID={bgID}
        setBgID={setBgID}
        mobileMod={mobileMod}
        playBtnClickSound={playBtnClickSound}
      />
      {!showCover && <>
        <Lazy className='btn btn-save-share' src={saveImg} onClick={ShowSaveShare} />
      </>}
      <SaveShare
        className='dlg-save-share'
        showSaveShare={showSaveShare}
        closeSaveShare={closeSaveShare}
        copy={copy}
        conf={conf}
        bgID={bgID}
        showWhile={showWhile}
        headType={categoryObj.head}
        download={download}
        categoryObj={categoryObj}
        categoryColor={categoryColor}
        mobileMod={mobileMod}
        copyClipSuccess={copyClipSuccess}
        setCopyClipSuccess={setCopyClipSuccess}
        playBtnClickSound={playBtnClickSound}
        cap={cap} />
    </div>
  </>
}

export default Panel