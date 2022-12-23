import React from 'react';
import Image from "next/image";
import cover from '../public/collectionImages/foustling1.png'
import Collection from '../components/Collection';

const Trending = () => {
  const collections = [
    {id: 1, name: "Foustlings", items: 1750, previewImage1: cover, previewImage2: cover, previewImage3: cover, previewImage4: cover},
    {id: 2, name: "Foustlings", items: 1750, previewImage1: cover, previewImage2: cover, previewImage3: cover, previewImage4: cover},
    {id: 3, name: "Foustlings", items: 1750, previewImage1: cover, previewImage2: cover, previewImage3: cover, previewImage4: cover},
    {id: 4, name: "Foustlings", items: 1750, previewImage1: cover, previewImage2: cover, previewImage3: cover, previewImage4: cover},
  ];

  return (
    <div className='px-12 pb-24'>
      <h2 className='flex justify-center items font-[CalSans] text-[1.8rem] mb-8'><Image src="/flame.png" alt='flame' width={40} height={40} className='mr-4'/>Trending Collections</h2>
      <div className='w-80 m-auto'>
        {collections.map(collection => (
          <Collection name={collection.name} items={collection.items} previewImage1={collection.previewImage1.src} previewImage2={collection.previewImage2.src} previewImage3={collection.previewImage3.src} previewImage4={collection.previewImage4.src} key={collection.id}/>
        ))}
      </div>
    </div>
  )
}

export default Trending