import ButtonStyled from "../styled/Button"

const Button = ({children, ...restProps}) => {
  return (
    <ButtonStyled {...restProps}>{children}</ButtonStyled>
  )
}

export default Button