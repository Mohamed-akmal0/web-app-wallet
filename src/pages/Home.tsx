import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import SolanaComponent from "../components/wallets/Solana";
import { useAppSelector } from "../redux/store";
import EthereumComponent from "../components/wallets/Ethereum";
import Modal from "../components/ModalComponen";
import { useState } from "react";
import Seed from "./Seed";

const Home = () => {
  //redux
  const { selectedBlockChain } = useAppSelector((state) => state.user);
  //state
  const [openModal, setIsModalOpen] = useState(false);
  //functions
  //handling modal close
  const handleModalClose = () => {
    setIsModalOpen(!setIsModalOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setOpenModal={setIsModalOpen} openModal={openModal} />
      <main className="flex-grow">
        <MainHeader />
        {selectedBlockChain === "solana" ? (
          <SolanaComponent />
        ) : (
          <EthereumComponent />
        )}
        <Modal
          isOpen={openModal}
          onClose={handleModalClose}
          children={<Seed isForModal={true} />}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
