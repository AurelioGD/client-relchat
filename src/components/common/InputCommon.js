import { useTheme } from "styled-components"
import FlexContainer from "../styled/FlexContainer"
import Input from "../styled/Input"
import Icon from "./Icon"

const InputCommon= ({ iconName = "" }) => {
  const { fonts } = useTheme()
  return (
    <FlexContainer
      boxShadow="input"
      width="16rem"
      height="3rem"
      fontF={fonts.primary}
    >
      <FlexContainer
        jc="center"
        ai="center"
        width="3.5rem"
        heigth="3rem"
        bc="gray"
      >
        <Icon width="1.5rem" height="1.5rem" iconName={iconName} />
      </FlexContainer>
      <Input
        width="100%"
        height="3rem"
        border="none"
        placeholder="type your username"
      />
    </FlexContainer>
  )
}

export default InputCommon
