import Image from "next/image"
import {Description, MainContainer, PriceContainer } from "./ProductCard.styled"

export const ProductCard = ({category, description, image, rating, title, price}) => {

  console.log('image inside product card', image);
  // define props
  // create the layout
  return (
    <MainContainer>
      <p>Image here</p>
      <Image src={image} width={250} height={250}/>
      <p>{category}</p>
      <Description>{description}</Description>
      <PriceContainer>
          <p>Price : $ {price}</p>
          <p>Rating: {rating}</p>
      </PriceContainer>
    </MainContainer>
  )
}