import React from "react";
import Image from "next/image";
import Step from "../components/Step";

import clock from "../public/clockicon.svg";
import completion from "../public/completionicon.svg";
import upload from "../public/uploadicon.svg";
import wallet from "../public/walleticon.svg";

const WorkProcess = () => {
  const steps = [
    {
        id: 1,
        image: wallet,
        title: 'Connect your wallet',
        description: 'via your preferred wallet app. For example: Metamask, Trust Wallet, ...',
    },
    {
        id: 2,
        image: upload,
        title: 'List your avatar',
        description: 'and add your listing prices & settings to your liking.',
    },
    {
        id: 3,
        image: clock,
        title: 'Wait for a purchase',
        description: 'now it will automatically convert from Polygon Ethereum to moons',
    },
    {
        id: 4,
        image: completion,
        title: 'Wait for completion',
        description: 'and you will get sent moons to your connected wallet.',
    }
  ];

  return (
    <div className="px-12 pb-24">
      <h2 className="flex justify-center font-[CalSans] text-[1.8rem] mb-16">❓ How does it work</h2>
      <div className="w-full flex flex-wrap gap-12 justify-center">
        {steps.map((step) => (
          <Step 
            image={step.image}
            name={step.title}
            description={step.description}
            key={step.id}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
