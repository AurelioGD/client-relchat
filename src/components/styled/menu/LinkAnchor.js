import styled from "styled-components"
import { Link } from "react-router-dom"

const Anchor = styled(Link)`
  margin: ${({ margin }) => margin || ""};
  color: ${({ color }) => color || "#ffffff"};
  text-decoration: none;
`

export default Anchor
