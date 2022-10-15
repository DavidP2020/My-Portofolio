import React, { useState } from 'react'
import "./Portofolio.css"
import { Data } from "./Data/Data"
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


const Portofolio = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
    console.log(index)
  }
  return (
    <section className='portofolio section' id="Portofolio">
      <h2 className='section-title'>Portofolio</h2>
      <span className='section-subtitle'>My Portofolio</span>

      <div className="porto-tabs">
        <div
          className={
            toggle === 1 ?
              "porto-button porto-active button--flex" :
              "porto-button button--flex"
          }
          onClick={() => toggleTab(1)}
        >
          Website
        </div>  

        <div
          className={
            toggle === 2 ?
              "porto-button porto-active button--flex" :
              "porto-button button--flex"
          }
          onClick={() => toggleTab(2)}
        >
          Design Illustrator
        </div>
      </div>

      <div className={toggle === 1 ? "website-container-active" : "design-container-active"}>
        <Swiper className="porto-container"
          loop={true}
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {Data.filter(a => a.title.includes("Desain")).map(({ id, image, title, desc }) => {
            return (
              <SwiperSlide
                className='porto-card' key={id}>
                <img src={image} alt="" className='porto-img' />

                <h3 className="porto-name">
                  {title}
                </h3>
                <p className="porto]-desc">{desc}</p>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className={toggle === 2 ? "website-container-active" : "design-container-active"}>
        <Swiper className="porto-container"
          loop={true}
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {Data.filter(a => a.title.includes("Website")).map(({ id, image, title, desc }) => {
            return (
              <SwiperSlide
                className='porto-card' key={id}>
                <img src={image} alt="" className='porto-web'/>

                <h3 className="porto-name">
                  {title}
                </h3>
                <p className="porto]-desc">{desc}</p>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Portofolio