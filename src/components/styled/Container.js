import styled from "styled-components"

const Container = styled.div`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  margin: ${({ margin }) => margin || ""};
  border: ${({ border }) => border || ""};
  border-radius: ${({ borderRa }) => borderRa || ""};
  background-color: ${({ bc }) => bc || ""};
  color: ${({ color }) => color || ""};
  box-shadow: ${({ boxShadow }) => boxShadow || ""};
  font-family: ${({ fontF }) => fontF || ""};
`

export default Container
