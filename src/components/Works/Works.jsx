import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

export default function Works() {
    const theme =useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className="works" id="Works">
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>Works for All these</span>
            <span>Brands & Clients</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum esse odit <br/>
                ipsam veniam cupiditate illum pariatur dolorem
                <br/>
                ipsam veniam cupiditate illum pariatur dolorem
                <br/>
                ipsam veniam cupiditate illum pariatur dolorem rewtw
                <br/>
                ipsam veniam cupiditate illum pariatur dolorem ewrfwgfdsgvd
                </span>
            <button className='button s-button'>Hire me</button>
            <div className='blur s-blur1' style={{background:'#c1f5ff'}}></div>
        </div>
        {/* right side */}
        <div className="w-right"
        >
            <motion.div className="w-mainCircle"
            initial={{rotate:45}}
            whileInView={{rotate:0}}
            viewport={{margin:'-40px'}}
            transition={{duration:3.5,type:'spring'}}>
                <div className="w-secCircle">
                    <img src={Upwork} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt=""/>
                </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>

        </div>

    </div>
  )
}
