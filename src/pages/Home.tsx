
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import SolanaComponent from "../components/wallets/Solana";
import { useAppSelector } from "../redux/store";
import EthereumComponent from "../components/wallets/Ethereum";

const Home = () => {
  const {selectedBlockChain} = useAppSelector((state) => state.user)
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <MainHeader />
        {selectedBlockChain === "solana"? (<SolanaComponent />) : <EthereumComponent />}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
