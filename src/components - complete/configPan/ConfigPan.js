import { useEffect, useState } from 'react'
import './ConfigPan.scss'
const ConfigPan = ({ scale, translateX, translateY, changePos }) => {
 const [sc, setSc] = useState(scale)
 const [tx, setTx] = useState(translateX)
 const [ty, setTy] = useState(translateY)

 useEffect(() => {
  setSc(scale)
 }, [scale])
 useEffect(() => {
  setTx(translateX)
 }, [translateX])
 useEffect(() => {
  setTy(translateY)
 }, [translateY])

 const hSc = e => {
  const newVal = e.target.value
  setSc(newVal)
  changePos(newVal, tx, ty)
 }
 const hTx = e => {
  const newVal = e.target.value
  setTx(newVal)
  changePos(sc, newVal, ty)
 }
 const hTy = e => {
  const newVal = e.target.value
  setTy(newVal)
  changePos(sc, tx, newVal)
 }

 return <div>
  <input type='number' step={0.1} value={sc} onChange={hSc} />
  <input type='number' value={tx} onChange={hTx} />
  <input type='number' value={ty} onChange={hTy} />
 </div>
}

export default ConfigPan