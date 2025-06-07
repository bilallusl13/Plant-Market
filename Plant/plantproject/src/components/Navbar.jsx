import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", id: "home" },
    { name: "About Us", path: "/about", id: "about" },
    { name: "Store", path: "/store", id: "store" },
    { name: "Basket", path: "/basket", id: "basket" },
    { name: "Contact", path: "/contact", id: "contact" },
    { name: "Feedback", path: "/feedback", id: "feedback" }
  ];

  return (
    <nav className="bg-green-800 flex justify-between px-6 py-7 sticky top-0 z-50 shadow-lg">
      <Link 
        to="/" 
        className="text-white text-xl font-bold hover:text-yellow-300 transition-colors duration-300"
      >
        InorderPlants
      </Link>
      <div className="flex space-x-6 text-white font-medium mr-40">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`
              ${location.pathname === item.path ? 'text-yellow-400' : 'text-white'}
              hover:text-yellow-300 transition-colors duration-300
            `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
