import React from 'react'
import Image from 'next/image';

const Step = ({
  image,
  name,
  description,
}) => {
  return (
    <div className="mb-12 max-w-[320px]">
      <Image src={image} width={60} height={60} className='bg-[#B62FCE] rounded-full p-3 m-auto mb-4 md:ml-0'/>
      <h2 className='font-[CalSans] text-2xl mb-4 text-center md:text-left'>{name}</h2>
      <p className='font-[Poppins-Extralight] text-center md:text-left'>{description}</p>
    </div>
  )
}

export default Step