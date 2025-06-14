import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createListing } from '../services/listingService';
import { useSelector } from 'react-redux';
import ListingForm from '../components/listings/ListingForm';

const SubmitListing = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    imageUrl: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { title, description, price, location, imageUrl } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const listingData = {
        title,
        description,
        price: Number(price),
        location,
        imageUrl,
      };
      await createListing(listingData, user.token);
      toast.success('Listing created successfully!');
      navigate('/listings');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create listing');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Add New Property</h1>
      <ListingForm
        formData={formData}
        onChange={onChange}
        onSubmit={onSubmit}
        loading={loading}
        buttonText="Submit Property"
      />
    </div>
  );
};

export default SubmitListing;