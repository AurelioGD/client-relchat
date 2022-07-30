import styled from "styled-components"

const Image = styled.img`
  width: ${({ width }) => width || "10rem"};
  height: ${({ height }) => height || ""};
  object-fit: ${({ objFit }) => objFit || "cover"};
`

export default Image
