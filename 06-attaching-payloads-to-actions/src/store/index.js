import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import myCartSlice from './mycart-slice';

const store = configureStore({
    reducer: {
        ui: uiSlice,
        cart: myCartSlice,
    },
});

export default store;
