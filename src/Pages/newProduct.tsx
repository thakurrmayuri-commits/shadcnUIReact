import { createProduct } from "@/services/product-service";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldContent,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { DollarSignIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
const productSchema = z.object({
    name: z.string("Product name is required"),
    sku: z.string("SKU is required"),
    category: z.string("Category is required"),
    quantity: z.number().min(0, "Quantity must be at least 0"),
    price: z.number("Price is required").min(0, "Price must be at least 0"),
    status: z.enum(
        ["IN_STOCK", "LOW_STOCK", "OUT_OF_STOCK", "DISCONTINUED", "UNAVAILABLE"],
        "Status is required"
    ),
});

const STATUS_OPTIONS = [
    { label: "In Stock", value: "IN_STOCK" },
    { label: "Low Stock", value: "LOW_STOCK" },
    { label: "Out of Stock", value: "OUT_OF_STOCK" },
    { label: "Discontinued", value: "DISCONTINUED" },
    { label: "Unavailable", value: "UNAVAILABLE" },
];

const NewProductPage = () => {
    const form = useForm<z.infer<typeof productSchema>>({
        resolver: zodResolver(productSchema),
        defaultValues: {},
    });
    const navigate = useNavigate();

    const onCancel = () => {
        form.reset();
    };

    const onSubmitHandler = async (data: z.infer<typeof productSchema>) => {
        console.log("Form Data:", data);

        try {
            const response = await createProduct(data);
            console.log("Product created successfully:", response);
            form.reset();
            navigate("/");
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    return (
        <>
            <form
                className="space-y-4"
                id="product-form"
                onSubmit={form.handleSubmit(onSubmitHandler)}
            >
                <div className="w-full flex justify-center my-4">
                    <Card className="w-full max-w-xl">
                        <CardHeader>
                            <CardTitle>Add a new Product</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field className="gap-1" data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="product">Product</FieldLabel>
                                        <Input
                                            id="product"
                                            placeholder="Enter a Product Name"
                                            {...field}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="sku"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field className="gap-1" data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="sku">SKU</FieldLabel>
                                        <Input id="sku" placeholder="Enter a SKU" {...field} />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="category"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field className="gap-1" data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="category">Category</FieldLabel>
                                        <Input
                                            id="category"
                                            placeholder="Enter a Category"
                                            {...field}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="quantity"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field className="gap-1" data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="quantity">Quantity</FieldLabel>
                                        <Input
                                            type="number"
                                            id="quantity"
                                            placeholder="Enter a Quantity"
                                            {...field}
                                            onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="price"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field className="gap-1" data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="price">Price</FieldLabel>
                                        <InputGroup>
                                            <InputGroupInput
                                                id="price"
                                                placeholder="Enter a Price"
                                                type="number"
                                                {...field}
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                            />
                                            <InputGroupAddon>
                                                <DollarSignIcon />
                                            </InputGroupAddon>
                                        </InputGroup>

                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="status"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field
                                        className="gap-1"
                                        orientation="responsive"
                                        data-invalid={fieldState.invalid}
                                    >
                                        <FieldContent>
                                            <FieldLabel htmlFor="status">Status</FieldLabel>
                                            <Select
                                                name={field.name}
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger
                                                    id="status"
                                                    aria-invalid={fieldState.invalid}
                                                    className="w-full"
                                                >
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent position="item-aligned">
                                                    <SelectSeparator />
                                                    {STATUS_OPTIONS.map((status) => (
                                                        <SelectItem key={status.value} value={status.value}>
                                                            {status.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </FieldContent>
                                    </Field>
                                )}
                            />
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                            <Button
                                variant="secondary"
                                className="cursor-pointer"
                                onClick={onCancel}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" className="cursor-pointer">
                                Add Product
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </form>
        </>
    );
};

export default NewProductPage;