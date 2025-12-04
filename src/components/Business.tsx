import React from 'react';
import Image from 'next/image';

interface BusinessProps {
  imageUrl: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  category: string;
  rating: number;
  reviewCount: number;
}

export default function Business({
  imageUrl,
  name,
  address,
  city,
  state,
  zipcode,
  category,
  rating,
  reviewCount,
}: BusinessProps) {
  return (
    <div className='border rounded-lg shadow-lg bg-white'>
      <Image src={imageUrl} alt={name} width={500} height={333} className='rounded-lg shadow-md'/>
      <div className='p-4'>
        <h1 className='text-xl font-bold mb-2'>{name}</h1>
        <div className='flex justify-between'>
          <div>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zipcode}</p>
          </div>
          <div>
            <h1 className='text-lg font-bold'>{category}</h1>
            <p className='text-yellow-500 font-semibold'>{rating} stars</p>
            <p>{reviewCount} reviews</p>
          </div>
        </div>
        </div>
    </div>
  );
}