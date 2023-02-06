import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

function Product() {

    const [all, setAll] = useState(true);
    const [Thematic, setThematic] = useState(false);
    const [Leverage, setLeverage] = useState(false);
    const [Yeild, setYeild] = useState(false);

    const handleAll = () => {
        setAll(true);
        setThematic(false);
        setLeverage(false);
        setYeild(false);
    }
    const handleThematic = () => {
        setAll(false);
        setThematic(true);
        setLeverage(false);
        setYeild(false);
    }

    const handleLeverage = () => {
        setAll(false);
        setThematic(false);
        setLeverage(true);
        setYeild(false);
    }
    const handleYeild = () => {
        setAll(false);
        setThematic(false);
        setLeverage(false);
        setYeild(true);
    }



    return (
        <div className='max-w-[1300px]  lg:w-[80%] px-[50px] lg:px-[120px] lg:pl-[230px] xl:px-[180px] py-[150px] relative flex items-center justify-center w-full'>
            <div className='flex flex-col justify-center m-auto items-center  w-full'>
                {/* Upper part */}
                <div className=' flex flex-col md:flex-row justify-start  items-center self-start'>
                    <div className='w-[55px] h-[55px]'>
                        <Image src={"/discover.svg"} width={100} height={100} alt={"discover"} />
                    </div>
                    <div className=' flex flex-col justify-center ml-[20px]  items-center text-center md:text-left '>
                        <h6 className='font-bold text-[32px] text-[white] leading-[48px] '>Discover Kryptic Indices</h6>
                        <h6 className='font-normal text-[16px] text-opacity-60 self-start    text-[white] leading-[24px]'>Simple yet powerful crypto investment themes</h6>
                    </div>
                </div>
                {/* end of Upper part */}

                {/* Middle part */}
                <div className='py-1 sm:py-[8px] lg:py-[14px] mb-[20px] px-0 flex-wrap sm:flex-nowrap sm:px-[5px] lg:px-[10px] mt-[60px] b-[20px] rounded-[7px] bg-[#4D4A5C] self-start  flex justify-center items-center'>
                    <button onClick={handleAll} className={` lg:ml-3  rounded-[7px] cursor-pointer py-[10px] px-[16px] xl:px-[28px] text-[white] text-[14px] leading-[24px] ${all && `bg-[#7853F8]`} `}>
                        All
                    </button>
                    <button onClick={handleThematic} className={` lg:ml-3  rounded-[7px] cursor-pointer py-[10px] px-[28px] text-[white] text-[14px] leading-[24px] ${Thematic && `bg-[#7853F8]`} `}>
                        Thematic
                    </button>
                    <button onClick={handleLeverage} className={` lg:ml-3  rounded-[7px] cursor-pointer py-[10px] px-[28px] text-[white] text-[14px] leading-[24px] ${Leverage && `bg-[#7853F8]`} `}>
                        Leverage
                    </button>
                    <button onClick={handleYeild} className={` lg:ml-3  rounded-[7px] cursor-pointer py-[10px] px-[28px] text-[white] text-[14px] leading-[24px] ${Yeild && `bg-[#7853F8]`} `}>
                        Yeild
                    </button>
                </div>
                {/* end of Middle part */}


                {/* Table */}
                <div className='bg-[#302E3A] py-[40px] self-start  px-[20px] lg:px-[50px] border-solid border-[1px] border-[#EBEBEB1A] rounded-[10px] w-full flex justify-center items-center'>
                    <table className='w-full'>
                        <tr className='hideHEad border-b-[1px] border-b-solid border-b-[#EBEBEB]'>
                            <th className='text-[12px] p-[20px] flex justify-start px-[40px] items-center '>Ticker</th>
                            <th className='text-[12px] p-[20px]'>1D</th>
                            <th className='text-[12px] p-[20px]'>1W</th>
                            <th className='text-[12px] p-[20px]'>1M</th>
                            <th className='text-[12px] p-[20px]'>3M</th>
                        </tr>

                        {[1, 2, 3, 4, 5].map(() => {
                            return <>
                                {/* Single Row */}
                                <tr className='BlockDAta border-t-[1px] border-t-solid border-t-[#EBEBEB] border-opacity-10'>

                                    <td className='  lg:px-[40px] xl:px-[40px] py-[20px] flex          justify-center  items-center '>


                                        <div className='w-[32px] h-[32px] flex  justify-center  items-center'>
                                            <Image src={"/eth.svg"} width={100} height={100} alt={"ETH"} />
                                        </div>
                                        <Link href={"/app/singleproduct"}>
                                            <div className=' ml-[14px] flex flex-col justify-center  items-center '>
                                                <h6 className='font-normal text-[12px] text-[white] leading-[16px]'>Diversified Staked ETH Index</h6>
                                                <h6 className='font-bold text-[14px] text-[white] leading-[24px] self-start'>dsETH</h6>
                                            </div>
                                        </Link>
                                    </td>

                                    <td className=' lg:px-[20px] xl:px-[40px] py-[0px] '>
                                        <h6 className='text-[12px] leading-[16px] text-[#2ED16F]'>+3.68</h6>
                                    </td>

                                    <td className='lg:px-[20px] xl:px-[40px] py-[0px]  '>
                                        <h6 className='text-[12px] leading-[16px] text-[#F34242]'>+3.68</h6>
                                    </td>

                                    <td className='lg:px-[20px] xl:px-[40px] py-[0px]'>
                                        <h6 className='text-[12px] leading-[16px] text-[#2ED16F]'>+3.68</h6>
                                    </td>

                                    <td className='lg:px-[20px] xl:px-[40px] py-[0px]  '>
                                        <h6 className='text-[12px] leading-[16px] text-[#2ED16F]'>+3.68</h6>
                                    </td>
                                </tr>
                                {/* end of Single Row */}

                            </>
                        })}

                    </table>
                </div>
                {/* end of Table */}

                {/* <AppFooter /> */}
                <div className=' mt-[68px]  rounded-[10px]  p-[20px] border-solid border-[1px] border-[#EBEBEB1A] text-[16px]  w-full'>
                    <h6>Disclaimer :</h6><br />
                    <p>
                        This content is for informational purposes only and is not legal, tax, investment, financial, or other advice. You should not take, or refrain from taking, any action based on any information contained herein, or any other information that we make available at any time, including blog posts, data, articles, links to third-party content, discord content, news feeds, tutorials, tweets, and videos. Before you make any financial, legal, technical, or other decisions, you should seek independent professional advice from a licensed and qualified individual in the area for which such advice would be appropriate. This information is not intended to be comprehensive or address all aspects of Index or its products. There is additional documentation on kryptic’s website about the functioning of Kryptic, and its ecosystem and community.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product