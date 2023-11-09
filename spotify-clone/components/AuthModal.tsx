"use client";

import { useSupabaseClient } from '@supabase/auth-helpers-react';

import Modal from './Modal'
import { Auth } from '@supabase/auth-ui-react';

const AuthModal = () => {

  const supabaseClient = useSupabaseClient();

  return (
    <Modal
      title="Welcome Back"
      description="Login to your account"
      isOpen
      onChange={() => {}}
    >
     <Auth
     supabaseClient={supabaseClient} 
     />
    </Modal>
  )
}

export default AuthModal