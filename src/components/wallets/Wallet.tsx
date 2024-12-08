import { useState } from "react";
import { DeleteIcon, EyeClose, EyeOpen } from "../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  deleteEthAccount,
  deleteSolanaAccount,
} from "../../redux/features/user";
import { getSelectedAccount } from "../../utils/helperFunction";
import { toast } from "sonner";

type WalletComponent = {
  walletData: null | any[];
  handleDeletePress?: () => void;
};

const Wallet = ({ walletData }: WalletComponent) => {
  const dispatch = useAppDispatch();
  //redux
  const { selectedBlockChain } = useAppSelector((state) => state.user);
  //state
  const [visiblePrivateKey, setVisiblePrivateKey] = useState<string | null>(
    null
  );

  //functions

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
        walletData?.map(
          (data: { publicKey: string; privateKey: string }, index: number) => {
            const isPrivateKeyVisible = visiblePrivateKey === data.publicKey;
            return (
              <div
                className="bg-gray-900 rounded-lg p-6 shadow-lg mb-4"
                key={index}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Wallet {index + 1}</h2>
                  <div
                    className="text-red-600 hover:text-red-800"
                    onClick={() => deleteWallet(data?.publicKey)}
                  >
                    <DeleteIcon />
                  </div>
                </div>

                {/* Public Key */}
                <div className="mb-4">
                  <h3 className="text-sm font-bold">Public Key</h3>
                  <p className="text-sm  break-all ">{data?.publicKey}</p>
                </div>

                {/* Private Key */}
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-sm font-bold">Private Key</h3>
                    <p className="text-sm  break-all">
                      {isPrivateKeyVisible
                        ? data?.privateKey
                        : `•••••••••••••••••••••••••••••••••••••••••••••••`}
                    </p>
                  </div>
                  <div
                    className="text-white hover:text-gray-400"
                    onClick={() => toggleShowPrivateKey(data.publicKey)}
                  >
                    {isPrivateKeyVisible ? <EyeOpen /> : <EyeClose />}
                  </div>
                </div>
              </div>
            );
          }
        )}
      {walletData === null || walletData?.length === 0&& (
        <div className="flex items-center justify-center mt-10 ">
          <p className="text-white text-center text-lg sm:text-xl md:text-2xl">
            Currently you don't have any{" "}
            {selectedBlockChain?.charAt(0)?.toUpperCase() +
              selectedBlockChain?.slice(1)}{" "}
            wallet
          </p>
        </div>
      )}
    </div>
  );
};

export default Wallet;
