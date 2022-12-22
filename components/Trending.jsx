import React from 'react';
import Image from "next/image";
import cover from '../public/heroImage.png'
import Collection from '../components/Collection';

const Trending = () => {
  const collections = [
    {id: 1, name: "Foustlings", items: 1750, previewImage1: cover, previewImage2: cover, previewImage3: cover, previewImage4: cover},
    {id: 2, name: "Foustlings", items: 1750, previewImage1: cover, previewImage2: cover, previewImage3: cover, previewImage4: cover},
    {id: 3, name: "Foustlings", items: 1750, previewImage1: cover, previewImage2: cover, previewImage3: cover, previewImage4: cover},
    {id: 4, name: "Foustlings", items: 1750, previewImage1: cover, previewImage2: cover, previewImage3: cover, previewImage4: cover},
  ];

  return (
    <div className='px-6 pb-24'>
      <h2 className='flex justify-center items font-[CalSans] text-[1.8rem] mb-8'><Image src="/flame.png" alt='flame' width={40} height={40} className='mr-4'/>Trending Collections</h2>
      <div>
        {collections.map(collection => (
          <Collection name={collection.name} items={collection.items} previewImage1={collection.previewImage1} previewImage2={collection.previewImage2} previewImage3={collection.previewImage3} previewImage4={collection.previewImage4} key={collection.id}/>
        ))}
      </div>
    </div>
  )
}

export default Trending