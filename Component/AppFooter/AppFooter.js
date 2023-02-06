import React from 'react'
import Image from 'next/image'
const AppFooter = () => {
    return (
        <div className='w-full h-[10vh] flex justify-end items-start'>
            {/* <div className='max-w-[550px] lg:max-w-[800px] xl:max-w-[1150px] w-[80%] px-[120px] lg:px-[150px] xl:px-[180px] py-[100px] relative flex items-center justify-center'>
                <div className=' w-full  m-auto  rounded-[10px] p-[30px] border-solid border-[1px] border-[#EBEBEB1A] text-[16px] leading-[24px] '>
                    <h6>Disclaimer :</h6><br /><br />
                    <p>
                        This content is for informational purposes only and is not legal, tax, investment, financial, or other advice. You should not take, or refrain from taking, any action based on any information contained herein, or any other information that we make available at any time, including blog posts, data, articles, links to third-party content, discord content, news feeds, tutorials, tweets, and videos. Before you make any financial, legal, technical, or other decisions, you should seek independent professional advice from a licensed and qualified individual in the area for which such advice would be appropriate. This information is not intended to be comprehensive or address all aspects of Index or its products. There is additional documentation on kryptic’s website about the functioning of Kryptic, and its ecosystem and community.
                    </p>
                </div>
            </div> */}
            <div className='w-full lg:w-[calc(100%-20%)] static  h-[10vh]  bottom-0 right-0  py-[24px] px-[50px] border-t-solid border-t-[1px] border-t-[#EBEBEB1A] self-end flex justify-between items-center  self-end '>
                <div className='flex justify-center items-center'>
                    <div className='w-[50px] h-[50px]'>
                        <Image width={100} height={100} src="/logo.svg" alt="Logo" />
                    </div>
                    <h6 className='text-[12px] leading-[24px] text-[white] ml-[8px]'>kryptic.io</h6>
                </div>
                <div className='flex justify-center items-center'>
                    <h6 className='text-[12px] leading-[24px] text-[white] mr-[8px]'>
                        Privacy Policy |
                    </h6>
                    <h6 className='text-[12px] leading-[24px] text-[white] mr-[8px]'>
                        Terms of service
                    </h6>

                </div>
            </div>
        </div>
    )
}

export default AppFooter