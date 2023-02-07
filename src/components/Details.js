import React,{useContext} from 'react'
import '../assets/css/details.css'
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import OpacityIcon from '@mui/icons-material/Opacity';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AirIcon from '@mui/icons-material/Air';
import WeatherContext from '../context/WeatherContext';

function Details() {
  let {minTemp,maxTemp,pres,hum,vis,ws} = useContext(WeatherContext)  
  return (
    <div className='container details-container'>
        <div className="row">
            <div className='col-lg-4 col-md-4 col-6'>
                <ThermostatIcon className="details-icon" />
                <h6>Min Temp</h6>
                <p>{minTemp} &deg;C</p>
            </div>
            <div className='col-lg-4 col-md-4 col-6'>
                <ThermostatIcon className="details-icon" />
                <h6>Max Temp</h6>
                <p>{maxTemp} &deg;C</p>
            </div>
            <div className='col-lg-4 col-md-4 col-6'>
                <CompareArrowsIcon className="details-icon" />
                <h6>Pressure</h6>
                <p>{Math.round((pres/100000)*1000)/1000} bar</p>
            </div>
            <div className='col-lg-4 col-md-4 col-6'>
                <OpacityIcon className="details-icon" />
                <h6>Humidity</h6>
                <p>{hum} g.m-3</p>
            </div>
            <div className='col-lg-4 col-md-4 col-6'>
                <VisibilityIcon className="details-icon" />
                <h6>Visibilty</h6>
                <p>{vis/1000} Km</p>
            </div>
            <div className='col-lg-4 col-md-4 col-6'>
                <AirIcon className="details-icon" />
                <h6>Wind Speed</h6>
                <p>{ws} m/s</p>
            </div>
        </div>
    </div>
  )
}

export default Details