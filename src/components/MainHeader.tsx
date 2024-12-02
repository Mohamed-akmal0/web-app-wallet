
const MainHeader = () => {
  return (
    <section className="flex flex-col items-start justify-start mt-4 ml-4 space-y-4">
      <h1 className="text-white text-4xl font-bold">
        Predator supports multiple blockchains
      </h1>
      <p className="text-gray-400 text-lg">
        Select a blockchain to create your first account.
      </p>
      <div className="flex items-center justify-between w-full">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white text-black rounded-md">
            Solana
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-md">
            Ethereum
          </button>
        </div>
        <p className="text-center mt-3">Show Secret Phrase</p>
      </div>
      <div></div>
    </section>
  );
};

export default MainHeader;
