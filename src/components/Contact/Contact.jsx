import React, { useState,useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context'
import { useContext } from 'react'

export default function Contact() {
    const theme =useContext(themeContext)
  const darkMode=theme.state.darkMode
    const form = useRef();
    const [done,setDone]=useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        // 这边需要外网邮箱，暂时没有，所以这些参数没有填
        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setDone(true)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color:darkMode?'white':''}}>Get in touch</span>
                    <span>Contact me</span>
                    <div className='blur s-blur1'
                        style={{ background: '#c1f5ff' }}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name' />
                    <input type='email' name='user_email' className='user' placeholder='Email' />
                    <textarea type='message' className='user' placeholder='Message' />
                    <input type="submit" value="Send" className='button' />
                    <span>{done&&"Thanks for contacting me"}</span>
                    <div className='blur c-blur1'
                        style={{ backgroud: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    )
}
