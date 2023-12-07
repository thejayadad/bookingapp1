'use client'
// Register.js
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../Modal';
import Login from './Login';

const Register = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    setRegistrationSuccess(false);
  };
  const closeModal = () => setModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === '' || email === '' || password === '') {
      toast.error('Fill all fields');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
      });

      console.log(await res.json());
      if (res.ok) {
        toast.success('Successfully registered the user');
        setRegistrationSuccess(true);
        return;
      } else {
        toast.error('Error occurred while registering');
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
      <button onClick={openModal}>Register</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          {!registrationSuccess ? (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username..."
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Register</button>
            </form>
          ) : (
            <div>
              <p>Registration successful!</p>
              <span className='text-center'>Wanna Login? </span>
              <Login />
            </div>
          )}
        </div>
        <ToastContainer />
      </Modal>
    </div>
  );
};

export default Register;
