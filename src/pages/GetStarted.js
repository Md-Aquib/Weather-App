import React, { useContext } from 'react'
import '../assets/css/get-started.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import WeatherContext from '../context/WeatherContext';


function GetStarted() {

  let {getWeather} = useContext(WeatherContext)
      
  return (
    <div className="get-started">
      <div className="container-fluid start-container">
        <div className="start-content">
          <div className="icon">
            <CloudIcon id="cloud" />
            <WbSunnyIcon id="sun" />
          </div>
          <h1>Discover the Weather in Your City</h1>
          <p>Get to know the current weather in your city.</p>
          <form onSubmit={getWeather}>
            <div className="start-btn">
                <input type="text" className="form-control shadow-none" name="city" placeholder="Enter Your City" required />
                <button type="submit" className="btn">Get Started</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GetStarted