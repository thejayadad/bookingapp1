'use client'
// Login.js
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from 'next-auth/react';
import Modal from '../Modal';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === '' || email === '') {
      toast.error('Fill all fields!');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    try {
      const res = await signIn('credentials', { email, password, redirect: false });

      if (res?.error == null) {
        toast.success('Successfully logged in');
        setLoginSuccess(true);
      } else {
        toast.error('Error occurred while logging in');
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
    <button onClick={openModal}>Login</button>

    <Modal isOpen={isModalOpen} onClose={closeModal}>
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
        <button onClick={openModal}>Log in</button>

      </form>
      <ToastContainer />
    </Modal>
    </div>
  );
};

export default Login;
