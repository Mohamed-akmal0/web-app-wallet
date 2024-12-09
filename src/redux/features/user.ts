import { createSlice } from "@reduxjs/toolkit";

type accountType = {
  publicKey : string;
  privateKey :string ; 
}

type userState = {
  password: string;
  mnemonics: null | string;
  selectedBlockChain: string;
  solanaAccounts: [] | accountType[]; //need to define the array type later
  ethereumAccounts: [] | accountType[];
};

const initialState: userState = {
  password: "",
  mnemonics: null,
  selectedBlockChain: "",
  solanaAccounts: [],
  ethereumAccounts: [],
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
    setSolanaAccount: (state, action) => {
      if (state.solanaAccounts === null) {
        state.solanaAccounts = [action.payload];
      } else {
        state.solanaAccounts.push(action.payload);
      }
    },
    setEthereumAccount: (state, action) => {
      if (state.ethereumAccounts === null) {
        state.ethereumAccounts = [action.payload];
      } else {
        state.ethereumAccounts.push(action.payload);
      }
    },
    deleteSolanaAccount: (state, action) => {
      // Filtering the wallet by public key
      state.solanaAccounts = state.solanaAccounts?.filter(
        (account) => account?.publicKey !== action.payload
      );
    },
    deleteEthAccount: (state, action) => {
      // Filtering the wallet by public key
      state.ethereumAccounts = state.ethereumAccounts?.filter(
        (account) => account?.publicKey !== action.payload
      );
    },
    resetUserState: () => initialState,
  },
});

export const {
  setUserPassword,
  setMnemonics,
  setSelectedBlockChain,
  setSolanaAccount,
  setEthereumAccount,
  deleteSolanaAccount,
  deleteEthAccount
} = userSlice.actions;
export default userSlice.reducer;
