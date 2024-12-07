import { useAppSelector } from "../../redux/store";
import Wallet from "./Wallet";

const SolanaComponent = () => {
  //redux
  const { solanaAccounts } = useAppSelector((state) => state.user);

  //functions
  const handleDeleteWallet = () => {};

  return (
    <Wallet
      handleDeletePress={handleDeleteWallet}
      walletData={solanaAccounts}
    />
  );
};

export default SolanaComponent;
