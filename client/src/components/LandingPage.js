import React from 'react'
import bgImage from '../assets/pexels-olena-bohovyk-3646172.jpg'

const LandingPAge = () => {
  return (
    <div className='d-inline position-relative' >
      <img src={bgImage} alt="bgImage " className='d-block' style={{height:"100vh",width:"100%"}} />
      <div className="container position-absolute " style={{top:"30vh",left:"0vh"}}>
        Hello
      </div>
    </div>
    // <div style={{backgroundImage:`url(${bgImage})`, height:"250px"}} >

    // </div>
  )
}

export default LandingPAge
