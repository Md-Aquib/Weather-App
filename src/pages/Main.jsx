import React,{useContext} from 'react'
import GetStarted from './GetStarted';
import HomePage from './HomePage';
import WeatherContext from '../context/WeatherContext';

function Home() {
  let {city} = useContext(WeatherContext)
  return (
    <div>
      {/* <HomePage /> */}
      { city ? <HomePage /> : <GetStarted /> }
    </div>
  )
}

export default Home