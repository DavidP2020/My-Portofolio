import React, { useState } from 'react'
import "./Certificate.css"
import { Data } from "./Data/Data"
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
const Portofolio = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    return (
        <section className='certificate section' id="Certificate">
            <h2 className='section-title'>Certificate</h2>
            <span className='section-subtitle'>My Certificate</span>

            <Swiper className="certificate-container"
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
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, image, title }) => {
                    return (
                        <SwiperSlide
                            className='certificate-card' key={id}>
                            <img src={image} alt="" className='certificate-img' />
                            {/* <Document className="doc" file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                                    
                                    <Page height={400}  pageNumber={pageNumber} className="doc"/>
                                </Document> */}
                            <h3 className="certificate-name">
                                {title}
                            </h3>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </section>
    )
}

export default Portofolio