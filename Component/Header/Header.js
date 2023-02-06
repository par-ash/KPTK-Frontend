import React from 'react'
import { Button } from '@mui/material'
// const Drawer = 'antd';
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Link from 'next/link';

function index() {
    const [isOpen, setIsOpen] = React.useState(false)
    // const [isClose, setIsClose] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }


    return (
        <div className='w-[100%]  Header h-[10vh] fixed top-0 right-0 z-[99] py-[24px] px-[50px]  border-b-solid border-b-[1px] border-b-[#EBEBEB1A] self-end flex justify-end items-center  '>
            <button className='bg-[#7853F8] hidden lg:flex text-white py-[10px] px-[28px] rounded-[10px] text-[16px] leading-[24px]'>Connect Wallet</button>
            <div className='w-[50px] h-[50px] flex justify-center items-center  absolute top-[10px] left-0 ml-[50px] lg:hidden z-[20]'>
                <Image width={100} height={100} src="/logo.svg" alt="Logo" />
            </div>
            <DehazeIcon className='Drawer ' onClick={toggleDrawer} />

            <Drawer
                style={{ width: "100%", backgroundColor: "black", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", }}
                open={isOpen}
                onClose={handleClose}
                direction='left'
                className=' '
            >
                <div className='w-[50px] h-[50px] flex justify-start self-start absolute top-0 left-0 mt-[20px] ml-[20px] lg:hidden z-[20]'>
                    <Image width={100} height={100} src="/logo.svg" alt="Logo" />
                </div>
                <div className=' absolute top-0 right-0 mt-[20px] mr-[20px] h-[50px] w-[50px]'>
                    <CloseIcon className='h-[50px] w-[50px] ' onClick={handleClose} />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <button className='bg-[#7853F8] text-white py-[10px] px-[28px] rounded-[10px] text-[16px] leading-[24px]'>Connect Wallet</button>
                    <Link className='cursor-pointer' href={"/app/trade"}>
                        <h6 className='text-[24px] mt-[52px]  leading-[36px] text-[#FFFFFF]'>
                            Trade
                        </h6>
                    </Link>
                    <Link className='cursor-pointer' href={"/app/product"}>
                        <h6 className='text-[24px] mt-[28px] leading-[36px] text-[#FFFFFF]'>
                            Products
                        </h6>
                    </Link>
                    <Link className='cursor-pointer' href={"/app/token"}>
                        <h6 className='text-[24px] mt-[28px] leading-[36px] text-[#FFFFFF]'>
                            $INDEX
                        </h6>
                    </Link>
                </div>
            </Drawer>
        </div>
    )
}

export default index