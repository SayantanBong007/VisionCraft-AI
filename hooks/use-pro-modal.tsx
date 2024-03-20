// Importing the `create` function from Zustand for creating a state store
import { create } from "zustand";

// Defining the interface for the useProModal store
interface useProModalStore {
  isOpen: boolean; // State variable to track if the modal is open or closed
  onOpen: () => void; // Function to open the modal
  onClose: () => void; // Function to close the modal
}

// Creating the useProModal state store using Zustand's `create` function
export const useProModal = create<useProModalStore>((set) => ({
  isOpen: false, // Initial state: modal is closed by default
  onOpen: () => set({ isOpen: true }), // Function to set isOpen to true (open the modal)
  onClose: () => set({ isOpen: false }), // Function to set isOpen to false (close the modal)
}));
