import React, { useState } from 'react'
import "./HomeContentStyles.css"
import {Link} from "react-router-dom"

const fullName = "SARTHAK";
let i = 0 ;

const HomeContent = () => {

  const [curr , updateLol] = useState("") ;

  const updateName = () => {
    
    updateLol((prev) => {
      return fullName.substring(0,i) ;
    }) ;
    i = Math.min(i+1 , 7)
  }

  setInterval(updateName,500) ;

  return (
    <div className='content'>
        <div className='top-text'>
            <p>HEY, I'M <span>{curr}{curr == "SARTHAK" ? "" : "|"}</span></p>
            <p>FROM</p>
        </div>
        
        <h1>Delhi Technological University</h1>
        <div className='btn-div'>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn'>Contact</Link>
            
        </div>
    </div>
  )

  
}



export default HomeContent
