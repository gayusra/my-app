import React from 'react'
import '../profile/profile.css'

import TypeWriter from 'typewriter-effect'
import { lists } from '../data/dummydata'
import { Link } from 'react-scroll';



function Profile() {
  return (
    <>
    
     <div id='home' className='profile'>
    <div className='profile_left' data-aos = 'fade-up-right' data-aos-duration = '1000' >
        <h1 className='profile_h11'>I'm <span className='profile_h1'>Gayathri Prabha,</span> </h1>
        {lists.map((val,i)=>(
          <p className='profile_para' >I am a <span><TypeWriter options ={{strings:[`${val.data1}`,`${val.data2}`,`${val.data3}`,`${val.data4}`],autoStart:true,loop:true}}/></span> </p>
          
        ))}
      
         <p className='profile_text'>I am a passionate and dedicated FullStack Developer with a strong foundation</p>

    </div>
    <div data-aos = 'fade-down-right' data-aos-duration ='1000'>
    <img src='myprofile.jpeg' className='profile_img'/>
    </div>

   </div>
    <div className='profile_action'>
            <div className='profile_connect '><Link to='contact' className='profile_link' smooth={true} duration={500} offset={-50}>Connect With Me</Link></div>
            <div className='profile_resume'>My Resume</div>

        </div>
    
    </>
    
    

  )
}

export default Profile