"use client";
import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import { useEffect, useState } from "react";

// https://fakestoreapi.com/products

type ProductData = {
  products: Product[];
};

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: string; count: number };
  title: string;
};

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
      {productData?.map((product) => (
        <ProductCard
        key={product.id}
          category={product.category}
          description={product.description}
          image={product.image}
          rating={product.rating.rate}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
