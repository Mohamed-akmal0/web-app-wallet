import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Airdrop = () => {
  const wallet: any = useWallet();
  const { connection } = useConnection();
  //state
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    if(!wallet.publicKey){
      setBalance(null);
    }
  }, [wallet.publicKey]);

  //functions
  const fetchBalance = async () => {
    if (!wallet.publicKey) {
      return toast.error("Wallet not connected");
    }
    try {
      const balance = await connection.getBalance(wallet.publicKey);
      setBalance(balance / LAMPORTS_PER_SOL);
      toast.success("Balance fetched successfully!");
    } catch (error) {
      toast.error("Failed to fetch balance");
      setBalance(null);
    }
  };
  const handleButtonClick = async () => {
    if (!wallet.publicKey) {
      return toast.error("Wallet not connected");
    }
    const updatedAmount = Number(amount);
    if (updatedAmount === 0) {
      return toast.error("Amount cannot be 0");
    }
    try {
      //! by doing this solana will use some wallet from sol devent to send the airdrop
      //! we have no control over it
      //! better approach is to user our wallet as a sol provider
      toast.info("Requesting airdrop...");
      const [latestBlockHash, signature] = await Promise.all([
        connection.getLatestBlockhash(),
        connection.requestAirdrop(
          wallet.publicKey,
          updatedAmount * LAMPORTS_PER_SOL
        ),
      ]);
      const result = await connection.confirmTransaction(
        { signature, ...latestBlockHash },
        "confirmed"
      );
      console.log("result", result);
      toast.info("successfully airdropped!");
    } catch (error: any) {
      toast.error(
        "You have either reached your airdrop limit today or faucet has rn dry!"
      );
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="text-lg text-white">
        {!wallet?.publicKey?.toString()
          ? "Please connect your wallet"
          : ` Hi ${wallet?.publicKey?.toString()}, welcome to predator wallet`}
      </h4>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Enter the amount"
          onChange={(e) => setAmount(e.target.value)}
          className="w-[40%] px-4 py-2 bg-transparent border-2 border-purple-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
        />
        <button
          type="submit"
          onClick={() => handleButtonClick()}
          title="Send airdrop"
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200"
        >
          Send Airdrop
        </button>
      </div>
      <div className="flex items-center space-x-4">

      <div className="mt-6 px-4 py-2 border-2 border-purple-600 rounded-md w-[40%]">
        <span className="text-white">Wallet Balance: {balance !== null ? `${balance} SOL` : "null"}</span>
      </div>
      <button
        onClick={fetchBalance}
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200"
      >
        Fetch Balance
      </button>
      </div>
    </div>
  );
};

export default Airdrop;
