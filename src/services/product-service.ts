export const createProduct = async (productData: any) => {
    const URL = `${import.meta.env.VITE_API_URL}/api/products`;
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });
        if (!response.ok) {
            throw new Error("Failed to create product");
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
};

export const fetchProducts = async () => {
    const URL = `${import.meta.env.VITE_API_URL}/api/products`;
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const deleteProduct = async (productId: string) => {
    const URL = `${import.meta.env.VITE_API_URL}/api/products/${productId}`;
    try {
        const response = await fetch(URL, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete product");
        }
        return await response.json();
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
};