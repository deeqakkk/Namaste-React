import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    // name of the slice
    //following is the inital state of the slice
    initialState: {
        items: []
    },
    reducers: {
        // state is the inital state and action is the data coming in
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        removeItem: (state, action) => {
            state.items.pop();
        }
    }
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;