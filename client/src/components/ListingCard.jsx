import { Link } from 'react-router-dom';
import { FaBed, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const ListingCard = ({ listing }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-sm font-semibold shadow-md">
          ${listing.price.toLocaleString()}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{listing.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FaMapMarkerAlt className="mr-2" />
          <span>{listing.location}</span>
        </div>
        <p className="text-gray-600 line-clamp-2 mb-4">{listing.description}</p>
        <Link
          to={`/listings/${listing._id}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;