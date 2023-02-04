import React,{useContext} from 'react'
import GetStarted from '../components/GetStarted';
import HomePage from '../components/HomePage';
import WeatherContext from '../context/WeatherContext';

function Home() {
  let {city} = useContext(WeatherContext)
  return (
    <div>
      { city ? <HomePage /> : <GetStarted /> }
    </div>
  )
}

export default Home