import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-red-600 hover:text-red-500"
        >
          MovieHub
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>

          <Link to="/movies" className="hover:text-red-500">
            Movies
          </Link>

          <Link to="/series" className="hover:text-red-500">
            TV Series
          </Link>

          <Link to="/categories" className="hover:text-red-500">
            Categories
          </Link>

          <Link to="/favorites" className="hover:text-red-500">
            My List
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="hidden lg:block px-4 py-2 rounded-full bg-gray-800 outline-none"
          />

          <Link
            to="/login"
            className="bg-red-600 px-5 py-2 rounded-full hover:bg-red-700"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
