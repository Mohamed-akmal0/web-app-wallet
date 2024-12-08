import { useAppSelector } from "../../redux/store";
import Wallet from "./Wallet";

const EthereumComponent = () => {
  //redux
  const { ethereumAccounts } = useAppSelector((state) => state.user);
  console.log("eht accoutn",ethereumAccounts)
  return (
    <Wallet
      walletData={ethereumAccounts}
    />
  );
};

export default EthereumComponent;
