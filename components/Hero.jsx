import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-6 pt-16 pb-24 md:px-16 lg:px-24 xl:px-40">
      <div className="md:flex">
        <div>
          <h1 className="font-[CalSans] leading-[1.2] text-4xl lg:text-[2.9rem] xl:text-[3.2rem]">
            Buy, Sell and
            <br />
            Collect Avatar NFTs.
          </h1>
          <p className="text-[#C1C1CB] mt-4 text-[1.1rem] xl:text-[1.3rem]">
            The First Digital Marketplace for Reddit Avatar NFTs that supports
            multi-chain. Buy now with RCPs & ETH.
          </p>
          <div className="flex gap-6 md:w-80">
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
        </div>
        <div className="flex justify-center mt-5 md:w-[800px] lg:w-[1200px] md:m-0">
          <Image src="/heroImage.png" alt="NFT Avatar" width={350} height={350} priority/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
