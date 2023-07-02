"use client";

import { useSupabaseClient } from '@supabase/auth-helpers-react';

import Modal from './Modal'

const AuthModal = () => {

  const supabaseClient = useSupabaseClient();

  return (
    <Modal
      title="Welcome Back"
      description="Login to your account"
      isOpen
      onChange={() => {}}
    >
      Auth Modal Children
    </Modal>
  )
}

export default AuthModal