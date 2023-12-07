'use client'
// AuthLinks.js
import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Register from '../UserSetup/Register';
import Login from '../UserSetup/Login';

const AuthLinks = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const openTooltip = () => setTooltipVisible(true);
  const closeTooltip = () => setTooltipVisible(false);

  return (
    <div className="flex items-center space-x-4">
      <motion.div
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        className="relative"
      >
        <FiUser size={24} color="#000" />

        <AnimatePresence>
          {isTooltipVisible && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 mt-2 w-48 bg-orange-200 shadow-lg overflow-hidden z-10"
            >
              <div className="px-4 py-2 flex flex-col">
                <Login />
                <Register />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AuthLinks;
