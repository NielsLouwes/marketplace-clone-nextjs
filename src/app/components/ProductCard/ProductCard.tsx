import Image from "next/image";
import {
  Description,
  MainContainer,
  PriceContainer,
  Text,
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
      <Text>{title}</Text>
      {/* <Description>{description}</Description> */}
      <PriceContainer>
        <Text>Price : $ {price}</Text>
        <Text>Rating: {rating.rate}</Text>
      </PriceContainer>
    </MainContainer>
  );
};
