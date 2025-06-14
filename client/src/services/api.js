import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getListings = async () => {
  try {
    const response = await api.get('/listings');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getListing = async (id) => {
  try {
    const response = await api.get(`/listings/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}; 