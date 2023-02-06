import React from 'react'
import Image from 'next/image'


const Cards = () => {
    return (
        <div className='  mt-[200px]  w-full h-full  bg-[#18171C]'>
            <div className='w-full max-w-[1200px] h-full py-[80px] m-auto px-[40px] grid 
            grid-cols-1 sm:grid-cols-2 md:grid-cols-2    lg:grid-cols-3 gap-[20px]'>

                {[{
                    "id": 1,
                    "title": "Diversified Staked ETH Index",
                    "desc": "The Diversified Staked ETH Index is an index token of the leading Ethereum liquid staking tokens.",
                    "image": "/eth.svg"
                },
                {
                    "id": 2,
                    "title": "Interest Compounding ETH Index",
                    "desc": "The Interest Compounding ETH Index enhances staking returns with a leveraged liquid staking strategy.",
                    "image": "/eagle.svg.svg"
                },
                {
                    "id": 3,
                    "title": "Diversified Staked ETH Index",
                    "desc": "The Diversified Staked ETH Index is an index token of the leading Ethereum liquid staking tokens.",
                    "image": "/eth.svg"
                },
                {
                    "id": 4,
                    "title": "Diversified Staked ETH Index",
                    "desc": "The Diversified Staked ETH Index is an index token of the leading Ethereum liquid staking tokens.",
                    "image": "/eth.svg"
                },
                {
                    "id": 5,
                    "title": "Diversified Staked ETH Index",
                    "desc": "The Diversified Staked ETH Index is an index token of the leading Ethereum liquid staking tokens.",
                    "image": "/eth.svg"
                },
                {
                    "id": 6,
                    "title": "Diversified Staked ETH Index",
                    "desc": "The Diversified Staked ETH Index is an index token of the leading Ethereum liquid staking tokens.",
                    "image": "/eth.svg"
                },].map(({ id, title, image, desc }) => {
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
                    </div>
                })}

            </div>
        </div>
    )
}

export default Cards