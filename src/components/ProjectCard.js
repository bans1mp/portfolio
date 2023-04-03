import React from 'react'
import "./ProjectCardStyles.css"
import { Link } from 'react-router-dom'
const ProjectCard = (props) => {
  return (
    <div className='card'>
      <div className='img-cnt'>
        
      </div>
      <h1>{props.name}</h1>
      <p>{props.info}</p>
      <Link to={props.link}className='btn card-btn'>GitHub</Link>
    </div>
  )
}

export default ProjectCard
