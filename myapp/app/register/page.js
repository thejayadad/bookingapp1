'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from '@/components/Modal'


const RegisterPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  return (
    <div>
    <button onClick={openModal}>Register</button>

    <Modal isOpen={isModalOpen} onClose={closeModal}>
     Register Form
    </Modal>
  </div>
  )
}

export default RegisterPage