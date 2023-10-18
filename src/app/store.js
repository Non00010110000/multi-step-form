import { configureStore } from "@reduxjs/toolkit";
import planReducer from "../feautre/planReducer";

export const store = configureStore({
    reducer:{
        plan:planReducer

    }
})
export default store;