import { createSlice } from "@reduxjs/toolkit";

type userState =  {
  password: string,
  mnemonics: null | string,
}

const initialState: userState = {
  password: "",
  mnemonics: null,
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
  },
});

export const { setUserPassword, setMnemonics } = userSlice.actions;
export default userSlice.reducer;
