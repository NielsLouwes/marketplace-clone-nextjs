import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Link from "next/link";

const Styled = styled.div`
  background-color: #ff323c;
  /* padding: 5px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default function NavBar() {
  return (
    <Styled>
      <h1>Marketplace</h1>
      <div>
        <Link href="/favorites">
          <StarBorderOutlinedIcon fontSize="large" />
        </Link>
        <ShoppingCartOutlinedIcon fontSize="large" />
      </div>
    </Styled>
  );
}
