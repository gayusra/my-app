import React, { useState,useEffect } from 'react'
import '../navbar/navbar.css'

import { Link } from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';


function Navbar() {
  const [menu,setMenu] = useState('home')

    const [open, setOpen] = useState(false)
  
    const handleLinkClick = (section) => {
    setMenu(section);
    setOpen(false);
  };
  

  return (
    <>
    <Drawer open={open} onClose={()=>setOpen(false)}>
      <List sx={{minWidth: "300px", padding: "20px",background:'#1F0016',color:'white', height:'200vh',cursor:'pointer'}}>
        <ListItem sx={{padding: "25px"}}>
          <CloseIcon className='mob_nav_close'  onClick={()=>setOpen(false)}/>
        </ListItem>
        <ListItem  className={menu === 'home' ? 'mob_nav_active' : ''}  >
          <Link to='home' smooth={true} duration={500} offset={-50} className='drawer_link' onClick={()=>handleLinkClick('home')} >
          <ListItemText className='drawer_text'>Home</ListItemText>
             
          </Link>
        </ListItem>
        <ListItem  className={menu === 'about' ? 'mob_nav_active' : ''} onClick={() => handleLinkClick('home')}>
          <Link to='about' smooth={true} duration={500} offset={-50} className='drawer_link' onClick={()=>handleLinkClick('about')}>
          <ListItemText className='drawer_text'>About</ListItemText>
             
          </Link>
        </ListItem>
        <ListItem  className={menu === 'skill' ? 'mob_nav_active' : ''} onClick={() => handleLinkClick('home')}>
          <Link to='skill' smooth={true} duration={500} offset={-50} className='drawer_link' onClick={()=>handleLinkClick('skill')}>
          <ListItemText className='drawer_text'>Skills</ListItemText>
             
          </Link>
        </ListItem>
        <ListItem className={menu === 'project' ? 'mob_nav_active' : ''} onClick={() => handleLinkClick('home')}>
          <Link to='project' smooth={true} duration={500} offset={-50} className='drawer_link' onClick={()=>handleLinkClick('project')}>
          <ListItemText className='drawer_text'>Projects</ListItemText>
             
          </Link>
        </ListItem>
        <ListItem  className={menu === 'contact' ? 'mob_nav_active' : ''} onClick={() => handleLinkClick('home')}>
          <Link to='contact' smooth={true} duration={500} offset={-50} className='drawer_link' onClick={()=>handleLinkClick('contact')}>
          <ListItemText className='drawer_text'>Contact</ListItemText>
          
          
          </Link>
        </ListItem>
  
      </List>
    </Drawer>
    
    <div  className='nav_bar' data-aos = 'fade-down' data-aos-duration ='3000' >
      <div className='nav_title'>
        <h1>Portfolio</h1>
        <img src='theme_pattern.svg'/>
        
       </div>
       <img src='menu-icon.png' className='mob_nav_menu ' onClick={()=>setOpen(true)}/>

      
      
        <ul className='nav_menu'>
          

        <li onClick={() => setMenu('home')} className={menu === 'home' ? 'nav_active' : ''}>
        <Link 
          className='nav_link' 
          to='home' 
          smooth={true} 
          duration={500} 
          offset={-50}
          onClick={() => setMenu('home')}
        >
          Home
        </Link>
         </li>
         <li onClick={() => setMenu('about')} className={menu === 'about' ? 'nav_active' : ''}>
        <Link 
          className='nav_link' 
          to='about' 
          smooth={true} 
          duration={500} 
          offset={-50}
          onClick={() => setMenu('about')}
        >
          About
        </Link>
      </li>
      <li onClick={() => setMenu('skill')} className={menu === 'skill' ? 'nav_active' : ''}>
        <Link 
          className='nav_link' 
          to='skill' 
          smooth={true} 
          duration={500} 
          offset={-50}
          onClick={() => setMenu('skill')}
        >
          Skills
        </Link>
      </li>
      <li onClick={() => setMenu('project')} className={menu === 'project' ? 'nav_active' : ''}>
        <Link 
          className='nav_link' 
          to='project' 
          smooth={true} 
          duration={500} 
          offset={-50}
          onClick={() => setMenu('project')}
        >
          Projects
        </Link>
      </li>
      <li onClick={() => setMenu('contact')} className={menu === 'contact' ? 'nav_active' : ''}>
        <Link 
          className='nav_link' 
          to='contact' 
          smooth={true} 
          duration={500} 
          offset={-50}
          onClick={() => setMenu('contact')}
        >
          Contact
        </Link>
      </li>
       
       
           

        </ul>
        <div className='nav_connect'><Link to='contact' smooth={true} duration={500} offset={-50}>Connect With Me</Link></div>

        
    </div>
    </>

  )
}

export default Navbar