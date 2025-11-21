import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./inventoryReducer";


export const store = configureStore({
    reducer: {
        inventory: inventoryReducer,
        // Add your reducers here
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;