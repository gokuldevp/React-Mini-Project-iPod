import './assets/css/Wheel.css';
import nextIcon from './assets/images/next.png'
import prevIcon from './assets/images/prev.png'
import playIcon from './assets/images/play.png'

function Wheel(props) {
  const {handleOpenMenu, handleCloseMenu, handleNextIcon, handlePrevIcon, handlePlay} = props

  return (
  <div className="wheel-container">
          <div className="wheel">
          <div
          id="home"
          onClick={() => handleCloseMenu()}
          >Menu
          </div>

          <div 
          id="next"
          onClick={() => handleNextIcon()}> 
          <img className='icon-img' alt='nextIcon' src={nextIcon}/>
          </div>


          <div 
          id="play"
          onClick={() => handlePlay()}
          >
          <img className='icon-img' alt='playIcon' src={playIcon}/>
          </div>

          <div 
          id="prev"
          onClick={() => handlePrevIcon()}
          >
          <img className='icon-img' alt='prevIcon' src={prevIcon}/>
          </div>

          <div 
          id="menu" 
          className="center-btn"
          onClick={() => handleOpenMenu()}>
          </div>

          </div>
  </div>
  );
}

export default Wheel;