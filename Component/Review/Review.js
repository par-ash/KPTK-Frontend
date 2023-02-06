import React from 'react'
import Image from 'next/image'

import { Navigation, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Review = () => {
    return (
        <div className='    w-full h-full  bg-[#18171C]'>
            <div className='w-full max-w-[1200px] h-full py-[80px] m-auto px-[40px] flex flex-col  justify-center items-center '>
                <div className='flex flex-col  justify-center items-center'>
                    <h6 className='text-[14px]    leading-[21px] text-[#7853F8] font-bold uppercase'>
                        Testimonials
                    </h6>
                    <h6 className='text-[25px] mt-[15px] md:text-[42px] leading-[30px] md:leading-[60px]  text-center font-bold tracking-[-0.03em] font-Manrope  '>Check what our clients are saying</h6>
                </div>

                {/* Slider */}
                <div className=' w-full'>
                    <Swiper
                        spaceBetween={36}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={true}

                        modules={[Autoplay, Navigation]}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                            return <SwiperSlide className='py-[50px] flex justify-center items-center'>
                                <div className='px-[80px] sm:px-[150px] md:px-[200px] py-[50px] pb-[-30px] m-auto flex flex-col justify-center mt-[20px]items-center'>
                                    <Image className='self-start' src={"/leftcoma.svg"} width={36.54} height={27} />
                                    <h6 className='text-[20px] leading-[30px] tracking-[-0.03em] text-center '>I’m bullish on projects like Index Co-Op, which makes it simple to create a custom index of tokens using smart contracts.

                                    </h6>
                                    <Image className='self-end' src={"/rightcoma.svg"} width={36.54} height={27} />
                                    <div className='flex flex-col   justify-center items-center'>
                                        <h6 className='text-[16px]  leading-[30px] tracking-[-0.03em] text-center  '>John Doe</h6>
                                        <h6 className='text-[14px] leading-[24px] tracking-[-0.02em] text-center italic opacity-60 '>Co-Founder & CEO at Messari</h6>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })}

                    </Swiper>
                </div>
                {/* end of Slider */}


            </div>
        </div>
    )
}

export default Review