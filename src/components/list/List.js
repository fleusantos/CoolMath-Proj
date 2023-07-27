
import {  useState } from 'react'
import triangle from './Head_Triangle_Outline.png'
import oval from './Head_Oval_Outline.png'
import longPants from './Bottom_LongPants_Outline.png'
import longSkirt from './Bottom_LongSkirt_Outline.png'
import body from './Body_Outline.png'
import './List.scss'

const objects = {
 head: { triangle, oval },
 body: { body },
 bottom: { longPants, longSkirt }
}

const Obj = ({ category, object, selectObj, ...props }) => {
 const hClick = () => {
  selectObj(category, object)
 }
 return <>
  <img {...props} src={objects[category][object]} onClick={hClick} />
 </>
}

const List = ({ selectCatObj, category }) => {
 const [selectedObj, setSelectedObj] = useState('triangle')
 const selectObj = (category, object) => {
  selectCatObj(category, object)
  setSelectedObj(object)
 }

 return <>
  <div className="list">
   {Object.keys(objects[category])?.map((object) =>
    <Obj
     category={category}
     object={object}
     key={`head-list${object}`}
     selectObj={selectObj}
     className={`item ${selectedObj == object ? 'selected' : ''}`}
    />
   )}
  </div>
 </>
}

export default List