import { useAppSelector } from "../../redux/store";
import Wallet from "./Wallet";

const EthereumComponent = () => {
  //redux
  const { ethereumAccounts } = useAppSelector((state) => state.user);

  return (
    <Wallet
    //@ts-ignore
      walletData={ethereumAccounts}
    />
  );
};

export default EthereumComponent;
