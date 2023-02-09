import React, {useContext, useState} from 'react'
import '../assets/css/navbar.css'
import WeatherContext from '../context/WeatherContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';

function Navbar() {

  let {changeCity} = useContext(WeatherContext) 

  const [active,setActive] = useState(false)

  function themeChange(){
    if (!active){
      document.body.style.background = '#444'
      document.getElementById('logo-cloud').style.color = '#eee'
      document.getElementById('cityName').style.color = '#fff'
      document.getElementById('navbar').style.backgroundColor = '#333'
      setActive(true)
    }else{
      document.body.style.background = '#f9f9f9'
      document.getElementById('logo-cloud').style.color = '#999'
      document.getElementById('cityName').style.color = '#000'
      document.getElementById('navbar').style.backgroundColor = 'transparent'
      setActive(false)
    }
  }
  

  let {city} = useContext(WeatherContext)  
  return (
    <div>
      <nav className="navbar shadow-sm" id="navbar">
          <div className="logo">
            <CloudIcon id="logo-cloud" />
            <WbSunnyIcon id="logo-sun" />
          </div>
          <button onClick={changeCity}><h5 id='cityName'>{city}</h5></button>
          <label className="switch">
            <input value={active} type="checkbox" onClick={themeChange}/>
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