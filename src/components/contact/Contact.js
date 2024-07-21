import React, { useState } from 'react'
import '../contact/contact.css'

function Contact() {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c71d9bdb-0905-427d-aeed-4a9801bb9bd5");
    
        /*const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);&*/
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Email send succesfully!");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
      };
  return (
    <div id ='contact' className='contacts'  >
        <div className='contact_title' data-aos = 'fade-right' data-aos-duration = '1500' data-aos-easing="ease-in-sine">
            <h2>Get In Touch</h2>
            <img src='theme_pattern.svg'/>
            </div>
        <div className='contact_section'>
            <div className='contact_left' data-aos = 'zoom-in' data-aos-duration ='2000' data-aos-easing="ease-in-sine">
                <h1>Lets Talk</h1>
                
                <img src='contact.png' className='contact_image' />
                 <div className='contact_details'>
                    <div className='contact_detail'>
                        <img src='mail-icon.png' className='contact_mail'/>
                        <p>dhana.gayathri@gmail.com</p>

                    </div>
                    <div className='contact_detail'>
                        <img src='phone-icon.png' className='contact_phone'/>
                        <p>6382791774</p>

                    </div>
                    <div className='contact_detail'>
                        <img src='location-icon.png' className='contact_location'/>
                        <p>Worriyur,Trichy</p>

                    </div>
                  </div>

            </div>
            <form  onSubmit={onSubmit}className='contact_right' data-aos = 'fade-left' data-aos-duration = '2500' data-aos-easing="ease-in-sine" >
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter Your name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter Your email' name='email'/>
                <label htmlFor=''>Write Your Message</label>
                <textarea name='message'  rows='10' placeholder='Enter Your message' ></textarea>
                <span className='contact_span'>{result}</span>
                <button className='contact_submit'>Submit Now</button>
                 </form>
        </div>

    </div>
  )
}

export default Contact