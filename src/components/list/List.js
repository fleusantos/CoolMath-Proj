import { useEffect, useRef, useState, lazy, memo, useLayoutEffect } from 'react'
import ColorPicker from '../colorPicker/ColorPicker'
import { objects } from '../../utils/globals'
import listBg from '../../assets/images/UI/Desktop/MainPage/NotebookPage/UIDesktop_MainPage_NotebookPage_PageBackground.png'
import listBgMob from '../../assets/images/UI/Mobile/MainPage/NotebookPage/UIMobile_MainPage_NotebookPage_PageBackground.png'
import nextArr from '../../assets/images/UI/Desktop/MainPage/Button/UIDesktop_MainPage_Button_BackgroundArrows_Right.png'
import prevArr from '../../assets/images/UI/Desktop/MainPage/Button/UIDesktop_MainPage_Button_BackgroundArrows_Left.png'
import brush from '../../assets/images/UI/Desktop/MainPage/NotebookPage/UIDesktop_MainPage_NotebookPage_PainBrush.png'
import anime from 'animejs'
import Moz from '../moz/Moz'
import './List.scss'
import Loader from '../loader/Loader'
import { isIOS, detecter, isIphone } from '../../utils/functions'

const Base = lazy(() => import('../base/Base'))
const noColorCategories = ['fx']

const Obj = memo(({
  index,
  config,
  category,
  categoryColor,
  object,
  selectObj,
  selected,
  changeColor,
  listRef,
  playBtnClickSound,
  mobileMod, ...props }) => {
  const objRef = useRef(null)
  const viewRef = useRef(null)
  const [style, setStyle] = useState({})
  const [clicked, setClicked] = useState(false)
  const [width, setWidth] = useState(objRef?.current?.clientWidth)
  const [pos, setPos] = useState({ top: 0, left: 0, bottom: 0, right: 0 })
  const [showItem, setShowItem] = useState(false)

  useEffect(() => {
    // Add observer
    if (objRef.current) {
      hSizeChange();
    }
    const resizeObserver = new ResizeObserver(hSizeChange);
    if (objRef.current) {
      resizeObserver.observe(objRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [])
  useEffect(() => {
    if (!selected) setClicked(false)
  }, [selected])
  useEffect(() => {
    console.log('detect current OS and browser: ', detecter())
    if (mobileMod) {
      setStyle({ width: isIOS() ? 'intrinsic' : 'auto', height: '50%' })
    } else {
      setStyle({ width: '33.3333%', height: 'fit-content' })
    }
  }, [mobileMod])
  const hSizeChange = () => {
    setWidth(objRef?.current?.clientWidth)
  }
  const hClick = () => {
    selectObj(category, object)
    setPos(getOverflowStatus(index))
    setClicked(true)
  }
  const getOverflowStatus = (listElementIndex) => {
    const listWidth = getInnerWidthWithoutPadding(listRef.current)
    const itemWidth = objRef.current.clientWidth
    const elementsPerRow = listWidth / itemWidth
    const cols = parseInt(elementsPerRow)
    function getInnerWidthWithoutPadding(element) {
      var style = getComputedStyle(element);
      var width = parseFloat(style.width);

      var paddingLeft = parseFloat(style.paddingLeft);
      var paddingRight = parseFloat(style.paddingRight);

      var innerWidth = width - (paddingLeft + paddingRight);

      return innerWidth;
    }

    const listHeight = getInnerHeightWithoutPadding(listRef.current)
    const itemHeight = objRef.current.clientHeight
    const elementsPerCol = listHeight / itemHeight
    const rows = parseInt(elementsPerCol)
    function getInnerHeightWithoutPadding(element) {
      var style = getComputedStyle(element);
      var height = parseFloat(style.height);

      var paddingTop = parseFloat(style.paddingTop);
      var paddingBottom = parseFloat(style.paddingBottom);

      var innerHeight = height - (paddingTop + paddingBottom);

      return innerHeight;
    }

    let pos_ = { left: 'auto', right: 'auto', top: 'auto', bottom: 'auto' }
    const offset = mobileMod ? '18vw' : '68px'
    if (listElementIndex < cols) {
      pos_.bottom = `-${offset}`
    }
    if (listElementIndex > (cols * (rows - 1) - 1)) {
      pos_.top = `-${offset}`
    }
    if ((listElementIndex + 1) % cols == 1) {
      pos_.left = '0px'
    }
    if ((listElementIndex + 1) % cols == 0) {
      pos_.right = '0px'
    }
    if (pos_.bottom == 'auto' && pos_.top == 'auto') {
      pos_.top = `-${offset}`
    }
    return pos_
  }
  const close = () => {
    setClicked(false)
  }
  const setLoaded = () => {
    setShowItem(true)
  }
  return <>
    <div {...props} ref={objRef} style={{ ...style }}>
      <div className='view' ref={viewRef} onClick={hClick}>
        <Loader showLoader={!showItem} className='loader' />
        <Base
          color={config.color[category]?.options[config.color[category][object]?.selected]}
          width={width}
          height={width}
          object={objects[category][object]}
          baseZindex={1}
          transform={{
            scale: config.crop[category][object].scale,
            translateX: config.crop[category][object].translateX,
            translateY: config.crop[category][object].translateY
          }}
          // animation={
          //   category == 'top' || category == 'bottom' ?
          //     {
          //       init: { opacity: 0, scale: config.crop[category][object].scale + 1 },
          //       opacity: 1,
          //       scale: config.crop[category][object].scale,
          //     }
          //     :
          //     category == 'fa' ?
          //       {
          //         init: { opacity: 0, translateY: config.crop[category][object].translateY - 10 },
          //         opacity: 1,
          //         translateY: config.crop[category][object].translateY,
          //       }
          //       :
          //       category == 'fx' ?
          //         {
          //           init: { opacity: 0, scale: 0 },
          //           opacity: 1,
          //           scale: config.crop[category][object].scale,
          //         }
          //         :
          //         {
          //           init: { opacity: 0, scale: config.crop[category][object].scale - 0.1 },
          //           opacity: 1,
          //           scale: config.crop[category][object].scale,
          //         }
          // }
          animation={
            {
              init: { opacity: 0, scale: config.crop[category][object].scale + 1 },
              opacity: 1,
              scale: config.crop[category][object].scale,
            }
          }
          setLoaded={setLoaded}
          style={{
            display: showItem ? 'block' : 'none',
            position: 'relative',
            width: '100%',
            top: 0,
            left: 0,
          }}
        />
      </div>
      {selected && clicked && !noColorCategories.includes(category) && !(category == 'fa' && object == 'none') && <>
        <ColorPicker
          cat={category}
          obj={object}
          close={close}
          changeColor={changeColor}
          config={config}
          playBtnClickSound={playBtnClickSound}
          style={{ ...pos }} />
        {/* <img className='brush' src={brush} style={pos.top == 'auto' ? { top: '3%' } : { bottom: '3%' }} /> */}
      </>}
    </div>
  </>
})


let pageSize = 9
let gtotalPages = 0

const List = ({
  config,
  selectCatObj,
  category,
  categoryColor,
  changeColor,
  mobileMod,
  playBtnClickSound,
  setListBgLoaded }) => {
  const listRef = useRef(null)
  const [selectedObj, setSelectedObj] = useState(config.defaultObj[category])
  const [pageIndex, setPageIndex] = useState(0)
  const [render, setRender] = useState(1)

  useEffect(() => {
    if (mobileMod == false) {
      pageSize = 9
    } else {
      pageSize = 8
    }
    setRender(prev => prev + 1)
  }, [mobileMod])
  useLayoutEffect(() => {
    setPageIndex(0)
  }, [category])
  const hPrev = () => {
    if (pageIndex - 1 < 0) return
    setPageIndex(prev => prev - 1)
    playBtnClickSound()
  }
  const hNext = () => {
    if (pageIndex + 1 == gtotalPages) return
    setPageIndex(prev => prev + 1)
    playBtnClickSound()
  }
  function paginateObjectProperties(obj, pageSize) {
    var propertyNames = Object.keys(obj);
    var totalPages = Math.ceil(propertyNames.length / pageSize);
    var paginatedArray = [];

    for (var i = 0; i < totalPages; i++) {
      var startIndex = i * pageSize;
      var endIndex = startIndex + pageSize;
      var pageProperties = propertyNames.slice(startIndex, endIndex);
      var pageObject = {};

      pageProperties.forEach(function (property) {
        pageObject[property] = obj[property];
      });

      paginatedArray.push(pageObject);
    }

    gtotalPages = paginatedArray.length
    return paginatedArray;
  }

  const selectObj = (category, object) => {
    selectCatObj(category, object)
    setSelectedObj(object)
  }
  const howmany = useRef(0)
  const setLoaded = () => {
    howmany.current++
    if (howmany.current == 1) {
      setListBgLoaded()
      howmany.current = 0
    }
  }
  return <>
    <div className="list" >
      <div className='bg'>
        <Moz src={mobileMod ? listBgMob : listBg} setLoaded={setLoaded} />
      </div>
      <div className='content-container' ref={listRef}>
        <div className='content' style={{ height: isIphone() ? '100%' : 'auto' }}>
          {Object.keys(paginateObjectProperties(objects[category], pageSize)[pageIndex] || {})?.map((object, index) =>
            <Obj
              index={index}
              config={config}
              object={object}
              category={category}
              key={`head-list${object}`}
              selectObj={selectObj}
              selected={selectedObj == object}
              categoryColor={categoryColor}
              changeColor={changeColor}
              listRef={listRef}
              mobileMod={mobileMod}
              playBtnClickSound={playBtnClickSound}
              className={`item ${selectedObj == object ? 'selected' : ''}`}
            />
          )}
        </div>
      </div>
      {gtotalPages > 1 &&
        <div className='buttons'>
          {pageIndex > 0 &&
            <img className='btn prev' onClick={hPrev} src={prevArr} />}
          {pageIndex < gtotalPages - 1 &&
            <img className='btn next' onClick={hNext} src={nextArr} />}
        </div>}
    </div>
  </>
}

export default memo(List)