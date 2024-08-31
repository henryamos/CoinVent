"use client";

import { useState } from "react";
import ConfirmDonationModal from "./ConfirmDonationModal";

const DonationModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");
  const [cryptoType, setCryptoType] = useState("ETH");
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleGrantClick = (e) => {
    e.preventDefault();
    setIsConfirmModalOpen(true); // Open the confirm modal
    onClose(); // Close the donation modal
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-green-900 rounded-lg p-8 w-full max-w-2xl lg:max-w-3xl h-auto overflow-auto max-h-[90vh] relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Donate</h2>
            <button onClick={onClose} className="text-white text-2xl absolute top-4 right-4">&times;</button>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">RoboWorks</h3>
              <p className="text-green-400 text-sm">65% fundraising goal met</p>
            </div>
            <div className="w-full bg-gray-600 h-2 rounded-full my-4">
              <div className="bg-green-500 h-full rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="flex flex-wrap justify-between text-white text-sm">
              <div className="w-full lg:w-1/3 mb-2">
                <p><strong>Fundraising goal</strong></p>
                <p>$190,204,512</p>
              </div>
              <div className="w-full lg:w-1/3 mb-2">
                <p><strong>Total raised</strong></p>
                <p>$150,491,562</p>
              </div>
              <div className="w-full lg:w-1/3 mb-2">
                <p><strong>Starting date</strong></p>
                <p>SEP 9, 2023</p>
              </div>
              <div className="w-full lg:w-1/3">
                <p><strong>Completion date</strong></p>
                <p>June 9, 2025</p>
              </div>
              <div className="w-full lg:w-1/3">
                <p><strong>Number of backers</strong></p>
                <p>11,739</p>
              </div>
            </div>
            <p className="text-white mt-4 leading-relaxed">
              Robinhood is a financial services platform that offers commission-free trading for stocks, options, ETFs, and cryptocurrencies. Launched with the mission to democratize finance for all, Robinhood provides users with easy access to financial markets through a user-friendly mobile app and web interface...
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Project selected</h4>
            <div className="flex justify-between items-center mb-6">
              <p className="text-white text-md">RoboWorks</p>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  id="donationAmount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-40 px-4 py-2 rounded-md border border-gray-300 text-black"
                  placeholder="Enter amount"
                  required
                />
                <select
                  id="cryptoType"
                  value={cryptoType}
                  onChange={(e) => setCryptoType(e.target.value)}
                  className="w-24 px-4 py-2 rounded-md border border-gray-300 bg-gray-700 text-white"
                  required
                >
                  <option value="ETH">ETH</option>
                  <option value="OP">OP</option>
                  <option value="USDT">USDT</option>
                  <option value="USDC">USDC</option>
                </select>
              </div>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg text-white">
              <h4 className="text-lg font-semibold mb-2">Total</h4>
              <p className="text-sm mb-2"><strong>Your contribution</strong>: {amount || "0.0005"} {cryptoType}</p>
              <p className="text-sm mb-4"><strong>Wallet Address</strong>: 0x7d83b6c14d7b442b03e2f9fa834bd3ff0ea3e17</p>
              <p className="text-xs text-green-400">
                Your contribution must be valued at ≥2USD to be eligible for matching. Please note this platform accepts only Ethereum.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={handleGrantClick}
              className="bg-green-500 text-white px-6 py-3 rounded-md w-full"
            >
              Donate
            </button>
          </div>
        </div>
      </div>

      <ConfirmDonationModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        donationAmount={amount}
        cryptoType={cryptoType}
      />
    </>
  );
};

export default DonationModal;
