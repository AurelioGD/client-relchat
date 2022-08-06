import { useTheme } from "styled-components"
import FlexContainer from "../styled/FlexContainer"
import Logo from "../styled/menu/Logo"
import LogoContainer from "../styled/menu/LogoContainer"

const BasicMenu = () => {
  const theme = useTheme()
  const { colors, sizes } = theme

  return (
    <FlexContainer
      jc="center"
      ai="center"
      bc={colors.violet}
      height={sizes.headerSize}
    >
      <LogoContainer>
        <Logo>RelChat</Logo>
      </LogoContainer>
    </FlexContainer>
  )
}

export default BasicMenu