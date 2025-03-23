import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import Airdrop from "../components/adapter/Airdrop";
import "@solana/wallet-adapter-react-ui/styles.css";
import MainHeader from "../components/MainHeader";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";

const WalletAdapter = () => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <>
      <MainHeader isFromHome={false} />
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="bg-black text-white p-4 sm:p-6">
              {/* Wallet Buttons Section */}
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 mb-4">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <WalletMultiButton className="bg-purple-600 text-white px-4 py-2 rounded w-full sm:w-auto" />
                  <WalletDisconnectButton className="bg-gray-600 text-white px-4 py-2 rounded w-full sm:w-auto" />
                </div>
              </div>
              <Airdrop />

              {/* Placeholder for Other Content */}
              {/* <div className="mt-8">
                <p className="text-gray-400">
                  Other content can go here...
                </p>
              </div> */}
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default WalletAdapter;
