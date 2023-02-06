import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

function sidebar() {

    const [isIndex, setIndex] = useState(true);
    const [isProduct, setProduct] = useState(false);
    const [isTrade, setTrade] = useState(false);

    const handleIndex = () => {
        setIndex(true);
        setProduct(false)
        setTrade(false)
    }

    const handleProduct = () => {
        setIndex(false);
        setProduct(true)
        setTrade(false)
    }

    const handleTrade = () => {
        setIndex(false);
        setProduct(false)
        setTrade(true)
    }

    return (
        <div className='h-[100vh] hidden lg:flex w-[20%] fixed z-[999] bg-[#121114] top-0 left-0 block flex  '>
            {/* Left part */}
            <div className='w-[20%]  h-full py-[26px] px-[24px] border-r-solid border-r-[1px] border-r-[#EBEBEB1A] flex flex-col justify-start items-center '>
                <div className='w-[50px] h-[50px]'>
                    <Image width={100} height={100} src="/logo.svg" alt="Logo" />
                </div>
                <div className='w-[50px] h-[50px]'>
                    <Image className='mt-[75px]' width={100} height={100} src="/list.svg" alt="List" />
                </div>
            </div>
            {/* end of Left part */}

            {/* Right part */}
            <div className=' h-full w-[80%] flex flex-col justify-start items-start border-r-solid border-r-[1px] border-r-[#EBEBEB1A]  pt-[136px] pl-[24px] pr-[90px]'>
                <h6 className='text-[24px] cursor-pointer leading-[36px]  text-[#FFFFFF] font-bold'>
                    App
                </h6>
                <h6 onClick={handleTrade} className={`text-[24px] cursor-pointer mt-[28px] leading-[36px] opacity-40 text-[#FFFFFF]  ${isTrade && `font-bold opacity-100`}`}>
                    Trade
                </h6>
                <h6 onClick={handleProduct} className={`text-[24px] cursor-pointer mt-[28px] leading-[36px] opacity-40 text-[#FFFFFF]  ${isProduct && `font-bold opacity-100`}`}>
                    Products
                </h6>
                <h6 onClick={handleIndex} className={`text-[24px] cursor-pointer mt-[28px] leading-[36px] opacity-40 text-[#FFFFFF]  ${isIndex && `font-bold opacity-100`}`}>
                    @INDEX
                </h6>
            </div>
            {/* end of Right part */}
        </div>
    )
}

export default sidebar