import React from 'react';
import Image from "next/image";
import Collection from '../components/Collection';

import foustling_img1 from '../public/collectionImages/foustling1.png';
import foustling_img2 from '../public/collectionImages/foustling2.png';
import foustling_img3 from '../public/collectionImages/foustling3.png';

const Trending = () => {
  const collections = [
    {id: 1, name: "Foustlings", items: 1750, previewImage1: foustling_img1, previewImage2: foustling_img2, previewImage3: foustling_img3},
    {id: 2, name: "Foustlings", items: 1750, previewImage1: foustling_img1, previewImage2: foustling_img2, previewImage3: foustling_img3},
    {id: 3, name: "Foustlings", items: 1750, previewImage1: foustling_img1, previewImage2: foustling_img2, previewImage3: foustling_img3},
    {id: 4, name: "Foustlings", items: 1750, previewImage1: foustling_img1, previewImage2: foustling_img2, previewImage3: foustling_img3},
  ];

  return (
    <div className='px-12 pb-24'>
      <h2 className='flex justify-center items font-[CalSans] text-[1.8rem] mb-8'><Image src="/flame.png" alt='flame' width={40} height={40} className='mr-4'/>Trending Collections</h2>
      <div className='w-80 m-auto'>
        {collections.map(collection => (
          <Collection name={collection.name} items={collection.items} previewImage1={collection.previewImage1.src} previewImage2={collection.previewImage2.src} previewImage3={collection.previewImage3.src} key={collection.id}/>
        ))}
      </div>
    </div>
  )
}

export default Trending