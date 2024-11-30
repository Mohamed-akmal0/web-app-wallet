import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setUserPassword } = userSlice.actions;
export default userSlice.reducer;
