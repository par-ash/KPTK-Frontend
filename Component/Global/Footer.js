import React from 'react'
import { Button } from '@mui/material'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='w-full  h-full py-[80px]  px-[40px]'>
            <div className='w-full max-w-[1200px] m-auto h-full flex flex-col lg:flex-row justify-between items-center'>
                {/* Logo */}
                <div className='flex self-center lg:self-start mr-[80px] justify-center items-start  '>
                    <div className='w-[50px] h-[50px] mt-[-10px]   '>
                        <Image src={"/logo.svg"} alt="Logo" width={50} height={50} />
                    </div>
                    <h6 className='text-[18px] font-bold text-[#FFFFFF] ml-[8px]'>kryptik.io</h6>
                </div>
                {/* end of Logo */}

                {/* Products */}
                <div className='flex flex-col self-center lg:self-start  justify-center items-center lg:items-start  mr-0 lg:mr-[60px]'>
                    <div>
                        <h6 className='font-bold self-center text-[21px] mb-[24px] leading-[24px] '>
                            Products
                        </h6>
                    </div>
                    <div className='flex  flex-row items-center justify-between lg:flex-col lg:justify-center mb-[50px] lg:mb-0 flex-wrap lg:flex-nowrap  lg:items-start'>
                        <h6 className='font-medium mt-[12px] lg:mt-0 text-[16px] leading-[24px] mr-[10px] lg:ml-0'>
                            Diversified Staked ETH Index
                        </h6>
                        <h6 className='font-medium mt-[18px] text-[16px] leading-[24px] mr-[10px] lg:ml-0 '>
                            Interest-compounding ETH Index
                        </h6>
                        <h6 className='font-medium mt-[18px] text-[16px] leading-[24px] mr-[10px] lg:ml-0 '>
                            DeFi Pulse Index
                        </h6>
                        <h6 className='font-medium mt-[18px] text-[16px] leading-[24px] mr-[10px] lg:ml-0 '>
                            Metaverse Index
                        </h6>
                        <h6 className='font-medium mt-[18px] text-[16px] leading-[24px] mr-[10px] lg:ml-0 '>
                            Bankless BED Index
                        </h6>
                        <h6 className='font-medium mt-[18px] text-[16px] leading-[24px] mr-[10px] lg:ml-0 '>
                            ETH2x-FLI
                        </h6>
                        <h6 className='font-medium mt-[18px] text-[16px] leading-[24px] mr-[10px] lg:ml-0 '>
                            BTC2x-FLI
                        </h6>
                    </div>
                </div>
                {/* end of Products */}

                {/* Resources */}
                <div className='flex flex-col self-center lg:self-start  justify-center items-center lg:items-start  '>
                    <div>
                        <h6 className='font-bold text-[21px] mb-[24px] leading-[24px] '>
                            Resources
                        </h6>
                    </div>
                    <div className='flex  flex-row justify-between items-start flex-wrap lg:flex-nowrap lg:flex-col lg:justify-center  lg:items-start mb-[50px] lg:mb-0'>
                        <h6 className='font-medium mt-[12px] lg:mt-0 text-[16px] leading-[24px] mr-[10px] lg:ml-0'>
                            For institutions
                        </h6>
                        <h6 className='font-medium mt-[12px] text-[16px] leading-[24px] mr-[10px] lg:ml-0 '>
                            Bug Bounty
                        </h6>
                        <h6 className='font-medium mt-[12px] text-[16px] leading-[24px] mr-[10px] lg:ml-0'>
                            Docs & Guides
                        </h6>
                        <h6 className='font-medium mt-[12px] text-[16px] leading-[24px] mr-[10px] lg:ml-0'>
                            Legal
                        </h6>
                        <h6 className='font-medium mt-[12px] text-[16px] leading-[24px] mr-[10px] lg:ml-0'>
                            Privacy Policy
                        </h6>
                        <h6 className='font-medium mt-[12px] text-[16px] leading-[24px] mr-[10px] lg:ml-0'>
                            Terms of Service
                        </h6>
                        <h6 className='font-medium mt-[12px] text-[16px] leading-[24px] mr-[10px] lg:ml-0'>
                            Tokens Restricted for Restricted Persons
                        </h6>
                    </div>
                </div>
                {/* end of Resources */}

                {/* News Letter */}
                <div className='grid grid-rows-2 ml-[50px] justify-center self-center lg:self-start  items-between'>
                    <div>
                        <h6 className='font-bold   text-[21px] mb-[24px] leading-[24px] '>
                            Join Our Newsletter
                        </h6>

                        <div>
                            <div className='flex flex-col justify-between self-start  items-start'>
                                <div className='flex justify-center items-start'>

                                    <input className='border-none text-[#080808]  bg-[white] rounded-l-[10px] py-[13px] pl-[15px] pr-[15px] md:pr-[100px]' placeholder='Your email address'>
                                    </input>
                                    <button sx={{ borderRadius: "none" }} className=" bg-[#7853F8] py-[13px] text-[white] pl-[10px] md:pl-[43px] pr-[10px] md:pr-[30px] rounded-r-[10px]">
                                        Subscribe
                                    </button>

                                </div>

                                <h6 className='font-medium text-[white] opacity-50 tracking-[-0.02em] text-[16px] mt-[21px] leading-[26px] '>* Will send you weekly updates for your better
                                    finance management.</h6>
                            </div>
                        </div>
                    </div>
                    {/* Links */}
                    <div className='flex flex-col  justify-end  items-start'>
                        <h6 className='text-[16px] font-medium leading-[28px] tracking-[-0.02em]'>    Connect with Us</h6>
                        <div className='flex  justify-start items-center'>
                            <Image src={"/linkdin.svg"} className="mr-[20px]" width={20} height={20} />
                            <Image src={"/messenger.svg"} className="mr-[20px]" width={20} height={20} />
                            <Image src={"/twitter.svg"} className="mr-[20px]" width={20} height={20} />
                            <Image src={"/insta.svg"} className="mr-[20px]" width={20} height={20} />
                            <Image src={"/discord.svg"} className="mr-[20px]" width={20} height={20} />
                            <Image src={"/mail.svg"} className="mr-[20px]" width={20} height={20} />
                            <Image src={"/youtube.svg"} className="mr-[20px]" width={20} height={20} />
                        </div>
                    </div>
                    {/* end of Links */}
                </div>
                {/* end of News Letter */}


            </div>
        </div>
    )
}

export default Footer