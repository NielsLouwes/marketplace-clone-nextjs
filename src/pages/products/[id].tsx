import { Product } from "@/app/types/Globaltypes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
  // You can use the useRouter hook if you need the product ID in the component
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  console.log("id", id);

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

  console.log("product on individual page", product);

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      Add more product details here
    </div>
  );
};

export default ProductPage;
