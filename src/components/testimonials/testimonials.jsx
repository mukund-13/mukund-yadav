import React from 'react'
import './testimonials.css'
import PIC1 from '../../assets/andromeda.jpg'
import PIC2 from '../../assets/moon.jpeg'
import PIC3 from '../../assets/sun.jpeg'



// // import Swiper core and required modules
// import {Pagination} from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import 'swiper/components/pagination/pagination.min.css';

// SwiperCore.use([Pagination]);



const data = [
  
  {
    avatar: PIC1,
    name: 'Andromeda',
    review: 'The closest galaxy to ours, Andromeda is about 2.5 million light years away from the Milky Way. Even though it is so far, it can still be seen in the night sky from the naked eye!'
  },
  {
    avatar: PIC2,
    name: 'The Moon',
    review: 'This is one of my favorite pictures! The moon is about 1.5 light seconds away from earth, or 384,000 km. Here, you can see quite vividly the mountains and craters that are there on the moon.'
  },
  {
    avatar: PIC3,
    name: 'The Sun',
    review: 'The sun produces a lot of energy per second. Because of the sheer size of the star, these photons produced can take 10000 years to reach us! This picture was taken through my telescope by using a solar filter on the viewing lens.'
  }
  
]

const testimonials = () => {
  return (
   <section id="testimonials">
     <h5>Here are some pictures of</h5>
     <h2>SPACE</h2>

     <Swiper className="container testimonials__container"
     // install Swiper modules
     modules={[Pagination]}
     loop
     spaceBetween={40}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     >
       {
         data.map(({avatar, name, review}, index) => {
           return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar}/>
            </div>
           <h5 className='client__name'>{name}</h5>
           <small className='client__review'>
             {review}
           </small>
          </SwiperSlide>
           )
         })
       }
     </Swiper>
   </section>
  )
}

export default testimonials