import React from 'react'
import "./SectionStyles.css"
const Section = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
       <p>{props.text}</p>  
    </div>
  )
}

export default Section
