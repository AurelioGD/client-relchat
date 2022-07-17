import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  justify-content: ${(props) => (props.jf ? props.js : "flex-start")};
  align-content: ${(props) => (props.ac ? props.ac : "flex-start")};
`;

export default FlexContainer;
