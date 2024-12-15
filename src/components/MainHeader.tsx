import { mnemonicToSeedSync } from "bip39";
import {
  setEthereumAccount,
  setSelectedBlockChain,
  setSolanaAccount,
} from "../redux/features/user";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getDerivedPath } from "../utils/helperFunction";
import { HDNodeWallet, encodeBase58, ethers } from "ethers";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";
import { toast } from "sonner";

const MainHeader = () => {
  const dispatch = useAppDispatch();
  //redux
  const { selectedBlockChain, mnemonics, solanaAccounts, ethereumAccounts } = useAppSelector(
    (state) => state.user
  );

  //function
  //@ts-ignore
  const handleBockChainSelection = (selectedBlockChain: string) => {
    dispatch(setSelectedBlockChain(selectedBlockChain));
  };

  const handleGenerateWalletBtnClick = async () => {
    if(selectedBlockChain === ""){
      toast.info("Please select any block chain to start");
      return
    }
    try {
      //@ts-ignore
      const seed: any = mnemonicToSeedSync(mnemonics);
      if (selectedBlockChain === "solana") {
        const derivationPath: any = getDerivedPath(
          selectedBlockChain,
          solanaAccounts?.length + 1
        );
        const derivedSeed = derivePath(derivationPath, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keyPair = Keypair.fromSecretKey(secret);
        //* secret key or private key is unint8 array 64 bit
        //* public key is unint8 array 32 bit
        const publicKey = keyPair.publicKey.toBase58();
        const privateKey = encodeBase58(keyPair.secretKey);
        dispatch(setSolanaAccount({ publicKey, privateKey }));
        toast.success("Created your solana wallet")
      } else {
        const hdNode = HDNodeWallet.fromSeed(seed);
        const derivationPath: any = getDerivedPath(
          selectedBlockChain,
          ethereumAccounts?.length + 1
        );
        const child = hdNode.derivePath(derivationPath);
        const ethPrivateKey = child.privateKey;
        //* from this public key is not the actual key , address is the public key for eth
        const wallet = new ethers.Wallet(ethPrivateKey);
        const privateKey = wallet.privateKey;
        const publicKey = wallet.address;
        dispatch(setEthereumAccount({ publicKey, privateKey }));
        toast.success("Created your ethereum wallet")
      }
    } catch (error: any) {
      toast.error("Something went wrong! While creating your account")
    }
  };

  return (
    <section className="flex flex-col items-start justify-start mt-4 ml-4 space-y-4">
      <h1 className="text-white text-4xl font-bold">
        Predator supports multiple blockchains
      </h1>
      <p className="text-gray-400 text-lg">
        {selectedBlockChain === "solana"
          ? "Solana blockchain is selected"
          : selectedBlockChain === "ethereum"
          ? "Ethereum blockchain is selected"
          : selectedBlockChain === null &&
            "Select a blockchain to create your first account."}
      </p>

      <div className="flex items-center justify-between w-full">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-md bg-white text-black ${
              selectedBlockChain === "solana" ? "border-gold" : "transparent"
            }`}
            style={{
              boxSizing: "border-box",
            }}
            onClick={() => handleBockChainSelection("solana")}
          >
            Solana
          </button>
          <button
            className={`px-4 py-2 rounded-md bg-white text-black ${
              selectedBlockChain === "ethereum" ? " border-gold" : "transparent"
            }`}
            style={{
              boxSizing: "border-box",
            }}
            onClick={() => handleBockChainSelection("ethereum")}
          >
            Ethereum
          </button>
        </div>
        {/* <p className="text-center mt-3">Show Secret Phrase</p>
        <p className="text-center mt-3">Change Block chain</p> */}
        <button
          className="px-4 py-2 bg-white text-black rounded-md hover:bg-yellow-600 hover:text-white transition duration-200"
          onClick={handleGenerateWalletBtnClick}
        >
          Generate Wallet
        </button>
      </div>
    </section>
  );
};

export default MainHeader;
