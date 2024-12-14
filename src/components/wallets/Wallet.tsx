import { useState } from "react";
import { DeleteIcon, EyeClose, EyeOpen } from "../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  deleteEthAccount,
  deleteSolanaAccount,
} from "../../redux/features/user";
import { getSelectedAccount } from "../../utils/helperFunction";
import { toast } from "sonner";
import { getAccountBalance } from "../../api";

type WalletComponent = {
  walletData: null | any[];
  handleDeletePress?: () => void;
};

type walletType = {
  publicKey: string;
  privateKey: string;
  balance: null | string;
};

const Wallet = ({ walletData }: WalletComponent) => {
  const dispatch = useAppDispatch();
  //redux
  const { selectedBlockChain, balanceLoader } = useAppSelector(
    (state) => state.user
  );
  //state
  const [visiblePrivateKey, setVisiblePrivateKey] = useState<string | null>(
    null
  );

  //functions

  const renderText = selectedBlockChain === "ethereum" ? "ETH" : "SOL";

  const toggleShowPrivateKey = (publicKey: string) => {
    setVisiblePrivateKey((prev) => (prev === publicKey ? null : publicKey));
  };

  const deleteWallet = (publicKey: string) => {
    const isSolana = getSelectedAccount(selectedBlockChain);
    if (isSolana) {
      dispatch(deleteSolanaAccount(publicKey));
      toast.success("Solana wallet deleted successfully");
    } else {
      dispatch(deleteEthAccount(publicKey));
      toast.success("Ethereum wallet deleted successfully");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-8 overflow-hidden">
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
      {walletData?.length > 0 &&
        walletData?.map((data: walletType, index: number) => {
          const isPrivateKeyVisible = visiblePrivateKey === data.publicKey;
          const isLoading = balanceLoader === data.publicKey;
          return (
            <div
              className="bg-gray-900 rounded-lg p-6 shadow-lg mb-4"
              key={index}
            >
              {/* Header: Wallet Title, Get Balance Button, and Delete Icon */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-white">
                  Wallet {index + 1}
                </h2>

                <div className="flex items-center space-x-4">
                  {/* Balance Button */}
                  <button
                    className="px-2 py-1 bg-yellow-500 text-black font-regular rounded-md hover:bg-yellow-600 transition duration-200"
                    onClick={() =>
                      getAccountBalance(
                        selectedBlockChain,
                        data.publicKey,
                        dispatch
                      )
                    }
                  >
                    Balance
                  </button>
                  {/* Delete Icon */}
                  <div
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                    onClick={() => deleteWallet(data?.publicKey)}
                  >
                    <DeleteIcon />
                  </div>
                </div>
              </div>

              {/* Balance */}
              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-400">Balance</h3>
                <p
                  className={`text-sm ${
                    data.balance === null || isLoading
                      ? "text-yellow-400"
                      : "text-white"
                  }`}
                >
                  {isLoading
                    ? `fetching ...!!!`
                    : data.balance === null
                    ? `fetch your latest ${renderText} balance`
                    : `${data.balance} ${renderText}`}
                </p>
              </div>

              {/* Public Key */}
              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-400">Public Key</h3>
                <p className="text-sm break-all text-white">
                  {data?.publicKey}
                </p>
              </div>

              {/* Private Key */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-gray-400">
                    Private Key
                  </h3>
                  <p className="text-sm break-all text-white">
                    {isPrivateKeyVisible
                      ? data?.privateKey
                      : `•••••••••••••••••••••••••••••••••••••••••••••••`}
                  </p>
                </div>
                {/* Eye Icon */}
                <div
                  className="text-white hover:text-gray-400 cursor-pointer"
                  onClick={() => toggleShowPrivateKey(data.publicKey)}
                >
                  {isPrivateKeyVisible ? <EyeOpen /> : <EyeClose />}
                </div>
              </div>
            </div>
          );
        })}
      {walletData === null ||
        (walletData?.length === 0 && (
          <div className="flex items-center justify-center mt-10 ">
            <p className="text-white text-center text-lg sm:text-xl md:text-2xl">
              Currently you don't have any{" "}
              {selectedBlockChain?.charAt(0)?.toUpperCase() +
                selectedBlockChain?.slice(1)}{" "}
              wallet
            </p>
          </div>
        ))}
    </div>
  );
};

export default Wallet;
