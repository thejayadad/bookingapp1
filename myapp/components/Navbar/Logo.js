'use client'
// components/Logo.js
import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = ({ size = '50px' }) => {
  return (
    <Link href={'/'}>
      <motion.div
        whileHover={{ scale: 1.3 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src='/logo.png'
          alt='Your Logo Alt Text'
          style={{ width: size, height: 'auto' }}
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
