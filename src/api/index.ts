import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import {
  setBalanceLoader,
  setEthBalance,
  setSolaBalance,
} from "../redux/features/user";
import { axiosInstance } from "./axiosInstance";
import { toast } from "sonner";
import { ethers } from "ethers";

interface BlockchainConfig {
  endpoint: string;
  method: string;
}

export const getAccountBalance = async (
  blockChain: string,
  publicKey: string,
  dispatch: any
) => {
  try {
    dispatch(setBalanceLoader(publicKey));

    const apiKey = import.meta.env.VITE_API_KEY;

    const blockchainConfig: Record<string, BlockchainConfig> = {
      solana: {
        endpoint: `https://solana-devnet.g.alchemy.com/v2/${apiKey}`,
        method: "getBalance",
      },
      ethereum: {
        endpoint: `https://eth-sepolia.g.alchemy.com/v2/${apiKey}`,
        method: "eth_getBalance",
      },
    };

    const { endpoint, method } = blockchainConfig[blockChain] || {};
    if (!endpoint || !method) {
      throw new Error("Unsupported blockchain type");
    }

    const Axios = axiosInstance(endpoint);

    const requestData = {
      jsonrpc: "2.0",
      id: "1",
      method,
      //* wallet address of top eth holder
    //   params: ["0x00000000219ab540356cBB839Cbe05303d7705Fa"],
      params: [publicKey],
    };


    const response = await Axios.post(endpoint, requestData);
    dispatch(setBalanceLoader(null));
    if (response.data?.result) {
      const balance =
        blockChain === "ethereum"
        //* eth conversion from wei
          ? ethers.formatEther(response.data.result)
          : response.data.result.value / LAMPORTS_PER_SOL;
      blockChain === "ethereum"
        ? dispatch(setEthBalance({ balance, publicKey }))
        : dispatch(setSolaBalance({ balance, publicKey }));
    } else {
      throw new Error("No balance data received");
    }
  } catch (error: any) {
    toast.error("Something went wrong while fetching balance");
  } finally {
    dispatch(setBalanceLoader(null));
  }
};
