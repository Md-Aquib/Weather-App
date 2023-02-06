import React, {useContext} from 'react'
import '../assets/css/navbar.css'
import WeatherContext from '../context/WeatherContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';

function Navbar() {
  let {city} = useContext(WeatherContext)  
  return (
    <div>
      <nav className="navbar shadow-sm">
          <div className="logo">
            <CloudIcon id="logo-cloud" />
            <WbSunnyIcon id="logo-sun" />
          </div>
          <h5>{city}</h5>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round">
              <div className="theme-icon">
                <WbSunnyIcon id="sun-icon" /><DarkModeIcon id="dark-icon" />
              </div>
            </span>
          </label>
      </nav>      
    </div>
  )
}

export default Navbar