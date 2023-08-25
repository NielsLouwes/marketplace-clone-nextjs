import Image from "next/image";
import {
  Description,
  MainContainer,
  PriceContainer,
} from "./ProductCard.styled";
import { Product } from "@/app/types/Globaltypes";

type ProductCardProps = Product;

export const ProductCard = ({
  description,
  image,
  rating,
  title,
  price,
}: ProductCardProps) => {
  return (
    <MainContainer>
      <Image src={image} width={200} height={200} alt={title} />
      <p>{title}</p>
      {/* <Description>{description}</Description> */}
      <PriceContainer>
        <p>Price : $ {price}</p>
        <p>Rating: {rating.rate}</p>
      </PriceContainer>
    </MainContainer>
  );
};
