import { createSlice } from '@reduxjs/toolkit';

const myCartSlice = createSlice({
    name: 'myCary',
    initialState: { item: [], totalQuantity: 0 },
    reducers: {
        addItemToCart(state, action) {
            state.item.push(action.payload);
            state.totalQuantity++;
        },
        removeItemFromCart(state, action) {
            state.item.pop(action.payload);
            state.totalQuantity--;
        },
    },
});

export const myCartActions = myCartSlice.actions;

export default myCartSlice.reducer;
