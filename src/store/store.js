import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../store/slices/authSlice";
import proSlice from "../store/slices/proSlice";
import catSlice from "../store/slices/catSlice";
import { authApi } from "../apis/authApi";
import { proApi } from "../apis/proApi";
import { catApi } from "../apis/catApi";

const store = configureStore({
    reducer: {
        auth: authSlice,
        product: proSlice,
        category: catSlice,
        [authApi.reducerPath]: authApi.reducer,
        [proApi.reducerPath]: proApi.reducer,
        [catApi.reducerPath]: catApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(authApi.middleware, proApi.middleware, catApi.middleware); 
    },
});

export default store;