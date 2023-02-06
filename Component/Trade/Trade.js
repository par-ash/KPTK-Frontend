import React, { useState } from 'react'
import { Button } from '@mui/material';
import Image from 'next/image';
import { Modal } from 'antd';
const Trade = () => {

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='max-w-[1300px] w-full lg:w-[80%] px-[50px] lg:px-[120px] lg:pl-[230px] xl:px-[180px] py-[150px] relative flex items-center justify-center w-full'>
                <div className='flex flex-col justify-center m-auto items-center  w-full'>
                    {/* Upper Part */}



                    {/* Right part */}
                    <div className='bg-[#302E3A] py-[30px] px-[30px]  mt-[80px]  rounded-[10px] flex-col justify-between items-center max-w-[900px] w-full '>
                        <div className='flex justify-evenly items-center '>
                            {/* Buttons */}
                            <div className='py-[8px]  px-[12px] rounded-[7px] bg-[#4D4A5C]   flex justify-center items-center'>
                                <button onClick={handleSwap} className={`   rounded-[7px] cursor-pointer py-[10px] px-[16px] xl:px-[28px] text-[white] text-[14px] leading-[24px] ${isSwap && `bg-[#7853F8]`} `}>
                                    Swap
                                </button>
                                <button onClick={handleFlash} className={` rounded-[7px] cursor-pointer py-[10px] px-[28px] text-[white] text-[14px] leading-[24px] ${isFlash && `bg-[#7853F8]`} `}>
                                    Flash mint
                                </button>

                            </div>
                            {/* end of Buttons */}

                            <div className='h-[26px] w-[26px]'>
                                <Image src={"/setting.svg"} alt="Setting" width={100} height={100}></Image>
                            </div>
                        </div>

                        {/* Coins */}
                        <div className='flex flex-col  justify-center items-center'>
                            {/* Single Coin */}
                            <div className='flex flex-col w-full justify-center items-center mt-[16px]'>
                                <h6 className='text-[16px] text-[white] self-start'>FROM</h6>
                                <div className='bg-[#4D4A5C] rounded-[10px] w-full py-[10px] px-[10px]  flex justify-between items-center'>
                                    <div className='flex justify-center items-center '>
                                        <select id='cars' className='bg-[#302E3A] w-[134px] px-[16px]  py-[10px] max-w-[105px] text-[white] text-[16px] rounded-[10px]  mr-[20px]'>
                                            <option value="ETH">ETH</option>
                                            <option value="ETH">ETH</option>

                                        </select>
                                        <h6 className='text-[20px]'>0.0</h6>
                                        <h6 className='text-[20px] opacity-40'>(~$0.0)</h6>

                                    </div>
                                    <span className='flex flex-col justify-center items-center  ' >
                                        <h6 className=' text-[16px] text-[#A48BFB] self-end leading-[24px]'>
                                            MAX
                                        </h6>
                                        <h6 className='opacity-40 text-[14px] leading-[24px]'>
                                            Balance 0.00 ETH
                                        </h6>

                                    </span>

                                </div>
                            </div>
                            {/* end of Single Coin */}
                            <div className='w-[26px] h-[16px] self-end my-[15px]'>
                                <Image src={"/replace.svg"} alt="replace" width={100} height={100}></Image>
                            </div>

                            {/* Single Coin */}
                            <div className='flex flex-col w-full justify-center items-center mt-[16px]'>
                                <h6 className='text-[16px] text-[white] self-start'>TO</h6>
                                <div className='bg-[#4D4A5C] rounded-[10px] w-full py-[10px] px-[10px]  flex justify-between items-center'>
                                    <div className='flex justify-center items-center '>
                                        <select id='cars' className='bg-[#302E3A] w-[134px] px-[16px]  py-[10px] max-w-[105px] text-[white] text-[16px] rounded-[10px]  mr-[20px]'>
                                            <option value="ETH">ETH</option>
                                            <option value="ETH">ETH</option>

                                        </select>
                                        <h6 className='text-[20px]'>0.0</h6>
                                        <h6 className='text-[20px] opacity-40'>(~$0.0)</h6>

                                    </div>
                                    <span className='flex flex-col justify-center items-center  ' >

                                        <h6 className='opacity-40 text-[14px] leading-[24px]'>
                                            Balance 0.00 ETH
                                        </h6>

                                    </span>

                                </div>
                            </div>
                            {/* end of Single Coin */}
                            <button onClick={showModal} className='text-[white] btnCoin whitespace-nowrap py-[12px] w-full rounded-[10px]  text-[16px]  mt-[25px] '>Connect Wallet</button>


                        </div>
                        {/* end of Coins */}
                        <div className='w-full text-center mt-[25px]'>
                            <h6 className='text-[10px] font-normal   mt-[5px]'>This trade will be executed on contract:</h6>
                            <h6 className='text-[10px] font-bold '>0xDef1C0ded9bec7F1a1670819833240f027b25EfF</h6>
                        </div>
                    </div>
                    {/* end of Right part */}

                    {/* <AppFooter /> */}
                    <div className=' mt-[68px]  rounded-[10px]  p-[20px] border-solid border-[1px] border-[#EBEBEB1A] text-[16px] max-w-[900px]  w-full'>
                        <h6>Disclaimer :</h6><br />
                        <p>
                            This content is for informational purposes only and is not legal, tax, investment, financial, or other advice. You should not take, or refrain from taking, any action based on any information contained herein, or any other information that we make available at any time, including blog posts, data, articles, links to third-party content, discord content, news feeds, tutorials, tweets, and videos. Before you make any financial, legal, technical, or other decisions, you should seek independent professional advice from a licensed and qualified individual in the area for which such advice would be appropriate. This information is not intended to be comprehensive or address all aspects of Index or its products. There is additional documentation on kryptic’s website about the functioning of Kryptic, and its ecosystem and community.
                        </p>
                    </div>
                </div>
                {/* end of Upper Part */}

            </div>
            <Modal title="Connect Your Wallet" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='flex flex-col justify-center items-center '>
                    <h6 className='text-[16px] text-[white] text-opacity-40 self-start font-semibold'>Recommended</h6>
                    <div className='bg-[#4D4A5C] rounded-[10px] max-w-[401px] w-full p-[20px]  flex justify-between items-center'>
                        <div className='flex justify-center items-center'>
                            <Image width={32} height={32} src="/frame.svg" />
                            <h6 className='text-[18px] leading-[27px] text-[#FFFFFF] ml-[20px]'>Metamask</h6>
                        </div>
                        <button className='border-none bg-transparent'>
                            <Image width={32} height={32} src="/plus.svg" />
                        </button>
                    </div>

                    <div className='bg-[#4D4A5C]  mt-[10px] rounded-[10px] max-w-[401px] w-full p-[20px]  flex justify-between items-center'>
                        <div className='flex justify-center items-center'>
                            <Image width={32} height={32} src="/rain.svg" />
                            <h6 className='text-[18px] leading-[27px] text-[#FFFFFF] ml-[20px]'>Rainbow</h6>
                        </div>
                        <button className='border-none bg-transparent'>
                            <Image width={32} height={32} src="/plus.svg" />
                        </button>
                    </div>

                    <div className='bg-[#4D4A5C] mt-[10px] rounded-[10px] max-w-[401px] w-full p-[20px]  flex justify-between items-center'>
                        <div className='flex justify-center items-center'>
                            <Image width={32} height={32} src="/coin.svg" />
                            <h6 className='text-[18px] leading-[27px] text-[#FFFFFF] ml-[20px]'>Coinbase wallet</h6>
                        </div>
                        <button className='border-none bg-transparent'>
                            <Image width={32} height={32} src="/plus.svg" />
                        </button>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center mt-[30px]'>
                    <h6 className='text-[16px] text-[white] text-opacity-40 self-start font-semibold'>Recommended</h6>

                    <div className='bg-[#4D4A5C] mt-[10px] rounded-[10px] max-w-[401px] w-full p-[20px]  flex justify-between items-center'>
                        <div className='flex justify-center items-center'>
                            <Image width={32} height={32} src="/wallet.svg" />
                            <h6 className='text-[18px] leading-[27px] text-[#FFFFFF] ml-[20px]'>Wallet Connect</h6>
                        </div>
                        <button className='border-none bg-transparent'>
                            <Image width={32} height={32} src="/plus.svg" />
                        </button>
                    </div>
                    <div className='bg-[#4D4A5C] mt-[10px]  rounded-[10px] max-w-[401px] w-full p-[20px]  flex justify-between items-center'>
                        <div className='flex justify-center items-center'>
                            <Image width={32} height={32} src="/trust.svg" />
                            <h6 className='text-[18px] leading-[27px] text-[#FFFFFF] ml-[20px]'>Trust Wallet</h6>
                        </div>
                        <button className='border-none bg-transparent'>
                            <Image width={32} height={32} src="/plus.svg" />
                        </button>
                    </div>
                </div>

            </Modal>
        </>
    )
}

export default Trade