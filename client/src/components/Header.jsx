import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaPlusCircle, FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">RealEstate</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center"
          >
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link
            to="/listings"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center"
          >
            <FaSearch className="mr-2" />
            Browse
          </Link>
          {user && (
            <Link
              to="/submit-listing"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center"
            >
              <FaPlusCircle className="mr-2" />
              Add Property
            </Link>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link
                to="/profile"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <FaUser className="mr-2" />
                {user.username}
              </Link>
              <button
                onClick={onLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;