import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'


const Ecosystem = () => {
    return (
        <div className='   w-full h-full  '>
            <div className='w-full max-w-[1200px] h-full py-[80px] m-auto px-[40px] flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center mb-[60px]'>
                    <h6 className='text-[30px] md:text-[42px] leading-[30px] md:leading-[60px]  text-center font-bold tracking-[-0.03em]'>Ecosystem</h6>
                    <h6 className='text-[15px] md:text-[20px] leading-[15px] md:leading-[30px] mt-[13px] opacity-60 text-center font-normal tracking-[-0.02em]'>Explore apps and services you can use with Index Coop products</h6>
                </div>
                <div className=' grid 
            grid-cols-1 sm:grid-cols-2 md:grid-cols-2    lg:grid-cols-3 gap-[20px]'>       {[{
                        "id": 1,
                        "title": "Gemini",
                        "desc": "Get exposure to DPI and Index via Gemini's exchange or  or  wallet.",
                        "short": "Explore Gemini",
                        "image": "/gemini.svg"
                    },
                    {
                        "id": 2,
                        "title": "Interest Compounding ETH Index",
                        "desc": "The Interest Compounding ETH Index enhances staking returns with a leveraged liquid staking strategy.",
                        "image": "/zerion.svg",
                        "short": "Explore Zerion",
                    },
                    {
                        "id": 3,
                        "title": "Diversified Staked ETH Index",
                        "desc": "The Diversified Staked ETH Index is an index token of the leading Ethereum liquid staking tokens.",
                        "image": "/kucoin.svg",
                        "short": "View the Pool",
                    },
                    {
                        "id": 4,
                        "title": "Diversified Staked ETH Index",
                        "desc": "The Diversified Staked ETH Index is an index token of the leading Ethereum liquid staking tokens.",
                        "image": "/gemini.svg",
                        "short": "Explore Gemini",
                    },
                    {
                        "id": 5,
                        "title": "Diversified Staked ETH Index",
                        "desc": "The Diversified Staked ETH Index is an index token of the leading Ethereum liquid staking tokens.",
                        "image": "/zerion.svg",
                        "short": "Explore Zerion",
                    },
                    {
                        "id": 6,
                        "title": "Diversified Staked ETH Index",
                        "desc": "The Diversified Staked ETH Index is an index token of the leading Ethereum liquid staking tokens.",
                        "image": "/kucoin.svg",
                        "short": "View the Pool",
                    },].map(({ id, title, image, desc, short }) => {
                        return <div key={id} className='flex bg-[#302E3A] flex-col justify-start items-center py-[30px] px-[60px] rounded-[10px] '>
                            <div className='w-[55px] h-[55px]'>
                                <Image src={image} width={55} height={55} />
                            </div>
                            <h6 className='text-[27px] text-center font-semibold text-[white] mt-[30px]'>
                                {title}
                            </h6>
                            <h6 className='text-[14px] text-center opacity-80  font-normal text-[white] mt-[30px]'>
                                {desc}
                            </h6>
                            <h6 className={`text-[16px] text-center font-bold font-normal ${short == "Explore Gemini" && `text-[#00DCFA]` || short == "Explore Zerion" && `text-[#5059FF]` || short == "View the Pool" && `text-[#01AAFF]`} mt-[12px]`}>
                                {short}
                            </h6>
                        </div>
                    })}
                </div>
                <Button className='py-[10px] self-center     px-[28px] text-[white] flex- justify-center items-center mt-[70px] bg-[#7853F8] rounded-[10px] text-[16px] font-medium'>Explore all Ecosystem Apps</Button>
            </div>
        </div>
    )
}

export default Ecosystem