import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import { goodsApi } from '../services/goodsApi';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        [goodsApi.reducerPath]: goodsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(goodsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
