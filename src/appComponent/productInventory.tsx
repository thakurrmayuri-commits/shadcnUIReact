import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Pencil, Trash2 } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

import { setLoading } from "../reducers/inventoryReducer"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Plus } from 'lucide-react';
import useInventory from "./useInventory";



export function TableDemo() {


    const url = "http://localhost:8000/inventory";
    const navigate = useNavigate();

    const { inventory } = useInventory(url);




    const handleDeleteItem = (id: string) => {
        console.log("item: ", id);
        setLoading(true);
        try {
            fetch(url + "/" + id, {
                method: "DELETE",
            }).then(() => {

                navigate(`/`);
            })
        } catch (err) { console.error(err) };

    };




    return (
        <section><div className="flex justify-end">

            <Tooltip>
                <TooltipTrigger asChild>
                    <a href="/createproduct">
                        <button className="w-45 px-4 rounded bg-black text-white m-6 flex flex-row gap-4 cursor-pointer"><span><Plus color="white" /></span><span>Add Product</span></button>
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add item to Inventory</p>
                </TooltipContent>
            </Tooltip>
        </div>
            <div >
                <Table className="bg-white rounded-xl">
                    <TableCaption>A list of your added items.</TableCaption>
                    <TableHeader className="bg-gray-150 m-2 text-md">
                        {/* {inventory.product.length} */}
                        <TableRow>
                            <TableHead className="w-[100px] font-extrabold">Select</TableHead>
                            <TableHead className="w-[100px] font-extrabold">Inventory</TableHead>
                            <TableHead className="font-extrabold">SKU</TableHead>
                            <TableHead className="font-extrabold">Category</TableHead>
                            <TableHead className="text-right font-extrabold">Amount</TableHead>
                            <TableHead className="text-right font-extrabold">Quntity</TableHead>
                            <TableHead className="text-right font-extrabold">Status</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {inventory.map((item: any) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium"><Checkbox id={"product"} /></TableCell>
                                <TableCell className="font-medium">{item.product}</TableCell>
                                <TableCell>{item.SKU}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell className="text-right">{item.price}</TableCell>
                                <TableCell className="text-right">{item.quantity}</TableCell>
                                <TableCell className="text-right">{item.status}</TableCell>
                                <TableCell className="flex flex-row justify-end">

                                    <Link
                                        to={`/product/${item.id}`}
                                        style={{ color: "inherit" }}
                                    >
                                        <Pencil
                                            style={{ cursor: "pointer", marginRight: 8, blockSize: 20 }}
                                        />
                                    </Link>
                                    <button onClick={() => handleDeleteItem(item.id)}><Trash2 style={{ cursor: "pointer", color: "red", blockSize: 20 }} /></button>

                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </div>
        </section>
    )
}