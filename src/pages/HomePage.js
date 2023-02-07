import React from 'react'
import Navbar from '../components/Navbar'
import Report from '../components/Report'
import Details from '../components/Details'

function HomePage() {
  return (
    <div className="HomePage">
        <Navbar />
        <Report />
        <Details />
    </div>
  )
}

export default HomePage