// components/Modal.js
"use client";

import Image from "next/image";
import SucessImg from "../../../public/icons/icon-park-outline_database-success.png";
import Link from "next/link";

// components/Modal.js
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#011B32] rounded-lg p-6 max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <button onClick={onClose} className="text-white text-lg">
            &times;
          </button>
        </div>
        <div className="text-center">
          <Image src={SucessImg} alt="Success Icon" className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-500 mb-2">Congratulations!</h2>
          <p className="text-white mb-6">You have successfully launched your project</p>
          <Link href="project-details">
          <button onClick={onClose} className="bg-green-500 text-white px-4 py-2 rounded">
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
