import React ,{useContext} from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import glassesimoji from '../../img/glassesimoji.png'
import Crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import {motion} from 'framer-motion'

export default function Intro() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  const transition={duration:2,type:'spring'}
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?'white':''}}>Hi! I Am</span>
                <span>Leah Wan</span>
                <span>Fronted Developer with high level of experience in web designing and development,producting the Quality work</span>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className="i-icons">
                <a href='https://github.com/ttttffffff'>
                    <img src={Github} alt=''/>
                </a>
                {/* 下面两个我没有链接就不放在a标签里了 */}
                <img src={LinkedIn} alt=''/>
                <img src={Instagram} alt=''/>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt=''/>
            <img src={Vector2} alt=''/>
            <img src={boy} alt=''/>
            <motion.img
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glassesimoji} alt=''/>
            
            <motion.div 
            initial={{top:'-4%',left:'74%'}}
            whileInView={{left:'68%'}}
            transition={transition}
            style={{top:'-4%',left:' 68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            
            <motion.div 
            initial={{top:'18rem',left:'9rem'}}
            whileInView={{left:'0rem'}}
            transition={transition}
            style={{top:'18rem',left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </motion.div>
            {/* blur divs */}
            <div className="blur" style={{backgroundColor:"rgb(238 210 255"}}></div>
            <div className="blur" style={{background:'#c1f5ff',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>

    </div>
  )
}
