import './assets/css/Wheel.css';
import nextIcon from './assets/images/next.png'
import prevIcon from './assets/images/prev.png'
import playIcon from './assets/images/play.png'

function Wheel() {
  return (
    
<div className="wheel-container">
        <div className="wheel">
        <div id="home">Menu</div>

        <div id="next"> 
        <img className='icon-img' src={nextIcon}/>
        </div>


        <div id="play">
        <img className='icon-img' src={playIcon}/>
        </div>

        <div id="prev">
        <img className='icon-img' src={prevIcon}/>
        </div>
        <div id="menu" className="center-btn"></div>
        </div>
</div>
  );
}

export default Wheel;