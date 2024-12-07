import React from "react";

const EthereumComponent = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8 mt-10">
      <h1 className="text-3xl font-bold mb-6">Solana Wallet</h1>

      {/* Add and Clear Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="px-4 py-2 bg-white text-black rounded-md">
          Add Wallet
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-md">
          Clear Wallets
        </button>
      </div>

      {/* Wallet Card */}
      <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Wallet 1</h2>
          <button className="text-red-600 hover:text-red-400">
            {/* Trash icon (optional) */}
            🗑️
          </button>
        </div>

        {/* Public Key */}
        <div className="mb-4">
          <h3 className="text-sm font-bold">Public Key</h3>
          <p className="text-sm">
            55xveFPdWqsZLjcUN6ewmGY3T4fKiBiXy98DiFymakP8
          </p>
        </div>

        {/* Private Key */}
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="text-sm font-bold">Private Key</h3>
            <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
              ••••••••••••••••••••••••••••••••••••••••••••••••••
            </p>
          </div>
          <button className="text-white hover:text-gray-400">
            {/* Eye icon (optional) */}
            👁️
          </button>
        </div>
      </div>
    </div>
  );
};

export default EthereumComponent;
