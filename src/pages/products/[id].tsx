import { Product } from "@/app/types/Globaltypes";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, FavoriteButton, ProductDetails } from "./id.styled";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query; // grab the ID from URI
  const [product, setProduct] = useState<Product | null>(null);

  // use that ID to make call to API
  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const correctDescription = (description: string) => {
    const lastChar = description.charAt(description.length - 1);
    // if (lastChar == "."){
    //   return description;
    // }
    // else {
    //   return `${description}.`
    // }

    return lastChar == "." ? description : `${description}.`;
  }

  console.log("product on individual page", product);
  

  return (
    <Container>
      <Image src={product.image} width={400} height={375} alt={product.title} />
      <ProductDetails>
        <h1>{product.title}</h1>
        <p>{correctDescription(product.description)}</p>
        <p>Price: ${product.price}</p>
        <FavoriteButton>Mark as favorite</FavoriteButton>
      </ProductDetails>
    </Container>
  );
};

export default ProductPage;
