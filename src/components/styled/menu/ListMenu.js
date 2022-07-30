import styled from "styled-components"

const ListMenu = styled.ul`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  height: ${({ theme }) => theme.sizes.headerSize};
  max-width: 40rem;
  min-width: 28rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.primary};
`

const ItemMenu = styled.li`
  list-style: none;
`

export { ListMenu, ItemMenu }
