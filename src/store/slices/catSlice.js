import { createSlice } from "@reduxjs/toolkit";

const getCatFromLocalStorage = () => {
    let getCat = localStorage.getItem("cat");
    return getCat ? JSON.parse(getCat) : [];
}

const initialState = getCatFromLocalStorage();

const catSlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategory(state, action){
            localStorage.setItem("cat", JSON.stringify(action.payload));
            return action.payload;
        },
    }
})

export const { setCategory } = catSlice.actions;
export default catSlice.reducer