import { useState } from "react";
import { DeleteIcon, EyeClose, EyeOpen } from "../../assets/icons";

const SolanaComponent = () => {
  //state
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  //functions
  const handleDeleteWallet = () => {};

  return (
    <div className="bg-black text-white min-h-screen p-8 mt-10">
      {/* <h1 className="text-3xl font-bold mb-6">Solana Wallet</h1> */}

      {/* Add and Clear Buttons */}
      {/* <div className="flex gap-4 mb-8">
        <button className="px-4 py-2 bg-white text-black rounded-md">
          Add Wallet
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-md">
          Clear Wallets
        </button>
      </div> */}

      {/* Wallet Card */}
      <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Wallet 1</h2>
          <div
            className="text-red-600 hover:text-red-800"
            onClick={handleDeleteWallet}
          >
            <DeleteIcon />
          </div>
        </div>

        {/* Public Key */}
        <div className="mb-4">
          <h3 className="text-sm font-bold">Public Key</h3>
          <p className="text-sm">
            here will show the wallet public key
          </p>
        </div>

        {/* Private Key */}
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="text-sm font-bold">Private Key</h3>
            <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
              {/* //TODO: need to conditionally render the private key according user show private key click*/}
              ••••••••••••••••••••••••••••••••••••••••••••••••••
            </p>
          </div>
          <div
            className="text-white hover:text-gray-400"
            onClick={() => setShowPrivateKey(!showPrivateKey)}
          >
            {showPrivateKey ? <EyeClose /> : <EyeOpen />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolanaComponent;
