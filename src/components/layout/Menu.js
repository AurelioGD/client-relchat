import { useTheme } from "styled-components";
import Anchor from "../styled/Anchor";
import FlexContainer from "../styled/FlexContainer";
import { ItemMenu, ListMenu } from "../styled/menu/ListMenu";
import Logo from "../styled/menu/Logo";
import LogoContainer from "../styled/menu/LogoContainer";
import MenuContainer from "../styled/menu/MenuContainer";

const Menu = () => {
  const theme = useTheme();
  const { primary, sizes } = theme;
  return (
    <FlexContainer
      jc="space-between"
      bc={primary.violet}
      height={sizes.headerSize}
    >
      <LogoContainer>
        <Logo>RelChat</Logo>
      </LogoContainer>
      <MenuContainer>
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
      </MenuContainer>
    </FlexContainer>
  );
};

export default Menu;
