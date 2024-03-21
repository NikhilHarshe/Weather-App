import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const Member = ({ membersData }) => {
    const navigate = useNavigate();

    // console.log("membersData he ", membersData);
    return (
        <Swiper
            slidesPerView={4}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={30}
            freeMode={true}
            // pagination={{
            //     clickable: true,
            // }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="mySwiper h-full pl-2 pr-10 pt-1"
        >
            {
                membersData.map((member,index) => (

                    <SwiperSlide key={index} className="p-4 lg:w-1/4 md:w-1/2 mb-2 box-Shadow rounded-xl" onClick={() => navigate(`/member/${member._id}`)} >
                        <div >
                            <div className="h-full flex flex-col items-center text-center">
                                <img src={member.image} alt={member.firstName} className="flex-shrink-0 rounded-lg w-full h-64 object-cover object-center mb-4" />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">{member.firstName} {member.lastName} </h2>
                                    <h3 className="text-gray-500 mb-3">{member.roll}</h3>
                                    <p className="mb-4">{member.des.substring(0, 60)}
                                        <span>....</span>
                                    </p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}
export default Member