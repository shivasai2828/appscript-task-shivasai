//fetch products from fake store api logic
const url = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return null;
  }
};
