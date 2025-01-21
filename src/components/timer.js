import React from 'react';
import '../css/timer.css';
const  Timer = () => {
    return (
        <div className="timer-container">
          <div className="timer">
  <div className="time-value">
    <span>00</span> : <span>00</span> : <span>00</span> : <span>00</span>
  </div>
  <div className="timer-label">
    <span>Days</span>
    <span>Hours</span>
    <span>Minutes</span>
    <span>Seconds</span>
  </div>
</div>

        </div>
    )
}
export default Timer;