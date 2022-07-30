import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  justify-content: ${({ jc }) => jc || "flex-start"};
  align-content: ${({ ac }) => ac || "flex-start"};
  align-items: ${({ ai }) => ai || "flex-start"};
  flex-direction: ${({ flexD }) => flexD || "row"};
  flex-wrap: ${({ flexW }) => flexW || "nowrap"};

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  margin: ${({ margin }) => margin || ""};
  background-color: ${({ bc }) => bc || ""};
  box-shadow: ${({ boxShadow }) => boxShadow || ""};
  font-family: ${({ fontF }) => fontF || ""};
  border: ${({ border }) => border || ""};
  border-radius: ${({ borderRa }) => borderRa || ""};
`

export default FlexContainer
