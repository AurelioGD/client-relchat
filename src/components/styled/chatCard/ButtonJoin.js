import styled from "styled-components"
import { Link } from "react-router-dom"

const ButtonJoin = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2rem;
  margin: 1rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.gray};
`

export default ButtonJoin
