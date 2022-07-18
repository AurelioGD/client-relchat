import styled from "styled-components";

const Logo = styled.h1`
  font-family: "Lobster", cursive;
  color: ${(props) => props.theme.primary.white};
  font-size: 2rem;
  font-weight: 100;
`;

export default Logo;
