import { createSlice } from "@reduxjs/toolkit";

export interface Inventory {
    product: string;
    SKU: string;
    category: string;
    quantity: number;
    price: number;
    status: string;
    id: string;

}

export interface ProductsState {
    item: Inventory[];
    loading?: boolean;

}

const initialState: ProductsState = {
    item: [],
    loading: false,

}

const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        setInventory(state, action) {
            state.item = action.payload;
            state.loading = false;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },

    }
});

export const { setInventory, setLoading } = inventorySlice.actions;
export default inventorySlice.reducer;