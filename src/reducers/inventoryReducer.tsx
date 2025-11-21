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
    // query?: string;
    // selectedProduct?: Product | null;
}

const initialState: ProductsState = {
    item: [],
    loading: false,
    // query: "",
    // selectedProduct: null,
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
        // setQuery(state, action) {
        //     state.query = action.payload;
        // },
        // setSelectedProduct(state, action) {
        //     state.selectedProduct = action.payload;
        // }
    }
});
//export const { setProducts, setLoading, setQuery, setSelectedProduct } = productSlice.actions;
export const { setInventory, setLoading } = inventorySlice.actions;
export default inventorySlice.reducer;