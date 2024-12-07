import { useAppSelector } from "../../redux/store";
import Wallet from "./Wallet";

const EthereumComponent = () => {
  //redux
  const { ethereumAccounts } = useAppSelector((state) => state.user);
  //functions
  const handleDeleteWallet = () => {};
  return (
    <Wallet
      walletData={ethereumAccounts}
      handleDeletePress={handleDeleteWallet}
    />
  );
};

export default EthereumComponent;
