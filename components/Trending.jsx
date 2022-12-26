import React from "react";
import Image from "next/image";
import Collection from "../components/Collection";

//Foustlings
import foustling_img1 from "../public/collectionImages/foustling1.png";
import foustling_img2 from "../public/collectionImages/foustling2.png";
import foustling_img3 from "../public/collectionImages/foustling3.png";
//SS: Rojom
import ssrojom_img1 from "../public/collectionImages/ssrojom1.png";
import ssrojom_img2 from "../public/collectionImages/ssrojom2.png";
import ssrojom_img3 from "../public/collectionImages/ssrojom3.png";
//SS: poieeeyee
import sspoieeeyee_img1 from "../public/collectionImages/sspoieeeyee1.png";
import sspoieeeyee_img2 from "../public/collectionImages/sspoieeeyee2.png";
import sspoieeeyee_img3 from "../public/collectionImages/sspoieeeyee3.png";
//The Senses
import thesenses_img1 from "../public/collectionImages/thesenses1.png";
import thesenses_img2 from "../public/collectionImages/thesenses2.png";
import thesenses_img3 from "../public/collectionImages/thesenses3.png";

const Trending = () => {
  const collections = [
    {
      id: 1,
      name: "Foustlings",
      items: 1750,
      previewImage1: foustling_img1,
      previewImage2: foustling_img2,
      previewImage3: foustling_img3,
    },
    {
      id: 2,
      name: "SS: Rojom",
      items: 2004,
      previewImage1: ssrojom_img1,
      previewImage2: ssrojom_img2,
      previewImage3: ssrojom_img3,
    },
    {
      id: 3,
      name: "SS: poieeeyee",
      items: 1790,
      previewImage1: sspoieeeyee_img1,
      previewImage2: sspoieeeyee_img2,
      previewImage3: sspoieeeyee_img3,
    },
    {
      id: 4,
      name: "The Senses",
      items: 1300,
      previewImage1: thesenses_img1,
      previewImage2: thesenses_img2,
      previewImage3: thesenses_img3,
    },
  ];

  return (
    <div className="px-12 pb-24">
      <h2 className="flex justify-center items font-[CalSans] text-[1.8rem] mb-8">
        <Image
          src="/flame.png"
          alt="flame"
          width={40}
          height={40}
          className="mr-4"
        />
        Trending Collections
      </h2>
      <div className="w-80 m-auto">
        {collections.map((collection) => (
          <Collection
            name={collection.name}
            items={collection.items}
            previewImage1={collection.previewImage1.src}
            previewImage2={collection.previewImage2.src}
            previewImage3={collection.previewImage3.src}
            key={collection.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
