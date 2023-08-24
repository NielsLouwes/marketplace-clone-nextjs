import { useRouter } from "next/router";

const Product = () => {
  // You can use the useRouter hook if you need the product ID in the component
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      {/* <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>Price: ${props.price}</p>
      Add more product details here */}
    </div>
  );
};

export default Product;