import "./AboutContentStyles.css"
import Section from "./Section"
import React from 'react'
const languages = "C++, JavaScript, Python, Matlab, C, SQL, CSS, HTML"
const skills = "ReactJS, NodeJS, ExpressJS, MongoDB, Bootstrap"
const dsa = "Leetcode: 300+, GeeksForGeeks: 150+, Codeforces: 1435 (Specialist)"
const AboutContent = () => {
  return (
    <div className="info-container">
      <Section name="Languages" text={languages}/>
      <Section name="Skills" text = {skills}/>
      <Section name="Data Structures and Algorithms" text={dsa}/>

    </div>
  )
}

export default AboutContent
