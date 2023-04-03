import "./WorkCardStyles.css"
import ProjectCard from "./ProjectCard"
import React from 'react'

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">TAKE A LOOK!</h1>
      <div className="project-container">
        <ProjectCard name = "Disney+ Clone" info = "A clone of the Disney+ Website created with ReactJS and FireBase" link = "https://github.com/bans1mp/disney-clone"/>
        <ProjectCard name = "JustGambleIt" info = "A gaming website created with Bootstrap and MongoDB" link = "https://github.com/bans1mp/Gambling-Project"/>
        <ProjectCard name = "Eng. Corp. Website" info = "A website for a company situated in the outskirts of Jammu City" link = "https://github.com/bans1mp/Engineers-Corporation"/>

      </div>
    </div>
  )
}

export default WorkCard
