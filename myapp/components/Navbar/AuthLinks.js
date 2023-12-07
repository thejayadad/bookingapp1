'use client'
import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AuthLinks = () => {
  const [linksVisible, setLinksVisible] = useState(false);

  const handleProfileClick = () => {
    setLinksVisible(!linksVisible);
  };

  return (
    <div className="flex items-center space-x-4">
      <motion.div
        whileHover={{ scale: 1.5 }}
        className="relative"
        onClick={handleProfileClick}
      >
        <FiUser size={24} color="#000" />
        {linksVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-2 w-48 bg-black shadow-lg overflow-hidden z-10"
          >
            <div className="px-4 py-2">
              <Link
               className="block text-white hover:text-gray-300 transition duration-300"
              href="/login">
                  Login
             
              </Link>
              <Link 
              className="block text-white hover:text-gray-300 transition duration-300 mt-2"

              href="/register">
                  Register
            
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default AuthLinks;
