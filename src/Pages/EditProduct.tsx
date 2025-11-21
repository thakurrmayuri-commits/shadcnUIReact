import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import useInventory from "../appComponent/useInventory";
const EditProduct = () => {
    //const { inventory } = useInventory();
    const [item, setItem] = useState({
        product: "",
        SKU: "",
        category: "",
        quantity: 0,
        price: 0,
        status: ""

    });
    const { id } = useParams();

    const fetchProduct = async () => {
        const res = await fetch(`http://localhost:8000/inventory/${id}`);
        const data = await res.json();
        setItem(data)
    }
    useEffect(() => {
        fetchProduct();
    }, [])

    return (

        <div>
            <h1>Product Details</h1>
            <p>
                {item.product}
            </p>
            <p>{item.SKU}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p>{item.status}</p>

        </div>

    );
}
export default EditProduct;