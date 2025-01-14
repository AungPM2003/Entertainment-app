'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageCard from "./_components/ImageCard";
import 'swiper/css';
export default function Home() {
  return (
  
    <div className="my-5 px-5">
      <h4 className="text-[32px] py-3">Trending</h4>
       <Swiper
            spaceBetween={30} // Space between slides
            slidesPerView={1} // Number of slides to show
            breakpoints={{
              // Responsive breakpoints
              375: {
                slidesPerView: 2,
                spaceBetween:150
              },
              450:{
                slidesPerView: 2,
                spaceBetween:100
              },
              600: {
                slidesPerView: 3,
                spaceBetween:150
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}  
      >
        {Array.from({length:5},(_,index) => (
          <SwiperSlide key={index}>
            <ImageCard/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
