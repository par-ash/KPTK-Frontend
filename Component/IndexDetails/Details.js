import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Details = () => {
    return (
        <div className='   w-full h-full  py-[80px] px-[40px]'>
            <div className='w-full max-w-[1200px]   m-auto   h-full   flex flex-col  justify-center items-center '>
                {/* Buy and sell */}
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {/* Left part */}
                    <div className='flex justify-start items-start '>
                        <div className=''>
                            <Image src={"/eth.svg"} width={87} height={87} />
                        </div>
                        <div className='flex ml-[25px] flex-col justify-start items-start'>
                            <button className='bg-[#7853F8] text-[#7853F8] rounded-[5px] bg-opacity-20 tracking-[-0.02em] mt-[5px] py-[5px] px-[25px] normal-case'>
                                dsETH
                            </button>
                            <h6 className='text-[30px] md:text-[48px] text-[white] leading-[66px] tracking-[-0.03em]'>
                                Diversified Staked ETH Index
                            </h6>
                        </div>
                    </div>
                    {/* end of left part */}

                    {/* Right part */}
                    <div className='flex justify-end items-start'>
                        <button className='rounded-[10px] text-[white] bg-[#7853F8] py-[10px] px-[70px] text-[16px] leading-[24px] font-medium  normal-case'>
                            Buy
                        </button>
                        <button className='rounded-[10px] border-solid border-[#7853F8] border-[1px] text-[#7853F8] ml-[10px] bg-transparent  normal-case py-[10px] px-[70px] text-[16px] leading-[24px] font-medium'>
                            Sell
                        </button>
                    </div>
                    {/* end of Right part */}

                </div>
                {/* end of Buy and sell */}

                {/* Cards */}
                <div className='grid grid-cols-2 md:grid-cols-3 mt-[30px]  gap-[15px] self-center  md:self-start'>
                    {

                        [{ "id": 1, "title": "CURRENT PRICE", "desc": "$1,646.79" }, { "id": 2, "title": "CHANGE", "desc": "-2.40%" }, { "id": 3, "title": "VARIABLE APY", "desc": "5.61%" }].map(({ id, title, desc }) => {
                            return <div key={id} className='bg-[#302E3A] py-[20px] pl-[30px] pr-[50px] rounded-[10px]  flex flex-col justify-start items-start'>
                                <h6 className='text-[white] font-bold mb-[5px] text-[10px] md:text-[14px] leading-[23px] '>
                                    {title}
                                </h6>
                                <h6 className='text-[white] font-bold text-[18px] md:text-[28px] leading-[30px] '>
                                    {desc}
                                </h6>
                            </div>
                        })
                    }
                </div>
                {/* end of Cards */}
                <h6 className='font-bold text-center md:text-left text-[15px] md:text-[19px] opacity-80 leading-[30px] tracking-[-0.02px] my-[40px]'>The Diversified Staked Ethereum Index (dsETH) is an index token of the leading Ethereum liquid staking tokens. The index methodology weights the component tokens according to their degree of decentralization.</h6>

                <div className='grid grid-row-2 self-center md:self-start  '>
                    <h6 className='text-[white]  font-bold mb-[20px] text-[30px] md:text-[38px] leading-[51px] '>
                        Stats
                    </h6>

                    {/* Cards */}
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-[15px] '>
                        {

                            [{ "id": 1, "title": " Market Cap", "desc": "$0.00M" }, { "id": 2, "title": "Volume", "desc": "$0.00M" }, { "id": 3, "title": "Current supply", "desc": "0" }, { "id": 4, "title": "Streaming Fee", "desc": "0.25%" }].map(({ id, title, desc }) => {
                                return <div key={id} className='bg-[#302E3A] py-[20px] pl-[30px] pr-[50px] rounded-[10px]  flex flex-col justify-start items-start'>
                                    <h6 className='text-[white] font-bold mb-[5px] text-[10px] md:text-[14px] leading-[23px] '>
                                        {title}
                                    </h6>
                                    <h6 className='text-[white] font-bold text-[18px] md:text-[28px] leading-[30px] '>
                                        {desc}
                                    </h6>
                                </div>
                            })
                        }
                    </div>
                    {/* end of Cards */}
                </div>


                <div className='bg-[#302E3A] py-[20px] self-center  md:self-start pl-[30px] pr-[165px] rounded-[10px] mt-[26px] flex flex-col justify-start items-start'>
                    <h6 className='text-[white] font-bold mb-[5px] text-[10px] md:text-[14px] leading-[23px] '>
                        Minting / Redeeming Fee
                    </h6>
                    <h6 className='text-[white] font-bold text-[18px] md:text-[28px] leading-[30px] '>
                        0.00% / 0.00%
                    </h6>
                </div>


                <div className='grid grid-row-2 self-center  md:self-start mt-[40px]'>
                    <h6 className='text-[white] font-bold mb-[20px] text-[30px] md:text-[38px] leading-[51px] '>
                        Underlying Tokens
                    </h6>

                    {/* Cards */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-[15px] '>
                        {

                            [{ "id": 1, "title": " /reth.svg", "desc": "rETH" }, { "id": 2, "title": "/wsteth.svg", "desc": "wstETH" }, { "id": 3, "title": "/seth.svg", "desc": "sETH2" }].map(({ id, title, desc }) => {
                                return <div key={id} className='bg-[#302E3A] py-[20px]  px-[20px] rounded-[10px]  flex flex-col justify-center items-center'>
                                    <Image src={title} width={30} height={30} />
                                    <h6 className='text-[white] mt-[17px] font-bold text-[18px] md:text-[28px] leading-[30px] '>
                                        {desc}
                                    </h6>
                                </div>
                            })
                        }
                    </div>
                    {/* end of Cards */}
                </div>

                {/* Accordion */}
                <div className='grid grid-row-2 self-center  md:self-start mt-[40px]'>
                    <h6 className='text-[white] font-bold mb-[20px] text-[30px] md:text-[38px] leading-[51px] '>
                        About
                    </h6>

                    {/* Accordion */}

                    <Accordion className='   Accordion'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className='Expand ' />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className='bg-[#302E3A] rounded-[10px]'
                        >
                            <h6 className='text-[18px] md:text-[24px] leading-[33px] font-bold '>Methodology</h6>
                        </AccordionSummary>
                        <AccordionDetails>
                            <h6 className='text-[15px] md:text-[19px] leading-[30px] opacity-80'>
                                The objective of the dsETH methodology is to give token holders diversified exposure to ETH liquid staking tokens, with a weighting that favors decentralized liquid staking protocols as measured by the number of node operators as well as the distribution of stake across node operators.To begin, constituents are equally weighted before adding a NodeOperator Factor, which benefits staking protocols with more active node operators. An HHI (or Herfindahl-Hirschman Index) Factor is then added, which measures the concentration of stake and broader competition amongst active node operators within each protocol.
                            </h6>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className=' Accordion Accordion'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className='Expand ' />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className='bg-[#302E3A] rounded-[10px]'
                        >
                            <h6 className='text-[18px] md:text-[24px] leading-[33px] font-bold'>Details</h6>
                        </AccordionSummary>
                        <AccordionDetails>
                            <h6 className='text-[15px] md:text-[19px] leading-[30px] opacity-80'>
                                The objective of the dsETH methodology is to give token holders diversified exposure to ETH liquid staking tokens, with a weighting that favors decentralized liquid staking protocols as measured by the number of node operators as well as the distribution of stake across node operators.To begin, constituents are equally weighted before adding a NodeOperator Factor, which benefits staking protocols with more active node operators. An HHI (or Herfindahl-Hirschman Index) Factor is then added, which measures the concentration of stake and broader competition amongst active node operators within each protocol.
                            </h6>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className=' Accordion '>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className='Expand ' />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className='bg-[#302E3A] rounded-[10px]'
                        >
                            <h6 className='text-[18px] md:text-[24px] leading-[33px] font-bold'> Token Inclusion Criteria</h6>
                        </AccordionSummary>
                        <AccordionDetails>
                            <h6 className='text-[15px] md:text-[19px]leading-[30px] opacity-80'>
                                The objective of the dsETH methodology is to give token holders diversified exposure to ETH liquid staking tokens, with a weighting that favors decentralized liquid staking protocols as measured by the number of node operators as well as the distribution of stake across node operators.To begin, constituents are equally weighted before adding a NodeOperator Factor, which benefits staking protocols with more active node operators. An HHI (or Herfindahl-Hirschman Index) Factor is then added, which measures the concentration of stake and broader competition amongst active node operators within each protocol.
                            </h6>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className=' Accordion '>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className='Expand' />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className='bg-[#302E3A] rounded-[10px]'
                        >
                            <h6 className='text-[18px] md:text-[24px] leading-[33px] font-bold'> Maintenance</h6>
                        </AccordionSummary>
                        <AccordionDetails>
                            <h6 className='text-[15px] md:text-[19px] leading-[30px] opacity-80'>
                                The objective of the dsETH methodology is to give token holders diversified exposure to ETH liquid staking tokens, with a weighting that favors decentralized liquid staking protocols as measured by the number of node operators as well as the distribution of stake across node operators.To begin, constituents are equally weighted before adding a NodeOperator Factor, which benefits staking protocols with more active node operators. An HHI (or Herfindahl-Hirschman Index) Factor is then added, which measures the concentration of stake and broader competition amongst active node operators within each protocol.
                            </h6>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className=' Accordion '>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className='Expand' />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className='bg-[#302E3A] rounded-[10px]'
                        >
                            <h6 className='text-[18px] md:text-[24px] leading-[33px] font-bold'>Resources</h6>
                        </AccordionSummary>
                        <AccordionDetails>
                            <h6 className='text-[15px] md:text-[19px] leading-[30px] opacity-80'>
                                The objective of the dsETH methodology is to give token holders diversified exposure to ETH liquid staking tokens, with a weighting that favors decentralized liquid staking protocols as measured by the number of node operators as well as the distribution of stake across node operators.To begin, constituents are equally weighted before adding a NodeOperator Factor, which benefits staking protocols with more active node operators. An HHI (or Herfindahl-Hirschman Index) Factor is then added, which measures the concentration of stake and broader competition amongst active node operators within each protocol.
                            </h6>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className=' Accordion '>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className='Expand' />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className='bg-[#302E3A] rounded-[10px]'
                        >
                            <h6 className='text-[18px] md:text-[24px] leading-[33px] font-bold'>Disclaimer</h6>
                        </AccordionSummary>
                        <AccordionDetails>
                            <h6 className='text-[15px] md:text-[19px] leading-[30px] opacity-80'>
                                The objective of the dsETH methodology is to give token holders diversified exposure to ETH liquid staking tokens, with a weighting that favors decentralized liquid staking protocols as measured by the number of node operators as well as the distribution of stake across node operators.To begin, constituents are equally weighted before adding a NodeOperator Factor, which benefits staking protocols with more active node operators. An HHI (or Herfindahl-Hirschman Index) Factor is then added, which measures the concentration of stake and broader competition amongst active node operators within each protocol.
                            </h6>
                        </AccordionDetails>
                    </Accordion>


                    {/* end of Accordion */}
                </div>
                {/* end of Accordion */}

                {/* Right part */}
                <div className='flex flex-col sm:flex-row justify-center mt-[80px] items-start'>
                    <button className='rounded-[10px] text-[white] bg-[#7853F8] py-[10px] px-[70px] text-[16px] leading-[24px] font-medium  normal-case'>
                        Buy
                    </button>
                    <button className='rounded-[10px] mt-[10px] sm:mt-0 border-solid border-[#7853F8] border-[1px] text-[#7853F8] ml-0 sm:ml-[10px] bg-transparent  normal-case py-[10px] px-[70px] text-[16px] leading-[24px] font-medium'>
                        Sell
                    </button>
                </div>
                {/* end of Right part */}

            </div>
        </div>
    )
}

export default Details