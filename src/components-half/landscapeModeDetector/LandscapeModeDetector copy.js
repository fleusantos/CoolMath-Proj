import './LandscapeModeDetector.scss'
import icon from '../../assets/images/rotating-phone-from-horizontal-to-vertical.svg'

const LandscapeModeDetector = ({ screenWidth, screenHeight }) => {
 return <>
  {
   screenWidth < 800 && screenHeight < screenWidth &&
   <h1 className='detector'>
    <img className='icon' src={icon} />
   </h1>
  }
 </>
}
export default LandscapeModeDetector