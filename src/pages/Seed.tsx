import { useState } from "react";
import { useAppSelector } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Seed = () => {
  const navigate = useNavigate();
  //redux
  const { mnemonics } = useAppSelector((state) => state.user);
  //state
  const [isChecked, setIsChecked] = useState(false);
  const [errMessage, setErrMessage] = useState<null | string>(null);

  // useEffect(() => {
  //   if (isChecked) {
  //     setErrMessage(null);
  //   }else{
  //     setErrMessage("Please save your phrase and fill the check")
  //   }
  // }, [isChecked]);

  //functions
  const handleContinueButtonClick = () => {
    if (!isChecked) {
      setErrMessage("Please save your phrase and fill the check");
      return;
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-[90%] max-w-md bg-gray-900 text-white p-6 rounded-lg shadow-xl">
        {/* Title */}
        <h2 className="text-xl font-bold text-center">
          Secret Recovery Phrase
        </h2>
        <p className="text-gray-400 text-center mt-2">
          {/* Import an existing wallet with your 12 or 24-word secret recovery phrase. */}
          This phrase is the only way to recover your wallet. Do not share to
          anyone!
        </p>

        {/* Grid of Numbered Boxes */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {mnemonics.split(" ").map((words: string, index: number) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center h-12 bg-gray-800 border border-gray-700 rounded-md"
              >
                {index + 1}. {words}
              </div>
            );
          })}
        </div>

        {/* Footer Text */}
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 text-purple-500 bg-gray-800 border-gray-700 rounded focus:ring-purple-500"
            onClick={() => setIsChecked(!isChecked)}
          />
          <p className="text-gray-400 text-center ml-2 items-center">
            I saved my secret recovery phase
          </p>
        </div>
        {errMessage !== null && (
          <p className="text-red-400 mr-12 text-sm">{errMessage}</p>
        )}

        {/* Button */}
        <button
          className="w-full mt-4 py-3 bg-yellow-600 text-gray-300 rounded-md hover:bg-gray-700"
          onClick={handleContinueButtonClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Seed;
