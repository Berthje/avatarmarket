import React from "react";

const Collection = ({
  name,
  items,
  previewImage1,
  previewImage2,
  previewImage3,
}) => {
  return (
    <div className="mb-12 max-w-[320px] cursor-pointer">
      <div className="w-full h-full grid grid-cols-2 gap-2">
        <div className='overflow-hidden'>
          <div className="w-[155px] h-[105px] bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-150" style={{backgroundImage: `url(${previewImage1.substring(previewImage1.indexOf('/')+1)})`}}></div>
        </div>
        <div className='overflow-hidden'>
          <div className="w-[155px] h-[105px] bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-150" style={{backgroundImage: `url(${previewImage2.substring(previewImage1.indexOf('/')+1)})`}}></div>
        </div>
        <div className='overflow-hidden'>
          <div className="w-[155px] h-[105px] bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-150" style={{backgroundImage: `url(${previewImage3.substring(previewImage1.indexOf('/')+1)})`}}></div>
        </div>
        <div className='overflow-hidden'>
          <div className='w-[155px] h-[105px] bg-[length:500%] bg-left transition-all duration-500 ease-in-out transform hover:scale-150' style={{backgroundImage: `url(${previewImage3.substring(previewImage3.indexOf('/')+1)})`}}></div>
        </div>
      </div>
      <div className="w-[320px] h-[110px] bg-[#E147FD] rounded-b-[30px] absolute -z-[100] mt-[9px]"></div>
      <div className="w-full h-[110px] bg-[#1A1A1A] rounded-b-[30px] flex justify-between items-center px-10 mt-2">
        <h2 className="font-[CalSans] text-[1.1rem] tracking-wider">{name}</h2>
        <div className="border-2 border-[#878787] rounded-md p-1.5">
          <h3 className="font-[Poppins] text-[0.8rem] text-[#878787] font-bold">{items} items</h3>
        </div>
      </div>
    </div>
  );
};

export default Collection;