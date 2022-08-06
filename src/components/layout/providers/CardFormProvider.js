import { useTheme } from "styled-components"
import Container from "../../styled/Container"
import FlexContainer from "../../styled/FlexContainer"
import Subtitle from "../../styled/Subtitle"
import Form from "../../styled/Form"
import Button from "../../styled/Button"
import Anchor from "../../styled/menu/LinkAnchor"
import Text from "../../styled/Text"

const CardFormProvider = ({
  children,
  title = "title",
  buttonLabel = "label",
  legendConfig = {},
  onSubmit = () => {},
}) => {
  const { shades, fonts, colors } = useTheme()
  const { legendText = "", legendUrlText = "", legendUrl = "" } = legendConfig

  const handleSubmit = (e) => {
    e.PreventDefault()
    onSubmit()
  }
  return (
    <Container
      fontF={fonts.primary}
      color={colors.white}
      width="20rem"
      height="30rem"
      boxShadow={shades.card}
    >
      <FlexContainer bc="violet" jc="center" ai="center" height="4rem">
        <Subtitle>{title}</Subtitle>
      </FlexContainer>
      <Form onSubmit={handleSubmit}>
        {children}
        <Button>{buttonLabel}</Button>
      </Form>
      <FlexContainer jc="center" ai="center" height="2rem" color={colors.gray}>
        {legendConfig && (
          <>
            <Text>{legendText}</Text>
            <Anchor margin="0 0 0 0.2rem" color={colors.violet} to={legendUrl}>{legendUrlText}</Anchor>
          </>
        )}
      </FlexContainer>
    </Container>
  )
}

export default CardFormProvider
