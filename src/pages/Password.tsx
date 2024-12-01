import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { setMnemonics, setUserPassword } from "../redux/features/user";
import { generateMnemonic } from "bip39";

const Password = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //redux
  const { mnemonics } = useAppSelector((state) => state.user);
  //state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //function
  const HandleButtonClick = () => {
    if (password.trim().length < 4) {
      alert("please enter proper password");
      return;
    } else if (password.trim().length !== confirmPassword.trim().length) {
      alert("Password does not match");
      return;
    }
    dispatch(setUserPassword(password));
    if (mnemonics === null) {
      const mnemonic = generateMnemonic();
      dispatch(setMnemonics(mnemonic));
    }
    navigate("/seed");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[100%] max-w-md bg-gray-900 text-white p-6 rounded-lg shadow-xl">
        {/* Back Arrow and Dots */}
        <div className="flex justify-between items-center mb-6 ">
          <button
            className="text-yellow-400 hover:text-yellow-600"
            onClick={() => navigate("/")}
          >
            &larr;
          </button>
          {/* <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
          </div> */}
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-xl font-bold text-center">Create a password</h2>
        <p className="text-gray-400 text-center mt-2">
          You will use this to unlock your wallet.
        </p>

        {/* Input Fields */}
        <div className="mt-6 space-y-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Checkbox */}
        {/* <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 text-purple-500 bg-gray-800 border-gray-700 rounded focus:ring-purple-500"
          />
          <label
            htmlFor="terms"
            className="ml-2 text-gray-400 text-sm flex items-center"
          >
            I agree to the{" "}
            <a href="#" className="text-purple-500 hover:underline ml-1">
              Terms of Service
            </a>
          </label>
        </div> */}

        {/* Button */}
        <button
          className="w-full mt-6 py-3 bg-yellow-500 text-gray-300 rounded-md hover:bg-yellow-600"
          onClick={HandleButtonClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Password;
