import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListingList from './ListingList';

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('https://api.example.com/listings');
        setListings(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error('Failed to fetch listings:', err);
        setListings([]); // Default to empty array on error
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ListingList listings={listings} />
    </div>
  );
};

export default Home;