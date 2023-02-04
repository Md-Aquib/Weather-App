import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';


function Home() {
  return (
    <div className="get-started">
      <div className="container-fluid">
        <div className="start-content">
          <div className="icon">
            <CloudIcon id="cloud" />
            <WbSunnyIcon id="sun" />
          </div>
          <h1>Discover the Weather in Your City</h1>
          <p>Get to know the current weather in your city.</p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Home