import React from 'react'
import './Porfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'

export default function Porfolio() {
    const theme =useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className="porfolio" id="Portfolio">
        {/* heading */}
        <span style={{color:darkMode?'white':''}}>Recent Projects</span>
        <span>Porfolio</span>
        <Swiper 
            spaceBetween={3}
            slidesPerView={3}
            grabCursor={true}
            className='porfolio-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt=''/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
