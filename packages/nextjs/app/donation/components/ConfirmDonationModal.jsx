"use client";

import { useState } from "react";
import SuccessModal from "./SuccessModal";

const ConfirmDonationModal = ({ isOpen, onClose, donationAmount, cryptoType }) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleConfirmClick = () => {
    onClose(); // Close the confirmation modal
    setIsSuccessModalOpen(true); // Open the success modal
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-green-900 rounded-lg p-8 w-full max-w-lg relative">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Confirm your decision</h2>
          <p className="text-white text-lg mb-4 text-center">
            Fund Robinhood (0x7d83bfc14d7b4d2930e2ff9d3f45a09dff3e2a17)
          </p>
          <div className="flex items-center justify-center text-white text-xl mb-6">
            <span className="mr-2 text-green-400">✔️</span>
            <span>{donationAmount} {cryptoType} contributed</span>
          </div>
          <p className="text-gray-400 mb-8 text-center">
            Changes could be subject to additional gate fee.
          </p>
          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="border-2 border-gray-400 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmClick}
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>

      {/* Render SuccessModal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </>
  );
};

export default ConfirmDonationModal;
