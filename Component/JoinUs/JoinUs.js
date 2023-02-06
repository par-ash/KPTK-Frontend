import React from 'react'
import { Button } from '@mui/material';
// import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';



const JoinUs = () => {
    return (
        <div className='relative  w-full h-full  bg-[#7853F8]'>

            <div className='w-full max-w-[1200px] h-full py-[80px] m-auto px-[40px] flex flex-col lg:flex-row justify-between items-center'>

                {/* Left Part */}
                <div className='flex mb-[15px] lg:mb-0 flex-col justify-center items-center max-w-[518px]'>
                    <h6 className='text-[30px] lg:text-[50px] text-center lg:text-left leading-[60px] font-bold text-[#FFFFFF] tracking-[-0.03em]'>
                        Join us!
                        You’ll never look back!
                    </h6>
                    <h6 className='text-[14px] lg:text-[18px] leading-[30px] text-center lg:text-left font-bold text-[#FFFFFF] tracking-[-0.02em]'>
                        Decentralized finance is the greatest technological innovation of our age, set to change the way all industries work for the better - democratizing access, increasing transparency, and, most importantly, raising the position of the individual versus the legacy system and its unaccountable institutions.
                        <br />
                        <span className='font-semibold text-[#FFFFFF] '>Will you join us?</span>
                    </h6>
                </div>
                {/* end of Left Part */}

                {/* Right Part */}
                <div className='flex flex-col justify-center items-center max-w-[326px]'>
                    <button className="text-[18px] rounded-[5px] mt-[20px] flex justify-center items-center leading-[25px] text-[white] bg-[#00B9FF] py-[18px] pl-[40px] pr-[168px] hover:bg-[#302E3A]" >
                        <Image src={"/twitter.svg"} style={{ marginRight: "27px" }} width={30} height={30} />
                        Twitter
                    </button>
                    <button className="text-[18px] rounded-[5px] mt-[20px] flex justify-center items-center leading-[25px] text-[white] bg-[#354B99] py-[20px] pl-[42px] pr-[158px] hover:bg-[#302E3A]">
                        <Image src={"/discord.svg"} style={{ marginRight: "27px" }} width={30} height={30} />                        Discord
                    </button>
                    <button className="text-[18px] rounded-[5px] mt-[20px] flex justify-center items-center leading-[25px] text-[white] bg-[#F5841F] py-[18px] pl-[22px] pr-[158px] hover:bg-[#302E3A] w-full">
                        {/* <ChatBubbleIcon style={{ marginRight: "40px", width: "30px", height: "30px" }} /> */}
                        <Image src={"/chat.svg"} style={{ marginRight: "27px" }} width={30} height={30} />
                        Chat
                    </button>
                </div>
                {/* end of Right Part */}
            </div>

            <Image className='absolute right-0 top-[15px]' src={"/PolygonRight.svg"} width={153} height={153} />
            <Image className='absolute right-[50%] top-[11px]' src={"/PolygonCenter.svg"} width={200} height={200} />
            <Image src={"/PolygonLeft.svg"} className='absolute left-[5px] top-[180px]' width={180} height={180} />
        </div>
    )
}

export default JoinUs;