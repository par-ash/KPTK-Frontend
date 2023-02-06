import React from 'react'
import Image from 'next/image'



const CMT = () => {
    return (
        <div className='   w-full h-full  '>
            <div className='w-full max-w-[1200px] h-full py-[80px] m-auto px-[40px] flex flex-col  justify-center items-center '>
                <div className='flex flex-col justify-center items-center'>
                    <h6 className='text-[30px] md:text-[42px] leading-[30px] md:leading-[60px]  text-center font-bold tracking-[-0.03em]'>Community, Methodologists & Technology</h6>
                    <h6 className='text-[15px] md:text-[20px] leading-[15px] md:leading-[30px] mt-[13px] opacity-60 text-center font-normal tracking-[-0.02em]'>Index Coop is a decentralized autonomous organization powered by:</h6>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[80px] mt-[80px]'>
                    {/* Single Product */}
                    <div className='flex flex-col justify-center items-start'>
                        <Image src={"/global.svg"} width={64} height={64} />
                        <h6 className='text-[16px]   mt-[24px]  text-start font-bold tracking-[-0.03em]'>A globally distributed community</h6>
                        <h6 className='text-[14px]   mt-[10px]  text-start font-bold opacity-60 tracking-[-0.02em]'> We have contributors in every continent and timezone from an ever-growing range of countries</h6>
                    </div>
                    {/* end of Single Product */}

                    {/* Single Product */}

                    <div className='flex flex-col justify-center items-start'>
                        <Image src={"/expert.svg"} width={64} height={64} />
                        <h6 className='text-[16px]   mt-[24px]  text-start font-bold tracking-[-0.03em]'>Expert methodologists</h6>
                        <h6 className='text-[14px]   mt-[10px]  text-start font-bold opacity-60 tracking-[-0.02em]'> Product methodology is defined by partners that are here for the long-term and align with our vision, whether they come from within Index Coop or are sourced externally</h6>
                    </div>
                    {/* end of Single Product */}

                    {/* Single Product */}

                    <div className='flex flex-col justify-center items-start'>
                        <Image src={"/class.svg"} width={64} height={64} />
                        <h6 className='text-[16px]   mt-[24px]  text-start font-bold tracking-[-0.03em]'>Best-in-class technology</h6>
                        <h6 className='text-[14px]   mt-[10px]  text-start font-bold opacity-60 tracking-[-0.02em]'>Built on Set Protocol’s twice-audited contracts, we deliver truly innovative decentralized index, leverage, and yield-generating products</h6>
                    </div>
                    {/* end of Single Product */}


                </div>


            </div>
        </div>
    )
}

export default CMT