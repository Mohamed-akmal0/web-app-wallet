import { createSlice } from "@reduxjs/toolkit";

type accountType = {
  publicKey: string;
  privateKey: string;
  balance: null | string | number;
};

type userState = {
  password: string;
  mnemonics: null | string;
  selectedBlockChain: string;
  solanaAccounts: [] | accountType[];
  ethereumAccounts: [] | accountType[];
  balanceLoader: null | string;
};

const initialState: userState = {
  password: "",
  mnemonics: null,
  selectedBlockChain: "",
  solanaAccounts: [],
  ethereumAccounts: [],
  balanceLoader: null,
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
      const updatedAction = { ...action.payload, balance: null };
      if (state.solanaAccounts === null) {
        state.solanaAccounts = [updatedAction];
      } else {
        //@ts-ignore
        state.solanaAccounts.push(updatedAction);
      }
    },
    setEthereumAccount: (state, action) => {
      const updatedAction = { ...action.payload, balance: null };
      if (state.ethereumAccounts === null) {
        state.ethereumAccounts = [updatedAction];
      } else {
        //@ts-ignore
        state.ethereumAccounts.push(updatedAction);
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
    setEthBalance: (state, action) => {
      state.ethereumAccounts = state.ethereumAccounts.map((account) =>
        account.publicKey === action.payload.publicKey
          ? { ...account, balance: action.payload.balance }
          : account
      );  
    },
    setSolaBalance: (state, action) => {
      state.solanaAccounts = state.solanaAccounts.map((account) =>
        account.publicKey === action.payload.publicKey
          ? { ...account, balance: action.payload.balance }
          : account
      ); 
    },
    setBalanceLoader: (state, action) => {
      state.balanceLoader = action.payload;
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
  deleteEthAccount,
  setSolaBalance,
  setEthBalance,
  setBalanceLoader,
} = userSlice.actions;
export default userSlice.reducer;
