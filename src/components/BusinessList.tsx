import React from 'react';
import Business from './Business';

const businesses = [
  {
    imageUrl: 'https://picsum.photos/id/1/5000/3333',
    name: 'Business 1',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipcode: '12345',
    category: 'Restaurant',
    rating: 4.5,
    reviewCount: 100,
  },
  {
    imageUrl: 'https://picsum.photos/id/2/5000/3333',
    name: 'Business 2',
    address: '456 Elm St',
    city: 'Othertown',
    state: 'CA',
    zipcode: '67890',
    category: 'Cafe',
    rating: 4.0,
    reviewCount: 50,
  },
  {
    imageUrl: 'https://picsum.photos/id/3/5000/3333',
    name: 'Business 3',
    address: '789 Oak St',
    city: 'Sometown',
    state: 'CA',
    zipcode: '13579',
    category: 'Bar',
    rating: 4.2,
    reviewCount: 75,
  },
  {
    imageUrl: 'https://picsum.photos/id/4/5000/3333',
    name: 'Business 4',
    address: '101 Pine St',
    city: 'Anycity',
    state: 'CA',
    zipcode: '24680',
    category: 'Shop',
    rating: 3.8,
    reviewCount: 30,
  },
  {
    imageUrl: 'https://picsum.photos/id/5/5000/3333',
    name: 'Business 5',
    address: '202 Maple St',
    city: 'Othercity',
    state: 'CA',
    zipcode: '11223',
    category: 'Gym',
    rating: 4.7,
    reviewCount: 120,
  },
  {
    imageUrl: 'https://picsum.photos/id/6/5000/3333',
    name: 'Business 6',
    address: '303 Cedar St',
    city: 'Somecity',
    state: 'CA',
    zipcode: '44556',
    category: 'Salon',
    rating: 4.3,
    reviewCount: 80,
  }
];

export default function BusinessList() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      {businesses.map((business, index) => (
        <Business
          key={index}
          {...business}
        />
      ))}
    </div>
  );
}