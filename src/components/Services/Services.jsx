import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

export default function Services() {
    const theme =useContext(themeContext)
  const darkMode=theme.state.darkMode
  const transition={duration:1,type:'spring'}
  return (
    <div className="services" id="Services">
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>My Awesome</span>
            <span>services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum esse odit <br/>
                ipsam veniam cupiditate illum pariatur dolorem</span>
            <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background:'#c1f5ff'}}></div>
            

        </div>
        <div className="cards">
            <motion.div 
            initial={{left:'25%'}}
            whileInView={{left:'14rem'}}
            transition={transition}
            style={{left:'14rem'}}>
                <Card emoji={HeartEmoji} heading='Design' detail="Figma, Sketch, Photoshop, Adobe, Adobe xd"/>
            </motion.div>
            <motion.div
            initial={{left:'25%',top:'25%'}}
            whileInView={{left:'-4rem',top:'12rem'}}
            transition={transition}
            style={{left:'-4rem',top:'12rem'}}>
                <Card emoji={Glasses} heading='Developer' detail="HTML, CSS, JavaScript, React"/>
            </motion.div>
            <motion.div
            initial={{left:'50%'}}
            whileInView={{top:'19rem',left:'12rem'}}
            transition={transition}
            style={{top:'19rem',left:'12rem'}}>
                <Card emoji={Humble} heading='UI/UX' detail={"Lorem ipsum dolor sit amet consectetur"}/>
            </motion.div>
            <div className="blur s-blur2"  style={{background:"var(--purple)"}}></div>
            
        </div>
    </div>
  )
}
