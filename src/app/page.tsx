'use client';

import React, { useState } from "react";
import Business from "../components/Business";
import SearchBar from "../components/SearchBar";


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

export default function Page() {

  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);

  const handleSearch = () => {
    // console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortBy}`);
    
    const results = businesses.filter(business => {
      const matchesTerm = searchTerm === '' || 
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = location === '' ||
        business.city.toLowerCase().includes(location.toLowerCase()) ||
        business.state.toLowerCase().includes(location.toLowerCase());
      
      return matchesTerm && matchesLocation;
    });

    if (sortBy === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'review_count') {
      results.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    setFilteredBusinesses(results);
  };


  return (
    <div className="flex flex-col min-h-screen">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        location={location}
        setLocation={setLocation}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onSearch={handleSearch} 
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      {filteredBusinesses.map((business, index) => (
        <Business
          key={index}
          {...business}
        />
      ))}
    </div>
    </div>
  );
}