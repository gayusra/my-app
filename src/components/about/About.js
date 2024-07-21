import React from 'react'
import '../about/about.css'
function About() {
  return (
    <div id ='about' className='about'  data-aos ='fade-right' data-aos-duration='2000'>
        <div className='about_title'>
            <h1>About Me</h1>
            <img src='theme_pattern.svg'/>
          

        </div>
        <div className='content' >
            <img src='myprofile.jpeg' className='pic_img'  data-aos ='zoom-in' data-aos-duration='2000' />
            <ul className='about_items' data-aos ='zoom-in' data-aos-duration='2000'>
                <li className='about_item'>
                    <div className='aboutitem_text' data-aos ='zoom-in' data-aos-duration='2000'>
                        <h1>Education</h1>
                        <p> Hi, I'm Gayathri Prabha, a passionate and aspiring FullStack Developer with a strong foundation in both front-end and back-end technologies. I recently graduated with a Bachelor of physics from kamarajar University, where I developed a keen interest in building web applications.</p>
                    </div>
                </li>
                <li className='about_item' >
                    <div className='aboutitem_text' data-aos ='zoom-in' data-aos-duration='2000'>
                        <h1>Interest</h1>
                        
                        <p> My journey into full-stack development began during my college years, where I learned to work with HTML, CSS, JavaScript, and popular frameworks like React.js and Node.js. I enjoy the process of creating efficient, scalable, and user-friendly applications. I have completed several personal projects, including a portfolio website and a to-do list app, which you can explore in my portfolio.</p>
                    </div>
                </li>
                <li className='about_item' >
                    <div className='aboutitem_text' data-aos ='zoom-in' data-aos-duration='2000'>
                        <h1>Passion</h1>
                        
                        <p>In addition to my technical skills, I am committed to continuous learning and growth. I have completed various online courses and certifications to stay updated with the latest industry trends and best practices. I am particularly interested in exploring new technologies and solving complex problems</p>
                    </div>
                </li>
                <li className='about_item'>
                    <div className='aboutitem_text'  data-aos ='zoom-in' data-aos-duration='2000' >
                        <h1>Career</h1>
                        
    
                        <p>Outside of coding, I enjoy reading tech blogs, participating in hackathons, and exploring the latest developments in the tech world. I am excited about the opportunities ahead and look forward to making a positive impact in the field of web development.</p>
                    </div>
                </li>
            </ul>

         </div>

    </div>
  )
}

export default About