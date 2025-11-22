import { StatsHome } from "../appComponent/StatsHome";
import InventoryTable from "../appComponent/productInventory";
import React from "react";
import { useEffect } from "react";
import { fetchProducts } from "@/services/product-service";


const Home = () => {

    const [products, setProducts] = React.useState([]);
    const getAllProducts = async () => {
        try {
            const response = await fetchProducts();
            setProducts(response);
        } catch (error) {
            console.error("Error fetching products in component:", error);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (

        <div>
            <h1>Welcome Home</h1>
            <StatsHome products={products} />
            <InventoryTable products={products} />
        </div>

    );
}
export default Home;