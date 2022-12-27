import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="px-24 pb-24 xl:px-44">
        <div className='w-full flex flex-col justify-between items-center lg:flex-row'>
            <div>
                <h2 className="font-[CalSans] tracking-tighter text-4xl mb-2 lg:text-5xl">avatarmarket</h2>
                <h3 className='font-[Poppins-Extralight] mb-1 text-[#C1C1CB] max-w-md'>The First Digital Marketplace for Reddit Avatar NFTs that supports multi-chain. Buy with RCPs & ETH.</h3>
                <p className='font-[Poppins] font-bold text-[#C1C1CB] mb-4 max-w-md'>Avatarmarket is neither a creation of, nor an affiliation with Reddit and OpenSea.</p>
                <h3 className='font-[CalSans] text-2xl mb-4'>Follow the <span className='text-[#B62FCE]'>community</span></h3>
                <div className='flex flex-row gap-5 mb-24'>
                    <div className='bg-white p-2 rounded-2xl'><Image src="/discordicon.svg" width={50} height={50}/></div>
                    <div className='bg-white p-2 rounded-2xl'><Image src="/redditicon.svg" width={50} height={50}/></div>
                    <div className='bg-white p-2 rounded-2xl'><Image src="/telegramicon.svg" width={50} height={50}/></div>
                </div>
            </div>
            <div className='drop-shadow-[0_0_95px_rgba(236,134,255,0.75)]'>
                <Image src="/cards.svg" width={300} height={300} className='xl:w-[400px] lg:w-[350px]'/>
            </div>
        </div>
    </div>
  )
}

export default Footer