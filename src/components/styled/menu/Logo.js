import styled from "styled-components"

const Logo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.logoFont};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.7rem;
  font-weight: 100;
`

export default Logo
