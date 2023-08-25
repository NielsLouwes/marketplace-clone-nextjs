"use client";
import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import { ProductData } from "@/app/types/Globaltypes";
import { useEffect, useState } from "react";

export default function ProductsOverview() {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonReponse = await response.json();
      setProductData(jsonReponse);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log("productData", productData);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {productData?.map((product) => (
        <ProductCard
        key={product.id}
          {...product}
        />
      ))}
    </div>
  );
}
