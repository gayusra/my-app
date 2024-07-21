import React from 'react'
import '../project/project.css'
import { ProjectData  } from '../data/projectdata'

function Project() {
  return (
    <>
    <div  className="container skills" id="skill"   data-aos = 'fade-right' data-aos-duration = '2000' >
       <div className='project_title'>
       <h1> My SKILLS</h1>
       <img src='theme_pattern.svg' className='project_img'/>

       </div>
   
      <div className="items">
        {ProjectData.map((data) => (
          <>
            <div
              className="item"
              key={data.id}
              data-aos = 'flip-left'
              data-aos-duration = '1000'
            
            >
              <img src={data.imagesrc} alt="" />
              <h3>{data.title}</h3>
            </div>
          </>
        ))}
      </div>
    </div>
  </>
    
  )
}

export default Project