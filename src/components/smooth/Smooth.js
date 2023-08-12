import { useState } from 'react'
import './Smooth.scss'

const Smooth = ({ src, ...props }) => {
 const [srcs, setSrcs] = useState([])
 return <div {...props} className={`smooth ${props.className}`}>
  {srcs.map(src => <img src={src} />)}
 </div>
}
export default Smooth