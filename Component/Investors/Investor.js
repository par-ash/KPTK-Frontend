import Image from 'next/image'
import React from 'react'

const Investor = () => {
    return (
        <div className='    w-full h-full  bg-[#18171C]'>
            <div className='w-full max-w-[1200px] h-full py-[80px] m-auto px-[40px] flex flex-col  justify-center items-center '>
                <h6 className='text-[30px] md:text-[50px] leading-[30px] md:leading-[60px]  text-center font-bold tracking-[-0.03em]'>Investors</h6>

                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[80px] mt-[82px]'>
                    {/* Single Product */}
                    <div className='flex justify-center items-center'>
                        <Image src={"/seq.svg"} width={145} height={48} />
                    </div>
                    {/* end of Single Product */}

                    {/* Single Product */}

                    <div className='flex justify-center items-center'>
                        <Image src={"/galaxy.svg"} width={145} height={48} />
                    </div>
                    {/* end of Single Product */}

                    {/* Single Product */}

                    <div className='flex justify-center items-center'>
                        <Image src={"/wint.svg"} width={145} height={48} />
                    </div>
                    {/* end of Single Product */}

                    {/* Single Product */}

                    <div className='flex justify-center items-center'>
                        <Image src={"/1k.svg"} width={145} height={39} />
                    </div>
                    {/* end of Single Product */}
                </div>


            </div>
        </div>
    )
}

export default Investor