import { createSlice } from "@reduxjs/toolkit";

export interface InitialUser {
  products:
    | {
        name: string;
        icon: string;
        price: number;
        rate: number;
        status: string;
      }[]
    | [{}];
}

const initialValue: InitialUser = {
  products: [{}],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialValue,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProducts } = productsSlice.actions;
export const getAllProducts = (state: any): any => state.user;
export default productsSlice.reducer;
