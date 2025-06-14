import axios from 'axios';

const API_URL = '/api/listings';

// Get all listings
const getListings = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get single listing
const getListing = async (listingId) => {
  const response = await axios.get(`${API_URL}/${listingId}`);
  return response.data;
};

// Create listing
const createListing = async (listingData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, listingData, config);
  return response.data;
};

// Update listing
const updateListing = async (listingId, listingData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}/${listingId}`, listingData, config);
  return response.data;
};

// Delete listing
const deleteListing = async (listingId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/${listingId}`, config);
  return response.data;
};

const listingService = {
  getListings,
  getListing,
  createListing,
  updateListing,
  deleteListing,
};

export default listingService;