import { setSelectedBlockChain } from "../redux/features/user";
import { useAppDispatch, useAppSelector } from "../redux/store";

const MainHeader = () => {
  const dispatch = useAppDispatch();
  //redux
  const { selectedBlockChain } = useAppSelector((state) => state.user);
  //function
  const handleBockChainSelection = (selectedBlockChain: string) => {
    dispatch(setSelectedBlockChain(selectedBlockChain));
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
            className="px-4 py-2 bg-white text-black rounded-md"
            onClick={() => handleBockChainSelection("solana")}
          >
            Solana
          </button>
          <button
            className="px-4 py-2 bg-white text-black rounded-md"
            onClick={() => handleBockChainSelection("ethereum")}
          >
            Ethereum
          </button>
        </div>
        {/* <p className="text-center mt-3">Show Secret Phrase</p>
        <p className="text-center mt-3">Change Block chain</p> */}
      </div>
    </section>
  );
};

export default MainHeader;
