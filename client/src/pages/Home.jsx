import ListingList from '../components/ListingList';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Dream Home
        </h1>
        <p className="text-xl text-gray-600">
          Discover the perfect property from our curated listings
        </p>
      </div>
      <ListingList />
    </div>
  );
} 