import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Header from "../../Component/Header/Header"
import AppFooter from '../../Component/AppFooter/AppFooter'
import Trade from '@/Component/Trade/Trade'
import Link from 'next/link'


const trade = () => {

    const [isIndex, setIndex] = useState(false);
    const [isProduct, setProduct] = useState(false);
    const [isTrade, setTrade] = useState(true);

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
        <div className='flex flex-col justify-start items-center '>
            <Header />
            {/* <Sidebar /> */}
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
                    <Link href={"/app/trade"}>
                        <h6 onClick={handleTrade
                        } className={`text-[24px] cursor-pointer mt-[28px] leading-[36px] opacity-40 text-[#FFFFFF]  ${isTrade && `font-bold opacity-100`}`}>
                            Trade
                        </h6>
                    </Link>

                    <Link href={"/app/product"}>
                        <h6 onClick={handleProduct} className={`text-[24px] cursor-pointer mt-[28px] leading-[36px] opacity-40 text-[#FFFFFF]  ${isProduct && `font-bold opacity-100`}`}>
                            Product
                        </h6>
                    </Link>

                    <Link href={"/app/token"}>
                        <h6 onClick={handleIndex} className={`text-[24px] cursor-pointer mt-[28px] leading-[36px] opacity-40 text-[#FFFFFF]  ${isIndex && `font-bold opacity-100`}`}>
                            $Index
                        </h6>
                    </Link>
                </div>
                {/* end of Right part */}
            </div>
            {/* SideBar */}
            {/* end of SideBar */}

            {/* {
                isIndex && <$Index />
                ||
                isProduct && <Product />
                ||
                isTrade && <Trade />
            } */}


            <Trade />


            {/* <SingleProduct /> */}

            <AppFooter />
        </div>
    )
}

export default trade