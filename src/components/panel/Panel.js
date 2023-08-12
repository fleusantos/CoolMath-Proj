import './Panel.scss'
import { useEffect, useRef, useState } from 'react'
import { SketchPicker } from 'react-color'
import domtoimage from 'dom-to-image';
import config from '../../config.json'
import Tabs from '../tabs/Tabs'
import Pan from '../pan/Pan'
import Lazy from '../lazy/Lazy';
import Smooth from '../smooth/Smooth';
import BgSetter from '../bgSetter/BgSetter';
import ConfigPan from '../configPan/ConfigPan';
import SaveShare from '../saveShare/SaveShare';

////////// Image Resouce ////////////
import placeholder from '../../assets/images/placeholder.png'
import saveImg from '../../assets/images/UI/Desktop/MainPage/Button/UIDesktop_MainPage_Button_ShareSaveButton.png'
import randomBtn from '../../assets/images/UI/Desktop/MainPage/Button/UIDesktop_MainPage_Button_ShuffleButton.png'
import { categories, objects, defaultObj, defaultCat } from '../../utils/globals';
////////// Image Resouce ////////////

const Panel = () => {
  const [conf, setConf] = useState(config)
  const [categoryColor, setCategoryColor] = useState({
    hair: 'white',
    fa: 'white',
    fx: 'white',
    head: 'white',
    sh: 'white',
    bottom: 'white',
    top: 'white',
  })
  const [categoryObj, setCategoryObj] = useState(defaultObj)
  const [category, setCategory] = useState(defaultCat)
  const [mobileMod, setMobileMode] = useState(false)
  const [bg, setBg] = useState(null)
  const [cap, setCap] = useState({ data: null, mobileMod: false })
  const [showSaveShare, setShowSaveShare] = useState(false)
  const [copyClipSuccess, setCopyClipSuccess] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    if (panelRef.current) {
      hSizeChange();
    }
    const resizeObserver = new ResizeObserver(hSizeChange);
    if (panelRef.current) {
      resizeObserver.observe(panelRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [])
  useEffect(() => {
    const defaultColors = { ...categoryColor }
    defaultColors.hair = conf.color.hair[categoryObj.hair].options[conf.color.hair[categoryObj.hair].selected]
    defaultColors.fa = conf.color.fa[categoryObj.fa].options[conf.color.fa[categoryObj.fa].selected]
    defaultColors.fx = conf.color.fx[categoryObj.fx].options[conf.color.fx[categoryObj.fx].selected]
    defaultColors.head = conf.color.head[categoryObj.head].options[conf.color.head[categoryObj.head].selected]
    defaultColors.sh = conf.color.sh[categoryObj.sh].options[conf.color.sh[categoryObj.sh].selected]
    defaultColors.bottom = conf.color.bottom[categoryObj.bottom].options[conf.color.bottom[categoryObj.bottom].selected]
    defaultColors.top = conf.color.top[categoryObj.top].options[conf.color.top[categoryObj.top].selected]
    setCategoryColor(prev => ({ ...defaultColors }))
  }, [JSON.stringify(categoryObj)])
  const hSizeChange = () => {
    const { clientWidth, clientHeight } = panelRef.current;
    if (clientWidth < 800) {
      setMobileMode(true)
    } else {
      setMobileMode(false)
    }
  }
  const hChangeColorComplete = (objColorOptionIndex) => {
    objColorOptionIndex = Number(objColorOptionIndex)
    const color = conf.color[category][categoryObj[category]].options[objColorOptionIndex]
    setCategoryColor(prev => ({ ...prev, [category]: color }))
    setConf(prev => {
      let clone = { ...prev }
      clone.color[category][categoryObj[category]].selected = objColorOptionIndex
      return clone
    })
  }
  const selectCatObj = (category, object) => {
    setCategoryObj(prev => ({ ...prev, [category]: object }))
  }
  const selectCat = (category) => {
    setCategory(category)
  }
  const changeConfig = (configVal) => {
    setConf(configVal)
  }
  const hSc = (callback) => {
    console.log('hsc')
    let el = document.querySelector('.panel')
    capture(el, callback)
  }
  const changePos = (sc, tx, ty) => {
    setConf(prev => {
      let confg = { ...prev }
      if (category == 'hta' || category == 'hair' || category == 'fa' || category == 'fx') {
        confg.position.head[categoryObj.head][category][categoryObj[category]] = {
          scale: Number(sc),
          translateX: Number(tx),
          translateY: Number(ty),
        }
      }
      if (category == 'head') {
        confg.position.head[categoryObj.head] = {
          ...confg.position.head[categoryObj.head],
          scale: Number(sc),
          translateX: Number(tx),
          translateY: Number(ty),
        }
      }
      return confg
    })
  }
  function capture(element, callback) {
    // Set the crop rectangle dimensions
    var cropX = mobileMod ? -0 : 0;
    var cropY = 0;
    var cropWidth = mobileMod ? 430 : 400;
    var cropHeight = mobileMod ? 520 : 600;

    function filter(node) {
      return ['IMG', 'DIV', 'svg', 'g', 'path'].includes(node.tagName) 
        && !JSON.stringify(node.className).includes('bg-setter')
        && !JSON.stringify(node.className).includes('tab-container')
        && !JSON.stringify(node.className).includes('btn-rand')
        && !JSON.stringify(node.className).includes('btn-save-share');
    }
    var options = {
      width: cropWidth,
      height: cropHeight,
      style: {
        transform: `translate(${cropX}px, ${cropY}px)`
      },
      filter,
    };
    domtoimage.toPng(element, options)
      .then(function (dataUrl) {
        console.log('dataurl')
        setCap({ data: dataUrl, mobileMod })

        var blob = dataURLToBlob(dataUrl);
        // var link = document.createElement("a");
        // link.download = "screenshot.png";
        // link.href = URL.createObjectURL(blob);
        // link.click();

        callback()
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
  function cropImage() {
  }
  const ShowSaveShare = () => {
    console.log('ShowSaveShare')
    hSc(() => setShowSaveShare(true))
  }
  const closeSaveShare = () => {
    setShowSaveShare(false)
    setCap(null)
  }
  const copy = () => {
    var blob = dataURLToBlob(cap.data);

    navigator.clipboard.write([
      new ClipboardItem({
        'image/png': blob,
      })
    ]).then(() => {
      setCopyClipSuccess(true)
    }).catch(error => {
      console.error('Failed to copy image to clipboard:', error);
    });
  }
  const download = () => {
    var blob = dataURLToBlob(cap.data);

    var link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = URL.createObjectURL(blob);
    link.click();
  }
  const hRand = () => {
    categories.map(category => {
      const objNames = Object.keys(objects[category])
      const randIndex = rand(0, objNames.length - 1)
      setCategoryObj(prev => ({ ...prev, [category]: objNames[randIndex] }))
    })
  }
  function rand(lowValue, highValue) {
    return Math.floor(Math.random() * (highValue - lowValue + 1)) + lowValue
  }

  return <>
    <div className='panel' ref={panelRef}>
      <Lazy id='panel-bg' src={bg} placeholder={placeholder} />
      <div className='pan-container'>
        <Pan
          categoryColor={categoryColor}
          categoryObj={categoryObj}
          mobileMod={mobileMod}
          config={conf}
        />
      </div>
      <div className='tab-container'>
        <Tabs
          config={conf}
          selectCatObj={selectCatObj}
          categoryColor={categoryColor}
          selectCat={selectCat}
          mobileMod={mobileMod}
          changeColor={hChangeColorComplete}
        />
      </div>
      <BgSetter setBg={setBg} mobileMod={mobileMod} />
      <Lazy className='btn-save-share' src={saveImg} onClick={ShowSaveShare} />
      {showSaveShare &&
        <SaveShare
          className='dlg-save-share'
          closeSaveShare={closeSaveShare}
          copy={copy}
          download={download}
          mobileMod={mobileMod}
          copyClipSuccess={copyClipSuccess}
          setCopyClipSuccess={setCopyClipSuccess}
          cap={cap} />}
      <img className='btn-rand' src={randomBtn} onClick={hRand} />
    </div>
    <Smooth />
    {
      (category == 'hta' || category == 'hair' || category == 'fa' || category == 'fx') &&
      <>
        <ConfigPan
          scale={conf.position.head[categoryObj.head][category][categoryObj[category]].scale}
          translateX={conf.position.head[categoryObj.head][category][categoryObj[category]].translateX}
          translateY={conf.position.head[categoryObj.head][category][categoryObj[category]].translateY}
          changePos={changePos}
        />
      </>
    }
    {
      (category == 'head') &&
      <>
        <ConfigPan
          scale={conf.position.head[categoryObj.head].scale}
          translateX={conf.position.head[categoryObj.head].translateX}
          translateY={conf.position.head[categoryObj.head].translateY}
          changePos={changePos}
        />
      </>
    }
    {/* {JSON.stringify(conf, null, 2)} */}
  </>
}

export default Panel