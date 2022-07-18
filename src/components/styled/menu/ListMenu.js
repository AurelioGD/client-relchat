import styled from "styled-components";

const ListMenu = styled.ul`
  color: ${({ theme }) => theme.primary.white};
  margin: 0;
  height: ${({ theme }) => theme.sizes.headerSize};
  max-width: 40rem;
  min-width: 28rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const ItemMenu = styled.li`
  list-style: none;
`;

export { ListMenu, ItemMenu };
