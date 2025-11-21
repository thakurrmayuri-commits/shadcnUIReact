import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../reducers/hook"
import { setInventory, setLoading } from "../reducers/inventoryReducer";

// interface inventoryProp {
//     product: string;
//     SKU: string;
//     category: string;
//     quantity: number;
//     price: number;
//     status: string;

// }

const useInventory = (url: string) => {

    const dispatch = useAppDispatch();
    const inventory = useAppSelector((state) => state.inventory.item)
    const loading = useAppSelector((state) => state.inventory.loading);
    //const [inventory, setInventory] = useState<inventoryProp>({
    //     product: "",
    //     SKU: "",
    //     category: "",
    //     quantity: 0,
    //     price: 0,
    //     status: ""
    // }); `http://localhost:8000/inventory`

    const fetchData = async () => {
        dispatch(setLoading(true));
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch(setInventory(data))
            //setInventory(data);
            dispatch(setLoading(false));
        } catch (error) {
            console.error('Failed to fetch inventory:', error);
        }
    }
    useEffect(() => {
        if (inventory.length === 0) { fetchData(); }

        console.log("fetched products..", inventory.length);
    }, [inventory.length, fetch])

    return { inventory, loading }

}
export default useInventory;