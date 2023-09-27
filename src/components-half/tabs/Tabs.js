import List from "../list/List"
import { useEffect, useRef, useState, memo } from "react"
import Moz from "../moz/Moz"
import './Tabs.scss'
////////////// resouce //////////////
import hairIcon from '../../assets/images/UI/Desktop/MainPage/NotebookPage/UIDesktop_MainPage_NotebookPage_Tab_Hair.png'
import headIcon from '../../assets/images/UI/Desktop/MainPage/NotebookPage/UIDesktop_MainPage_NotebookPage_Tab_Head.png'
import bottomIcon from '../../assets/images/UI/Desktop/MainPage/NotebookPage/UIDesktop_MainPage_NotebookPage_Tab_Bottom.png'
import fxIcon from '../../assets/images/UI/Desktop/MainPage/NotebookPage/UIDesktop_MainPage_NotebookPage_Tab_FacialExpression.png'
import faIcon from '../../assets/images/UI/Desktop/MainPage/NotebookPage/UIDesktop_MainPage_NotebookPage_Tab_Accessory.png'
import topIcon from '../../assets/images/UI/Desktop/MainPage/NotebookPage/UIDesktop_NotebookPage_Tab_Top.png'
import shIcon from '../../assets/images/UI/Desktop/MainPage/NotebookPage/UIDesktop_MainPage_NotebookPage_Tab_Shoe.png'
///////////// Mobile ///////////
import hairIconMob from '../../assets/images/UI/Mobile/MainPage/NotebookPage/UIMobile_MainPage_NotebookPage_Tab_Hair.png'
import headIconMob from '../../assets/images/UI/Mobile/MainPage/NotebookPage/UIMobile_MainPage_NotebookPage_Tab_Head.png'
import bottomIconMob from '../../assets/images/UI/Mobile/MainPage/NotebookPage/UIMobile_MainPage_NotebookPage_Tab_Bottom.png'
import fxIconMob from '../../assets/images/UI/Mobile/MainPage/NotebookPage/UIMobile_MainPage_NotebookPage_Tab_FacialExpression.png'
import faIconMob from '../../assets/images/UI/Mobile/MainPage/NotebookPage/UIMobile_MainPage_NotebookPage_Tab_Accessory.png'
import topIconMob from '../../assets/images/UI/Mobile/MainPage/NotebookPage/UIMobile_MainPage_NotebookPage_Tab_Top.png'
import shIconMob from '../../assets/images/UI/Mobile/MainPage/NotebookPage/UIMobile_MainPage_NotebookPage_Tab_Shoe.png'
import { categories } from '../../utils/globals'

const icons = {
  [categories[0]]: headIcon,
  [categories[1]]: hairIcon,
  [categories[2]]: fxIcon,
  [categories[3]]: topIcon,
  [categories[4]]: bottomIcon,
  [categories[5]]: shIcon,
  [categories[6]]: faIcon,
}
const iconsMob = {
  [categories[0]]: headIconMob,
  [categories[1]]: hairIconMob,
  [categories[2]]: fxIconMob,
  [categories[3]]: topIconMob,
  [categories[4]]: bottomIconMob,
  [categories[5]]: shIconMob,
  [categories[6]]: faIconMob,
}

const Tabs = ({
  config,
  selectCatObj,
  selectCat,
  categoryColor,
  changeColor,
  mobileMod,
  panelWidth,
  panelHeight,
  setTabsLoaded,
  setListBgLoaded,
  playBtnClickSound,
  ...props
}) => {

  const howmany = useRef(0)
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [selTab, setTab] = useState(0)
  const hClick = (category, index) => {
    setCategoryIndex(index)
    selectCat(category)
    setTab(index)
    playBtnClickSound()
  }
  useEffect(() => {
    // if (!mobileMod) return
    // if (panelHeight/panelWidth > 1.6893) {
    //   setStyle(prev=>({...prev, position: 'initial'}))
    // } else {
    //   setStyle(prev=>({...prev, position: 'absolute', bottom: 0}))
    // }
  }, [panelWidth, panelHeight])
  const setLoaded = () => {
    howmany.current++
    // console.log('laskdjflaskjlskdjflksadjlfkjasldkfjklsdjlfsdjflkjdljlj: ', howmany.current, mobileMod)
    if (howmany.current == categories.length) {
      setTabsLoaded()
      howmany.current = 0
    }
  }
  return <>
    <div {...props} className="tabs">
      <div className="button-list">
        {
          categories.map((category, i) =>
            <div className={`tab ${selTab == i ? 'active' : ''}`}>
              <Moz
                className="btn"
                setLoaded={setLoaded}
                src={mobileMod ? iconsMob[category] : icons[category]}
                onClick={() => hClick(category, i)} />
            </div>)
        }
      </div>
      <List
        config={config}
        selectCatObj={selectCatObj}
        category={categories[categoryIndex]}
        categoryColor={categoryColor}
        mobileMod={mobileMod}
        changeColor={changeColor}
        setListBgLoaded={setListBgLoaded}
        playBtnClickSound={playBtnClickSound}
      />
    </div>
  </>
}

export default memo(Tabs)