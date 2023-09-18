import { styled } from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-top: 25px;
  padding: 25px 100px;
`
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`

export const FavoriteButton = styled.button`
  width: 125px;
  background: white;
  padding: 10px 20px 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  border: 1px solid lightgrey;

  &:hover {
   border: 1px solid black;
  }
`