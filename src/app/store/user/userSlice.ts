import { createSlice } from "@reduxjs/toolkit";

export interface InitialUser {
  user: any;
}

const initialValue: InitialUser = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const getUserFn = (state: any): any => state.user;
export default userSlice.reducer;
