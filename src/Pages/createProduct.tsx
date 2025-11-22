

import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import React from "react";
import { useNavigate } from "react-router-dom";



function CreateProduct() {
    const [isPending, setIsPending] = React.useState(false);
    const navigate = useNavigate();
    const [productName, setProductName] = React.useState("");
    const [sku, setSku] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [quantity, setQuantity] = React.useState(0);
    const [price, setPrice] = React.useState(0);
    const [stock, setStock] = React.useState("IN_STOCK");



    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const inventory = {
            product: productName,
            SKU: sku,
            category: category,
            quantity: quantity,
            price: price,
            status: stock,
        };
        setIsPending(true);
        fetch(`http://localhost:8000/inventory`, {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(inventory),
        }).then(() => {

            setIsPending(false);
            navigate(`/`)
        })
    }

    return (
        <div className=" px-4 py-4 w-full max-w-md space-y-6 bg-white m-8">
            <FieldSet>
                <FieldLegend>Product Information</FieldLegend>
                <FieldDescription>
                    Enter Product Details Below..
                </FieldDescription>
                <FieldGroup>
                    {isPending && <div>Fetching..</div>}
                    <Field>
                        <FieldLabel htmlFor="productName">Product</FieldLabel>
                        <Input id="productName" type="text" required placeholder="product.."
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)} />

                    </Field>
                    <Field>
                        <FieldLabel htmlFor="sku">SKU</FieldLabel>
                        <Input id="sku" type="text" required placeholder="SKU000.."
                            value={sku}
                            onChange={(e) => setSku(e.target.value)} />
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel htmlFor="food">Category</FieldLabel>
                            <Input id="food" type="text" placeholder="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)} />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="price">Price</FieldLabel>
                            <Input id="price" type="text" placeholder="00.00"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))} />

                        </Field>
                        <Field>
                            <FieldLabel htmlFor="quantity">Quantity</FieldLabel>
                            <Input id="quantity" type="text" placeholder="000"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))} />
                        </Field>
                        <Field>
                            <FieldLabel>Status</FieldLabel>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="choose availability" />
                                </SelectTrigger>
                                <SelectContent onSelect={() => setStock}>
                                    <SelectItem value="in-stock">In Stock</SelectItem>
                                    <SelectItem value="low">Low in stock</SelectItem>
                                    <SelectItem value="unavailable">Unavailable</SelectItem>
                                    <SelectItem value="coming">Comming Soon</SelectItem>
                                    <SelectItem value="sold">Sold Out</SelectItem>
                                </SelectContent>
                            </Select>
                            <FieldDescription>
                                Choose availability.
                            </FieldDescription>
                        </Field>
                        <button className="bg-black text-white px-2 py-2 rounded" onClick={handleSubmit}>
                            Add
                        </button>
                    </div>
                </FieldGroup>
            </FieldSet>
        </div>
    )
}
export default CreateProduct;
