import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import './Testimonials.css'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import {Pagination } from 'swiper/modules'
import 'swiper/css/pagination' 
export default function Testimonials() {
    const clients=[
        {
            img:profilePic1,
            review:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quis minus ex porro sint ab asperiores. Neque iure at excepturi, illo ab esse magni laboriosam veniam! Exercitationem unde magni ipsum."
        },
        {
            img:profilePic2,
            review:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quis minus ex porro sint ab asperiores. Neque iure at excepturi, illo ab esse magni laboriosam veniam! Exercitationem unde magni ipsum."
        },
        {
            img:profilePic3,
            review:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quis minus ex porro sint ab asperiores. Neque iure at excepturi, illo ab esse magni laboriosam veniam! Exercitationem unde magni ipsum."
        },
        {
            img:profilePic4,
            review:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quis minus ex porro sint ab asperiores. Neque iure at excepturi, illo ab esse magni laboriosam veniam! Exercitationem unde magni ipsum."
        }
    ]
  return (
    
    <div className="t-wrapper" id="Testimonials">
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            
            <div className="blur t-blur1"  style={{background:"var(--purple)"}}></div>
            <div className='blur t-blur2' style={{background:'skyblue'}}></div>
        </div>
        {/* slider */}
        <Swiper modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}>
            {
                clients.map(((client,index)=>{
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt=''/>
                                <span>{client.review}</span>
                            </div>
                            
                        </SwiperSlide>
                    )
                }))
            }
        </Swiper>
    </div>
  )
}
