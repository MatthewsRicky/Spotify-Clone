import { create } from "zustand";

interface AuthModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useeAuthModal = create<AuthModalStore>(() => ({
  isOpen: false;
  onOpen: () => set!({ isOpen: true });
  onClose: () => set!({ isOpen: false });
}))