import { useTheme } from "styled-components";
import FlexContainer from "../styled/FlexContainer";
import { ItemMenu, ListMenu } from "../styled/menu/ListMenu";
import Logo from "../styled/menu/Logo";
import LogoContainer from "../styled/menu/LogoContainer";
import MenuContainer from "../styled/menu/MenuContainer";
import routesMenu from "../../consts/routesMenu";
import LinkAnchor from "../styled/menu/LinkAnchor"

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
          {routesMenu.map(({label, route}, index) => (
            <ItemMenu key={`${label}-${index}`}>
              <LinkAnchor to={route}>{label}</LinkAnchor>
            </ItemMenu>
          ))}
        </ListMenu>
      </MenuContainer>
    </FlexContainer>
  );
};

export default Menu;
