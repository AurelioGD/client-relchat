import Container from "../../components/styled/Container"
import usePublicChats from "../../hooks/usePublicChats"
import ChatCard from "../../components/layout/ChatCard"

const PublicChats = () => {
  const {publicChats} = usePublicChats()  
  return (
    <Container>
        {
          publicChats.map((chat) => <ChatCard key={chat._id} chatData={chat}/>)
        }
    </Container>
  )
}

export default PublicChats