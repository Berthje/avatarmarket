import React from "react";
import Image from "next/image";

const Collection = ({
  name,
  items,
  previewImage1,
  previewImage2,
  previewImage3,
  previewImage4,
}) => {
  return (
    <div className="pb-12 max-w-[320px]">
      <div className="w-full h-full grid grid-cols-2 gap-2">
        <div className='w-[155px] h-[105px] overflow-hidden bg-[url("/collectionImages/foustling1.png")]'></div>
        <div className='w-[155px] h-[105px] overflow-hidden bg-[url("/collectionImages/foustling1.png")]'></div>
        <div className='w-[155px] h-[105px] overflow-hidden bg-[url("/collectionImages/foustling1.png")]'></div>
        <div className='w-[155px] h-[105px] overflow-hidden bg-[url("/collectionImages/foustling1.png")]'></div>
      </div>
    </div>
  );
};

export default Collection;

//<img src={previewImage1} className='-mt-10'></img>
