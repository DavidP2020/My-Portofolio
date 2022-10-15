import React from 'react'
import Frontend from './Myskill/Frontend'
import Desain from './Myskill/Desain'
import Other from './Myskill/Other'
import './Skill.css'
const Experience = () => {
  return (
    <section className='skill section' id="Skills">
      <h2 className='section-title'>Skill</h2>
      <span className='section-subtitle'>My Technical Skill</span>

      <div className="skill-container container grid">
        <Frontend />
        <Desain />
        <Other />
      </div>
    </section>
  )
}

export default Experience