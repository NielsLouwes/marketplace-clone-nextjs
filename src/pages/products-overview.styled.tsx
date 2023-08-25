import { styled } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  gap: 10px;
`

export const ProductLink = styled.a`
  color: black; // Set the color to black
  text-decoration: none; // Remove the underline

  &:hover {
    text-decoration: none; // Optional: Remove the underline on hover as well
  }
`;
