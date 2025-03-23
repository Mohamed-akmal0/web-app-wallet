import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleButtonClick = (isTrue: boolean) => {
    if (isTrue) {
      navigate("/password");
    } else {
      navigate("/importWallet")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black text-white rounded-lg shadow-lg p-8 w-[50%] h-[450px] flex flex-col justify-between bg-gray-900">
        <div className="flex flex-col items-center">
          {/* Title */}
          <h1 className="text-2xl font-semibold mb-4">Predator Wallet</h1>
          {/* Subtitle */}
          <p className="text-gray-400 text-m text-center">
            To begin, create a new wallet or import an existing one or import your wallet.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded"
            onClick={() => handleButtonClick(true)}
          >
            Create a new wallet
          </button>
          <button
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 rounded"
            onClick={() => handleButtonClick(false)}
          >
            Import your wallet 
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
