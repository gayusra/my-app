import React from 'react'
import './skill.css'
import { Skill_Data } from '../data/skilldata'

function Skill() {
  return (
    <div  id='project'className='skill'  data-aos = 'fade-right' data-aos-duration = '2000' >
        <div className='skill_title'>
            <h1>Projects</h1>
            <img src='theme_pattern.svg'/>
        </div>
        <div className='skill_container'>
            {Skill_Data.map((skill,index)=>{
                return <div key={index} className='skill_format'   data-aos = 'flip-right'
                data-aos-duration = '2000'>
                    
                    <h1>{skill.s_name}</h1>
                    <p>{skill.s_para}</p>
                    <p className='skill_para'>{skill.s_link}</p>
                    <a href={skill.url} target="_blank" rel="noopener noreferrer" className='skill_link'>Visit Link</a>
                </div>
            })}

        </div>

    </div>
  )
  
}

export default Skill