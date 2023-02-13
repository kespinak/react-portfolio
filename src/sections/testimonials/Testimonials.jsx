import './testimonials.css'
import testimonials from './data'
import Testimonial from './Testimonial'
import React from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
// import required modules
import { Autoplay, Pagination } from "swiper";

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
          breakpoints={{
            601: {slidesPerView: 2},
            1025: {slidesPerView: 3}
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
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