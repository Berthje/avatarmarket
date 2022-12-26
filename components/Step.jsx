import React from 'react'
import Image from 'next/image';

const Step = ({
  image,
  name,
  description,
}) => {
  return (
    <div className="mb-12 max-w-[320px]">
      <Image src={image} width={60} height={60} className='bg-[#B62FCE] rounded-full p-3 mb-4'/>
      <h2 className='font-[CalSans] text-2xl mb-4'>{name}</h2>
      <p className='font-[Poppins-Extralight]'>{description}</p>
    </div>
  )
}

export default Step