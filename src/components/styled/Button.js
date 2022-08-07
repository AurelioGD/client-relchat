import styled from "styled-components"

const Button = styled.button`
    width: ${({ width }) => width || ""};
    height: ${({ height }) => height || ""};
    margin: ${({ margin }) => margin || ""};
    border: ${({ border }) => border || "none"};
    background-color: ${({ bc, theme }) => bc || theme.colors.violet};
    color: ${({ color, theme }) => color || theme.colors.white};
    &:hover{
        cursor: pointer;
    }
`

export default Button
