import './Wheel.css';

function Wheel() {
  return (
<div className="wheel-container">
        <div className="wheel">
        <div id="home">Menu</div>
        <div id="next">Next</div>
        <div id="play">Play</div>
        <div id="prev">Prev</div>
        <div id="menu" className="center-btn"></div>
        </div>
</div>
  );
}

export default Wheel;