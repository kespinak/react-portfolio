import './testimonials.css'
import React from "react";
import testimonials from './data'
import Testimonial from './Testimonial'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>
        These are some testimonials from some of my clients
      </p>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            testimonials.map(testimonial => (
              <SwiperSlide key={testimonial.id} >
                <Testimonial testimonial={testimonial}/>
              </SwiperSlide> 
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials