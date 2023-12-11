import styled from "styled-components";
import MenuComponent from "../Components/MenuComponent";

function Menu() {
  return (
    <MenuSection>
      <MenuComponent />
    </MenuSection>
  );
}

const MenuSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Menu;
