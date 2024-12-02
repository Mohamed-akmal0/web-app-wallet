
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <MainHeader />
        {/* //TODO: here need to conditionally render the solana and ethereum components */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
