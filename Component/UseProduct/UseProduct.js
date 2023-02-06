import Image from 'next/image'
import React from 'react'

const UseProduct = () => {
    return (
        <div className='   w-full h-full  bg-transparent'>
            <div className='w-full max-w-[1200px] h-full py-[80px] m-auto px-[40px] flex flex-col  justify-center items-center '>
                <h6 className='text-[30px] md:text-[50px] leading-[30px] md:leading-[60px] text-center font-bold tracking-[-0.03em]'>Use our products to enjoy</h6>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-[80px] mt-[82px]'>
                    {/* Single line */}
                    <div className='flex self-start justify-start items-center '>
                        <Image src={"/ok.svg"} width={24} height={24} />
                        <h6 className='ml-[11px] text-[19px] leading-[20px] font-normal tracking-[-0.02em] opacity-80 text-[white]'>
                            Easy access to complex crypto strategies
                        </h6>
                    </div>
                    {/* end of Single line */}
                    {/* Single line */}
                    <div className='flex self-start  justify-start items-center '>
                        <Image src={"/ok.svg"} width={24} height={24} />
                        <h6 className='ml-[11px] text-[19px] leading-[20px] font-normal tracking-[-0.02em] opacity-80 text-[white]'>
                            Cost-efficient buy and hold
                        </h6>
                    </div>
                    {/* end of Single line */}
                    {/* Single line */}
                    <div className='flex  self-start justify-start items-center '>
                        <Image src={"/ok.svg"} width={24} height={24} />
                        <h6 className='ml-[11px] text-[19px] leading-[20px] font-normal tracking-[-0.02em] opacity-80 text-[white]'>
                            Best-in-class methodologists and technology
                        </h6>
                    </div>
                    {/* end of Single line */}
                    {/* Single line */}
                    <div className='flex self-start  justify-start items-center '>
                        <Image src={"/ok.svg"} width={24} height={24} />
                        <h6 className='ml-[11px] text-[19px] leading-[20px] font-normal tracking-[-0.02em] opacity-80 text-[white]'>
                            Easy to monitor current statistics
                        </h6>
                    </div>
                    {/* end of Single line */}
                </div>
            </div>
        </div>
    )
}

export default UseProduct