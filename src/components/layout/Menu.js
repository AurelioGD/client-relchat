import Anchor from "../styled/Anchor";
import FlexContainer from "../styled/FlexContainer";
import { ItemMenu, ListMenu } from "../styled/ListMenu";
import Logo from "../styled/Logo";

const Menu = () => {
  return (
    <FlexContainer jc="center">
      <FlexContainer>
        <Logo>RelChat</Logo>
      </FlexContainer>
      <ListMenu>
        <ItemMenu>
          <Anchor>Profile</Anchor>
        </ItemMenu>
        <ItemMenu>
          <Anchor>My chats</Anchor>
        </ItemMenu>
        <ItemMenu>
          <Anchor>Public chats</Anchor>
        </ItemMenu>
        <ItemMenu>
          <Anchor>Friends chats</Anchor>
        </ItemMenu>
        <ItemMenu>
          <Anchor>Friends</Anchor>
        </ItemMenu>
      </ListMenu>
    </FlexContainer>
  );
};

export default Menu;
