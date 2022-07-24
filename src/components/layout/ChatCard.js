import React from "react";
import ButtonJoin from "../styled/chatCard/ButtonJoin";
import Container from "../styled/Container";
import FlexContainer from "../styled/FlexContainer";
import Image from "../styled/Image";
import Subtitle from "../styled/Subtitle";
import Text from "../styled/Text";


const ChatCard = ({ chatData }) => {
  const { _id, name, owner, image, members } = chatData;
    const membersCount = members.length
  return (
    <Container>
      <Container></Container>
      <Subtitle>{name}</Subtitle>
      <Image src={image}/>
      <ButtonJoin>Join</ButtonJoin>
      <FlexContainer>
        <FlexContainer>
            <Image />
            <Text>{owner}</Text>
        </FlexContainer>
        <FlexContainer>
            <Text>{membersCount}</Text>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
};

export default ChatCard;
