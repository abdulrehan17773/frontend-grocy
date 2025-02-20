import { createSlice } from "@reduxjs/toolkit";

const getProductsFromLocalStorage = () => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
        try {
            return JSON.parse(storedProducts);
        } catch (error) {
            return []; 
        }
    }
    return []; 
};

const initialState = getProductsFromLocalStorage();

const proSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getById(state, action) {
            return state.filter(item => item.id === action.payload);
        },
        getByCat(state, action) {
            return state.filter(item => item.cat_id === action.payload);
        },
        setProducts(state, action) {
            localStorage.setItem("products", JSON.stringify(action.payload)); 
            return action.payload;
        },
    },
});

export const { getById, getByCat, setProducts } = proSlice.actions;
export default proSlice.reducer;