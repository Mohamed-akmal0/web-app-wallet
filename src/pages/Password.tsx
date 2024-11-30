import React, { useState } from "react";

const Password = () => {
  //state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //function
  const HandleButtonClick = () => {};

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background images */}

      {/* Centered Box */}
      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl p-12 h-[400px]">
        <form className="h-full flex flex-col justify-center space-y-6">
          <div>
            <input
              type="text"
              id="input1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8C52FF] focus:border-[#8C52FF]"
              placeholder="Enter Password"
            />
          </div>

          <div>
            <input
              type="text"
              id="input2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8C52FF] focus:border-[#8C52FF]"
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8C52FF] text-white py-3 rounded-md hover:bg-[#7241d9] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] focus:ring-offset-2"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Password;
