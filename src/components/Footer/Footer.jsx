import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

export default function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt='' style={{width:'100%'}}/>
        <div className="f-content">
            <span>295664857@qq.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <Facebook color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}
