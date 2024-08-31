import React from 'react'

 function WidthdrawForm() {
  return (
    <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-white mb-4">Withdraw</h1>
        <p className="text-center text-white mb-6">Robinhood</p>
        <p className="text-center text-green-500 text-2xl font-semibold mb-8">
          Your withdrawal balance is $150,491,562
        </p>
        <p className="text-center text-white mb-12">
          To withdraw fill out the form below
        </p>
        <form className="max-w-lg mx-auto bg-green-900 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="walletAddress">
              Wallet address
            </label>
            <input
              type="text"
              id="walletAddress"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              placeholder="Enter your cryptocurrency address"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="amount">
              Enter amount
            </label>
            <input
              type="number"
              id="amount"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              placeholder="Enter the amount you want to withdraw"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="withdrawMethod">
              Withdrawal method
            </label>
            <select
              id="withdrawMethod"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              required
            >
              <option value="" disabled selected>Select your withdrawal method</option>
              <option value="bank">Bank Transfer</option>
              <option value="crypto">Cryptocurrency</option>
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-md"
            >
              Withdraw
            </button>
          </div>
        </form>
      </div>
  )
}

export default WidthdrawForm
