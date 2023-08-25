"use client";
import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import { ProductData } from "@/app/types/Globaltypes";
import { useEffect, useState } from "react";
import { ProductLink, StyledContainer } from "./products-overview.styled";
import Link from "next/link";

export default function ProductsOverview() {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(false);

  // move into own hook
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
    <StyledContainer>
      {loading && <p>Loading...</p>}
      {productData?.map((product) => (
        <ProductLink href={`/products/${product.id}`} key={product.id}>
          <ProductCard {...product} />
        </ProductLink>
      ))}
    </StyledContainer>
  );
}
