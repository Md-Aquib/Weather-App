import React, {useContext} from 'react'
import WeatherContext from '../context/WeatherContext';

function Header() {
  let {city} = useContext(WeatherContext)  
  return (
    <div>
        <h1>{city}</h1>
    </div>
  )
}

export default Header