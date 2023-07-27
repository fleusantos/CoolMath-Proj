import List from "../list/List"
import { useState } from "react"
const categories = ['head', 'body', 'bottom']

const Tabs = ({ selectCatObj, selectCat }) => {
 const [categoryIndex, setCategoryIndex] = useState(0)
 const hClick = (category, index) => {
  setCategoryIndex(index)
  selectCat(category)
 }
 return <>
  <div className="tabs">
   <div className="button-list">
    {
     categories.map((category, i) => <button onClick={() => hClick(category, i)}>{category}</button>)
    }
   </div>
   <List selectCatObj={selectCatObj} category={categories[categoryIndex]} />
  </div>
 </>
}

export default Tabs