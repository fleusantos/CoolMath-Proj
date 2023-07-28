
import {  useState } from 'react'
import triangle from '../../assets/images/Character/Reference/Head.png'
import oval from '../../assets/images/Character/Head/Oval/Head_Oval_Outline.png'
import longPants from '../../assets/images/Character/Reference/Bottom.png'
import longSkirt from '../../assets/images/Character/Bottom/LongSkirt/Bottom_LongSkirt_Outline.png'
import hairLong from '../../assets/images/Character/Reference/Hair.png'
import hairPoofy from '../../assets/images/Character/Hair/Poofy/Hair_Poofy_Outline.png'
import body from '../../assets/images/Character/Reference/Body.png'
import './List.scss'

const objects = {
 hair: { hairLong, hairPoofy },
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