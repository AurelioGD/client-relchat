import { useTheme } from "styled-components"
import Container from "../../components/styled/Container"
import Subtitle from "../../components/styled/Subtitle"
import Text from "../../components/styled/Text"

const Notification = () => {
  const { fonts } = useTheme()

  return (
    <Container fontF={fonts.primary} width="30rem" margin="8rem auto auto auto">
      <Subtitle>Hola!</Subtitle>
      <Text>
        Te hemos enviado un correo de confirmacion, da click en el enlace para
        activar tu cuenta.
      </Text>
    </Container>
  )
}

export default Notification
