"use client";
import Image from "next/image";
import SucessImg from "../../../public/icons/icon-park-outline_database-success.png";

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-green-900 rounded-lg p-8 w-full max-w-lg relative text-center">
        <div className="mb-6">
          {/* Include an icon for the success state, make sure the icon is properly imported or available in your assets */}
          <Image src={SucessImg} alt="Success Icon" className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Thank you!</h2>
          <p className="text-white text-lg mb-4">Thank you for donating</p>
        </div>
        <button
          onClick={onClose}
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition w-full"
        >
          Visit Homepage
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
