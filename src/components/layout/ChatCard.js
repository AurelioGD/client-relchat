import React from "react"
import { useTheme } from "styled-components"
import ButtonJoin from "../styled/chatCard/ButtonJoin"
import Container from "../styled/Container"
import FlexContainer from "../styled/FlexContainer"
import Image from "../styled/Image"
import Subtitle from "../styled/Subtitle"
import Text from "../styled/Text"
import user from "../../assets/icons/user.svg"
const ChatCard = ({ chatData }) => {
  const { _id, name, owner, image, members } = chatData
  const membersCount = members.length

  const { colors, fonts } = useTheme()

  return (
    <FlexContainer
      width="15rem"
      height="20rem"
      margin="1rem"
      borderRa="1rem"
      fontF={fonts.primary}
      bc={colors.white}
      boxShadow={"card"}
      flexD="column"
      ai="center"
    >
      <Container
        borderRa="1rem 1rem 0 0"
        height="1rem"
        bc={colors.violet}
      ></Container>
      <Subtitle>{name}</Subtitle>
      <Image src={image} />
      <ButtonJoin to="/chat">Join</ButtonJoin>
      <FlexContainer width="10rem" height="5rem">
        <FlexContainer>
          <Image width="2rem" height="2rem" />
          <Text>{owner}</Text>
        </FlexContainer>
        <FlexContainer>
          <Image src={user} width="2rem" height="2rem" />
          <Text>{membersCount}</Text>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}

export default ChatCard
