import React from 'react'
import { useState } from 'react';
import { Button } from '@mui/material';
// import BoxLeft from "../../public/boxleft.svg"
import Image from 'next/image';


const Hero = () => {

    const [isSwap, setSwap] = useState(true);
    const [isFlash, setFlash] = useState(false);

    const handleSwap = () => {
        setSwap(true);
        setFlash(false)
    }
    const handleFlash = () => {
        setSwap(false);
        setFlash(true)
    }



    return (
        <div className='max-w-[1200px] h-[90vh] py-[40px] px-[40px] w-full h-full m-auto  flex justify-between items-center'>
            <div className='w-full mt-[50px] md:mt-[30px] lg:mt-0  h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center'>

                {/* Left */}
                <div className='max-w-[646px]  mr-[10px] text-center lg:text-left'>
                    <h6 className=' text-[30px] leading-[35px] md:text-[45px] lg:text-[60px] md:leading-[50px] lg:leading-[74px] font-bolder text-[#FFFFFF] '>
                        Use our tokens to access sophisticated crypto strategies
                    </h6>
                    <h6 className='text-[19px] mt-[19px] leading-[24px] text-[#FFFFFF]  tracking-[-0.02em]'>
                        Clients hold <span className='text-[#7853F8] text-[28px] leading-[30px] font-bold '>$63,673,588</span> in our products
                    </h6>
                    <button className='text-[16px]  py-[10px] px-[30px] text-[white] mt-[30px] lg:mt-[60px]  font-medium py-[25] px-[28px] rounded-[10px]  bg-[#7853F8] normal-case  '>Explore Products</button>
                </div>
                {/* end of Left */}

                {/* Right part */}
                <div className='bg-[#302E3A] max-w-[429.1px]  mt-[80px] relative  rounded-[10px] flex-col justify-between items-center py-[20px] w-full '>
                    <div className='flex justify-evenly items-center '>
                        {/* Buttons */}
                        <div className='py-[8px]  px-[12px] rounded-[7px] bg-[#4D4A5C]   flex justify-center items-center'>
                            <button onClick={handleSwap} className={`   rounded-[7px] cursor-pointer py-[10px] px-[16px] xl:px-[28px] text-[white] text-opacity-40 text-[14px] leading-[24px] ${isSwap && `bg-[#7853F8]`} `}>
                                Swap
                            </button>
                            <button onClick={handleFlash} className={` rounded-[7px] cursor-pointer py-[10px] px-[28px] text-[white] text-[14px] text-opacity-40 leading-[24px] ${isFlash && `bg-[#7853F8]`} `}>
                                Flash mint
                            </button>

                        </div>
                        {/* end of Buttons */}


                    </div>

                    {/* Coins */}
                    <div className='flex flex-col px-[20px] sm:px-0 max-w-[425.74px] justify-center items-center'>
                        {/* Single Coin */}
                        <div className='flex flex-col w-full justify-center items-center md-0 sm:mr-[80px] mt-[16px]'>

                            <div className='bg-[#4D4A5C] rounded-[10px] w-full py-[5px] px-[10px]  flex justify-between items-center'>
                                <div className='flex justify-center items-center '>
                                    <select id='cars' className='bg-[#302E3A] w-[134px] px-[16px]  py-[10px] max-w-[105px] text-[white] text-[16px] rounded-[10px] text-opacity-40  mr-[20px]'>
                                        <option value="ETH">ETH</option>
                                        <option value="ETH">ETH</option>

                                    </select>
                                    <h6 className='text-[20px] opacity-40'>0.0</h6>
                                    <h6 className='text-[20px] opacity-40'>(~$0.0)</h6>

                                </div>
                                <span className='flex flex-col justify-center items-center  ' >
                                    <h6 className=' text-[16px] text-[#A48BFB] self-end leading-[14px]'>
                                        MAX
                                    </h6>
                                    <h6 className='opacity-40 text-[14px] leading-[14px]'>
                                        Balance 0.00 ETH
                                    </h6>

                                </span>

                            </div>
                        </div>
                        {/* end of Single Coin */}


                        {/* Single Coin */}
                        <div className='flex flex-col w-full justify-center items-center mr-0 sm:mr-[80px] mt-[16px]'>

                            <div className='bg-[#4D4A5C] rounded-[10px] w-full py-[5px] px-[10px]  flex justify-between items-center'>
                                <div className='flex justify-center items-center '>
                                    <select id='cars' className='bg-[#302E3A] w-[134px] px-[16px]  py-[10px] max-w-[105px] text-[white] text-[16px] rounded-[10px]  mr-[20px] text-opacity-40'>
                                        <option value="ETH">ETH</option>
                                        <option value="ETH">ETH</option>

                                    </select>
                                    <h6 className='text-[20px] opacity-40'>0.0</h6>
                                    <h6 className='text-[20px] opacity-40'>(~$0.0)</h6>

                                </div>
                                <span className='flex flex-col justify-center items-center  ' >
                                    <h6 className=' text-[16px] text-[#A48BFB] self-end leading-[14px]'>
                                        MAX
                                    </h6>
                                    <h6 className='opacity-40 text-[14px] leading-[14px]'>
                                        Balance 0.00 ETH
                                    </h6>

                                </span>

                            </div>
                        </div>
                        {/* end of Single Coin */}
                        <button variant="contained" className='text-[white] btnCoin whitespace-nowrap py-[8px] w-full rounded-[10px]  text-[16px] max-w-[299.86px] mt-[25px] '>Connect Wallet</button>


                    </div>
                    {/* end of Coins */}
                    <div className='absolute left-[-40px] top-0'>
                        <Image src={"/boxLeft.svg"} alt="boxLeft" width={23.43} height={23.43} />
                    </div>
                    <div className='absolute right-[150px] top-[-50px]'>
                        <Image src={"/boxtop.svg"} alt="boxtop" width={23.43} height={23.43} />
                    </div>

                    <div className='absolute right-[0px] bottom-[-60px]'>
                        <Image src={"/chart.svg"} alt="chart" width={97} height={97} />
                    </div>
                </div>
                {/* end of Right part */}
            </div>

        </div>
    )
}

export default Hero