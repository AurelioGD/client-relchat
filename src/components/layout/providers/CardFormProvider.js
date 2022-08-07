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
  buttonLabel = "button",
  legendConfig = {},
  containerStyle={},
  onSubmit = () => {},
}) => {
  const { shades, fonts, colors } = useTheme()
  const { legendText = "", legendUrlText = "", legendUrl = "" } = legendConfig

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }
  return (
    <Container
      fontF={fonts.primary}
      color={colors.white}
      width="20rem"
      boxShadow={shades.card}
      {...containerStyle}
    >
      <FlexContainer bc="violet" jc="center" ai="center" height="3.4rem" margin="0 0 0.5rem 0">
        <Subtitle>{title}</Subtitle>
      </FlexContainer>
      <Form onSubmit={handleSubmit}>
        {children}
        <Button
          width="6rem"
          height="2rem"
          margin="1rem 0 1rem 0"
        >{buttonLabel}</Button>
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
