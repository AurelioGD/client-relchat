import styled from "styled-components"

const Input = styled.input`
    padding: 0 8px 0 8px;
    font-size: 1.2rem;
    width: ${({width}) => width || ""};
    height: ${({height}) => height || ""};
    border: ${({border}) => border || ""};
    &:focus {
        outline: none;
    }
`

export default Input
