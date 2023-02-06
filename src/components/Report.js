import React,{useContext} from 'react'
import '../assets/css/report.css'
import WeatherContext from '../context/WeatherContext';

function Report() {
    let {temp,desc} = useContext(WeatherContext) 
    // eslint-disable-next-line
    var today = new Date;
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    let day = today.toLocaleDateString('en-Us', options); 

  return (
    <div className="container-fluid report-container">
        <div className="card temp-card shadow-sm">
            <div className="card-body">
                <h5 className="day">{day}</h5>
                <h5 className="card-text">Temperature</h5>
                <h5 className="card-title">{temp}&deg;C</h5>
                <h5 className="card-text">{desc}</h5>
            </div>
        </div>
    </div>
  )
}

export default Report