import './Loader.scss'
import loadingIcon from '../../assets/images/loading-carga.gif'
// import loadingIcon from '../../assets/images/loader-circles.gif'

const Loader = ({ showLoader, ...props }) => {
 return <div {...props}
  className={`${props.className} loader-223`}
  style={{ display: showLoader ? 'flex' : 'none' }}
 >
  <img className='icon' src={loadingIcon} />
 </div>
}
export default Loader