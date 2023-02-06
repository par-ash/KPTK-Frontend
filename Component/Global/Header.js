import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Button } from '@mui/material';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const Header = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    // useEffect(() => {
    //     // Client-side-only code
    //     const CheckWidth = ([window.innerWidth]);
    //     console.log("window.innerHeight", window.innerHeight);
    // }, [])


    return (
        <div className=' h-[10vh] py-[40px] px-[40px] w-full h-full   flex justify-between items-center bg-transparent'>
            <div className='w-full max-w-[1200px]  h-full m-auto flex justify-between items-center'>
                {/* Logo */}
                <div className='flex justify-between items-center'>
                    <Image src={"/logo.svg"} alt="Logo" width={50} height={50} />
                    <h6 className='text-[18px] font-bold text-[#FFFFFF] ml-[8px]'>kryptik.io</h6>
                </div>
                {/* end of Logo */}

                {/* Menu */}
                <div className=' hidden lg:flex justify-between items-center'>

                    <div className='flex justify-between items-center mr-[30px]'>
                        <Link href="#" className='normal-case text-[14px] bg-transparent font-semibold text-[#FFFFFF] mr-[8px]'>Products
                        </Link>

                    </div>

                    <div className='flex justify-between items-center mr-[30px]'>

                        <Link href="#" aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick} className='normal-case flex justify-between items-center text-[14px] bg-transparent font-semibold text-[#FFFFFF] mr-[8px]'>Resources
                            <Image src={"/down.svg"} width={7} height={4} className="ml-[5px]" /></Link>


                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>GitBook</MenuItem>
                            <MenuItem onClick={handleClose}>Bug Bounty</MenuItem>
                            <MenuItem onClick={handleClose}>Institution</MenuItem>
                        </Menu>
                    </div>
                    <Link href="#" className='normal-case text-[14px] bg-transparent font-semibold text-[#FFFFFF] mr-[16px]'>Token
                    </Link>

                    <Link href="#" className='normal-case text-[14px] bg-transparent font-semibold text-[#FFFFFF] mr-[16px]'>Community
                    </Link>
                    <Link href="#" className='normal-case text-[14px] bg-transparent font-semibold text-[#FFFFFF] mr-[16px]'>About
                    </Link>
                    <Link href="#" className='normal-case text-[14px] bg-transparent font-semibold text-[#FFFFFF] mr-[16px]'>Blog
                    </Link>



                </div>
                {/* end of Menu */}

                {/* button */}
                <Link href='/app' className={`bg-[#7853F8]  rounded-[10px] py-[8px] px-[28px]  text-[16px] font-medium text-[#FFFFFF] normal-case   `}>
                    App
                </Link>
                {/* <DehazeIcon className={` h-[50px] w-[50px] z-[20] ${CheckWidth > 1024 && `hidden`} `} onClick={toggleDrawer} /> */}
                {/* end of button */}
                {/* <Drawer
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
                        <Link href="#" className='bg-[#7853F8] text-white py-[10px] px-[28px] rounded-[10px] text-[16px] leading-[24px]'>Connect Wallet</Link>
                        <h6 className='text-[24px] mt-[52px]  leading-[36px] text-[#FFFFFF]'>
                            Trade
                        </h6>
                        <h6 className='text-[24px] mt-[28px] leading-[36px] text-[#FFFFFF]'>
                            Products
                        </h6>
                        <h6 className='text-[24px] mt-[28px] leading-[36px] text-[#FFFFFF]'>
                            $INDEX
                        </h6>
                    </div>
                </Drawer> */}
            </div>
        </div>
    )
}

export default Header