import usePublicChats from "../../hooks/usePublicChats"
import ChatCard from "../../components/layout/ChatCard"
import FlexContainer from "../../components/styled/FlexContainer"

const PublicChats = () => {
  const { publicChats } = usePublicChats()

  return (
    <FlexContainer width="70%" margin="1rem auto auto auto" flexW="wrap">
      {publicChats.map((chat) => (
        <ChatCard key={chat._id} chatData={chat} />
      ))}
    </FlexContainer>
  )
}

export default PublicChats
