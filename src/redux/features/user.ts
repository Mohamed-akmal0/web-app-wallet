import { createSlice } from "@reduxjs/toolkit";

type userState = {
  password: string;
  mnemonics: null | string;
  selectedBlockChain: null | string;
};

const initialState: userState = {
  password: "",
  mnemonics: null,
  selectedBlockChain: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserPassword: (state, action) => {
      state.password = action.payload;
    },
    setMnemonics: (state, action) => {
      state.mnemonics = action.payload;
    },
    setSelectedBlockChain: (state, action) => {
      state.selectedBlockChain = action.payload;
    },
  },
});

export const { setUserPassword, setMnemonics, setSelectedBlockChain } =
  userSlice.actions;
export default userSlice.reducer;
