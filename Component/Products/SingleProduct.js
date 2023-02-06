
import { Button } from '@mui/material'
import { handleSmoothScroll } from 'next/dist/shared/lib/router/router'
import Image from 'next/image'
import React, { useState } from 'react'
import { AreaChart, YAxis, ResponsiveContainer, XAxis, CartesianGrid, Tooltip, Area, PieChart, Pie } from 'recharts'

// import AppFooter from '../AppFooter/AppFooter'

const data = [
    {
        "name": "9 PM",
        "uv": 2000,
        "pv": 4000,
        "amt": "$2.5",
        "y": "$2.5"
    },
    {
        "name": "1 AM",
        "uv": 1500,
        "pv": 4000,
        "amt": 2210
        ,
        "y": "$1.5"
    },
    {
        "name": "6 AM",
        "uv": 1000,
        "pv": 900,
        "amt": "$0.5"
    },
    {
        "name": "11 AM",
        "uv": 1200,
        "pv": 3008,
        "amt": "0"
        ,
        "y": "$0.5"
    },
    // {
    //     "name": "3 PM",
    //     "uv": 1890,
    //     "pv": 4800,
    //     "amt": 

    //     "y": "0"
    // },
    // {
    //     "name": "Page F",
    //     "uv": 2390,
    //     "pv": 3800,
    //     "amt": 2500
    // },
    // {
    //     "name": "Page G",
    //     "uv": 3490,
    //     "pv": 4300,
    //     "amt": 2100
    // }
]


const data01 = [
    {
        "name": "Group A",
        "value": 200,
        "fill": "#A48BFB "
    },
    {
        "name": "Group B",
        "value": 500,
        "fill": "#0065EB "
    },
    {
        "name": "Group C",
        "value": 300,
        "fill": "#7853F8 "
    }
];





function SingleProduct() {
    const [D, setD] = useState(true);
    const [W, setW] = useState(false);
    const [M, setM] = useState(false);

    const handleD = () => {
        setD(true);
        setM(false);
        setW(false);
    }
    const handleM = () => {
        setD(false);
        setM(true);
        setW(false);
    }

    const handleW = () => {
        setD(false);
        setM(false);
        setW(true);
    }

    return (
        <div className='max-w-[1300px] w-full lg:w-[80%] px-[120px] px-[50px] lg:pl-[200px] xl:pl-[180px] py-[150px] relative flex items-center justify-center w-full' >
            <div className='flex flex-col justify-center m-auto items-center  w-full'>

                {/* Top part */}
                <div className='flex flex-col justify-center items-center self-center xl:self-start w-full'>
                    <div className='w-[32px] h-[32px] self-center xl:self-start'>
                        <Image src={"/eth.svg"} width={100} height={100} alt={"ETH"} />
                    </div>
                    <h6 className='text-[32px] mt-[10px]  self-center xl:self-start leading-[48px] font-bold text-[#FFFFFF]'>
                        Diversified Staked ETH Index
                    </h6>
                    <h6 className='text-[24px] mt-[2px]  self-center xl:self-start  leading-[36px] font-normal'>
                        $dsETH
                    </h6>
                </div>
                {/* end of Top part */}

                {/* Bottom */}
                <div className='  mt-[20px] grid grid-cols-1 xl:grid-cols-[6fr_6fr] gap-[20px] w-full h-full'>
                    {/* Left */}
                    <div className='w-full max-w-[100%] xl:max-w-[550px] flex flex-col justify-center items-center mr-[20px]   h-full sm:max-h-[670px]  h-full  '>
                        {/* Top */}
                        <div className='pt-[30px]  h-full w-full grid grid-row-[5_7]  rounded-[10px] bg-[#302E3A]  '>

                            <div className='flex flex-col md:flex-row justify-between items-center w-full h-full px-[20px]'  >
                                {/* Text */}
                                <div className='flex-col justify-center items-center'>
                                    <h6 className='text-[#7853F8] text-[46px]  font-bold'>$1,580.98</h6>
                                    <h6 className='text-[#F34242] text-[12px]  font-bold'>
                                        <span className='text-[#2ED16F]'>+$0.43 (+3.68%)</span>
                                        <span className='text-[#0065EB]'>+$0.43 (+3.68%)</span>

                                    </h6>
                                </div>
                                {/* end of Text */}

                                {/* Buttons */}
                                <div className='py-[8px] px-[10px] rounded-[10px] bg-[#4D4A5C]   flex justify-between items-center'>
                                    <button onClick={handleD} className={` rounded-[7px] cursor-pointer py-[10px] px-[16px] xl:px-[28px] text-[white] text-[14px] leading-[24px] ${D && `bg-[#7853F8]`} `}>
                                        1D
                                    </button>
                                    <button onClick={handleW} className={` rounded-[7px] cursor-pointer py-[10px] px-[28px] text-[white] text-[14px] leading-[24px] ${W && `bg-[#7853F8]`} `}>
                                        1W
                                    </button>
                                    <button onClick={handleM} className={` rounded-[7px] cursor-pointer py-[10px] px-[28px] text-[white] text-[14px] leading-[24px] ${M && `bg-[#7853F8]`} `}>
                                        1M
                                    </button>
                                </div>
                                {/* end of Buttons */}
                            </div>

                            <div className='min-w-[200px] w-[100%]  h-[325px]    '>
                                <ResponsiveContainer className="bg-[transparent]" width={"100%"} height={"100%"}>
                                    <AreaChart data={data}
                                    >
                                        <defs>

                                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" className='bgGraph' stopColor="#7853F8" stopOpacity={0.8} />
                                                <stop offset="95%" className='bgGraph' stopColor="#7853F8" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <XAxis className='text-[white]' dataKey="name" />
                                        <YAxis className='text-[white]' dataKey="amt" />

                                        <Tooltip />

                                        <Area type="monotone" dataKey="pv" stroke="#7853F8" fillOpacity={1} fill="url(#colorPv)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        {/* end of Top */}

                        <div className='flex flex-col  sm:flex-row  gap-[20px] w-full h-full  mt-[20px] justify-between items-center'>
                            {[{
                                "id": 1,
                                "image": "/pie.svg",
                                name: "Market Cap",
                                "price": "$16.75M",
                            },
                            {
                                "id": 2,
                                "image": "/second.png",
                                name: "Volume (24h)",
                                "price": "$132.67K",
                            },
                            {
                                "id": 3,
                                "image": "/third.svg",
                                name: "Current Supply",
                                "price": "1,000,000",
                            }].map(({ image, id, price, name }) => {
                                return <div key={id} className=' max-w-[100%] lg:max-w-[170px] w-full bg-[#302E3A] rounded-[10px] py-[30px] pl-[25px] lg:pr-[56px] h-full  flex-col justify-between items-center  '>
                                    <div>
                                        <Image src={image} alt="list" width={26} height={26}></Image>
                                    </div>
                                    <div className='grid grid-row-[6fr_6fr] '>
                                        <h6 className=' text-[14px] text-[#FFFFFF]'>
                                            {name}
                                        </h6>
                                        <h6 className=' text-[22px]  text-[#7853F8]'>
                                            {price}
                                        </h6>
                                    </div>
                                </div>
                            })}
                        </div>

                    </div>
                    {/* end of Left */}

                    {/* Right part */}
                    <div className='bg-[#302E3A] p-[25px] h-full mt-[80px] xl:mt-0 rounded-[10px] flex  flex-col justify-center items-between  w-full '>
                        <div className='flex justify-between items-center '>
                            <h6 className='text-[24px] font-semibold '>
                                Swap
                            </h6>
                            <div className='h-[26px] w-[26px]'>
                                <Image src={"/setting.svg"} alt="Setting" width={100} height={100}></Image>
                            </div>
                        </div>

                        {/* Coins */}
                        <div className='flex flex-col  justify-center items-center'>
                            {/* Single Coin */}
                            <div className='flex flex-col w-full justify-center  h-full items-center mt-[16px]'>
                                <h6 className='text-[16px] text-[white] self-start'>FROM</h6>
                                <div className='bg-[#4D4A5C] rounded-[10px] w-full py-[20px] px-[10px]  flex justify-between items-center'>
                                    <span className='flex flex-col justify-center items-center  ' >
                                        <h6 className='text-[48px]'>0.0</h6>
                                        <h6 className='text-[14px] opacity-40'>(~$0.0)</h6>
                                    </span>
                                    <div className='flex flex-col justify-center items-center'>
                                        <select id='cars' className='bg-[#302E3A] px-[20px]  py-[15px] max-w-[105px] text-[white] text-[16px] rounded-[10px]  '>
                                            <option value="ETH">ETH</option>
                                            <option value="ETH">ETH</option>

                                        </select>
                                        <h6 className='opacity-40 text-[14px] leading-[24px]'>
                                            Balance 0.00 ETH
                                        </h6>
                                        <h6 className=' text-[16px] text-[#A48BFB] leading-[24px]'>
                                            MAX
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            {/* end of Single Coin */}
                            <div className='w-[26px] h-[16px] self-end my-[20px]'>
                                <Image src={"/replace.svg"} alt="replace" width={100} height={100}></Image>
                            </div>

                            {/* Single Coin */}
                            <div className='flex flex-col w-full justify-center items-center mt-[16px]'>
                                <h6 className='text-[16px] text-[white] self-start'>TO</h6>
                                <div className='bg-[#4D4A5C] w-full rounded-[10px] py-[20px] px-[10px] flex justify-between items-center'>
                                    <span className='flex flex-col justify-center items-center ' >
                                        <h6 className='text-[48px]'>0.0</h6>
                                        <h6 className='text-[14px] opacity-40'>(~$0.0)</h6>
                                    </span>
                                    <div className='flex flex-col justify-center items-center'>
                                        <select id='cars' className='bg-[#302E3A] px-[20px]  py-[15px] max-w-[105px] text-[white] text-[16px] rounded-[10px]  '>
                                            <option value="ETH">dsETH</option>
                                            <option value="ETH">dsETH</option>

                                        </select>
                                        <h6 className='opacity-40 text-[14px] self-end leading-[24px]'>
                                            Balance 0.00 ETH
                                        </h6>
                                        <h6 className=' text-[16px] text-[#A48BFB] self-end leading-[24px]'>
                                            MAX
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            {/* end of Single Coin */}
                            <button className='text-[white] btnCoin whitespace-nowrap py-[12px] w-full rounded-[10px]  text-[16px]  mt-[25px]'>Connect Wallet</button>


                        </div>
                        {/* end of Coins */}
                        <div className='w-full text-center'>
                            <h6 className='text-[10px] font-normal   mt-[5px]'>This trade will be executed on contract:</h6>
                            <h6 className='text-[10px] font-bold '>0xDef1C0ded9bec7F1a1670819833240f027b25EfF</h6>
                        </div>
                    </div>
                    {/* end of Right part */}
                </div>
                {/* end of Bottom */}
                <div className='grid grid-cols-1 sm:grid-cols-4 mt-[150px] lg:mt-[150px] gap-[20px] self-start  w-full w-[100%] h-full xl:mt-[20px]  max-h-[170px] '>
                    {[{
                        "id": 1,
                        "image": "/stream.svg",
                        name: "Streaming Fee",
                        "price": "$16.75M",
                    },
                    {
                        "id": 2,
                        "image": "/mint.svg",
                        name: "Mint Fee",
                        "price": "$132.67K",
                    },
                    {
                        "id": 3,
                        "image": "/redem.svg",
                        name: "Redeem Fee",
                        "price": "1,000,000",
                    },
                    {
                        "id": 4,
                        "image": "/nav.svg",
                        name: "NAV",
                        "price": "1,000,000",
                    }].map(({ image, id, price, name }) => {
                        return <div key={id} className=' max-w-full lg:max-w-[170px] w-full bg-[#302E3A] rounded-[10px] py-[30px] pl-[25px] lg:pr-[56px] h-full  flex-col justify-between items-center  '>
                            <div>
                                <Image src={image} alt="list" width={26} height={26}></Image>
                            </div>
                            <div className='grid grid-row-[6fr_6fr] '>
                                <h6 className=' whitespace-nowrap text-[14px] text-[#FFFFFF]'>
                                    {name}
                                </h6>
                                <h6 className=' text-[22px]  text-[#7853F8]'>
                                    {price}
                                </h6>
                            </div>
                        </div>
                    })}
                </div>


                <div className='bg-[#302E3A] rounded-[10px] w-full p-[25px] mt-[500px] sm:mt-[30px]'>
                    <h6 className='text-[24px] leading-[24px]'>Allocations</h6>
                    <div className='flex flex-col lg:flex-row justify-center items-center'>
                        <PieChart width={254} height={214} >
                            <Pie stroke='none' data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} />

                        </PieChart>

                        {/* TAble */}
                        <table className='w-full'>
                            <tr className='hideHEad border-b-[1px] border-b-solid border-b-[#EBEBEB]'>
                                <th className='text-[12px] p-[20px]  '>Ticker</th>
                                <th className='text-[12px] p-[20px]'>Value Per Token</th>
                                <th className='text-[12px] p-[20px]'>24hr Change</th>

                            </tr>

                            {[1, 2, 3].map(() => {
                                return <>
                                    {/* Single Row */}
                                    <tr className='BlockDAta border-t-[1px] border-t-solid border-t-[#EBEBEB] border-opacity-10'>
                                        <td className='   py-[20px] flex          justify-center  items-center '>
                                            <div className='w-[6px] h-[6px] bg-[#0065EB] rounded-[50%] mr-[10px]'></div>
                                            <div className='w-[32px] h-[32px] flex  justify-center  items-center'>
                                                <Image src={"/eth.svg"} width={100} height={100} alt={"ETH"} />
                                            </div>
                                            <div className=' ml-[14px] flex flex-col justify-center  items-center '>
                                                <h6 className='font-normal text-[12px] text-[white] leading-[16px]'>Diversified Staked ETH Index</h6>
                                                <h6 className='font-bold text-[14px] text-[white] leading-[24px] self-start'>dsETH</h6>
                                            </div>

                                        </td>

                                        <td className=' lg:px-[20px] xl:px-[40px] py-[0px] '>
                                            <h6 className='text-[12px] leading-[16px] text-[#2ED16F]'>+3.68</h6>
                                        </td>

                                        <td className='lg:px-[20px] xl:px-[40px] py-[0px]  '>
                                            <h6 className='text-[12px] leading-[16px] text-[#F34242]'>+3.68</h6>
                                        </td>




                                    </tr>
                                    {/* end of Single Row */}

                                </>
                            })}

                        </table>
                        {/* end of TAble */}
                    </div>
                </div>


                {/* <AppFooter /> */}
                <div className=' mt-[468px] sm:mt-[68px]  rounded-[10px]  p-[20px] border-solid border-[1px] border-[#EBEBEB1A] text-[16px]  w-full'>
                    <h6>Disclaimer :</h6><br />
                    <p>
                        This content is for informational purposes only and is not legal, tax, investment, financial, or other advice. You should not take, or refrain from taking, any action based on any information contained herein, or any other information that we make available at any time, including blog posts, data, articles, links to third-party content, discord content, news feeds, tutorials, tweets, and videos. Before you make any financial, legal, technical, or other decisions, you should seek independent professional advice from a licensed and qualified individual in the area for which such advice would be appropriate. This information is not intended to be comprehensive or address all aspects of Index or its products. There is additional documentation on kryptic’s website about the functioning of Kryptic, and its ecosystem and community.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default SingleProduct 