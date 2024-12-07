import { useAppSelector } from "../../redux/store";
import Wallet from "./Wallet";

const SolanaComponent = () => {
  //redux
  const { solanaAccounts } = useAppSelector((state) => state.user);

  return (
    <Wallet
      walletData={solanaAccounts}
    />
  );
};

export default SolanaComponent;
