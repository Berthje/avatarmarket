import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-6 pt-16 pb-24">
      <h1 className="font-[CalSans] text-4xl">
        Buy, Sell and
        <br />
        Collect Avatar NFTs.
      </h1>
      <p className="text-[#C1C1CB] mt-4 text-[1.1rem]">
        The First Digital Marketplace for Reddit Avatar NFTs that supports
        multi-chain. Buy now with RCPs & ETH.
      </p>
      <div className="flex gap-6">
        <button
          type="button"
          className="w-full py-3 radial-bg rounded-full text-center font-[CalSans] text-xl my-6"
        >
          Account
        </button>
        <button
          type="button"
          className="w-full py-3 bg-white text-[#7456CC] rounded-full text-center font-[CalSans] text-xl my-6"
        >
          Explore
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <Image src="/heroImage.png" alt="NFT Avatar" width={350} height={350}/>
      </div>
    </div>
  );
};

export default Hero;
