import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <NavContainer>
      <div className="websiteTitle">
        <NavLink to="/home">
          <p>foodie .</p>
        </NavLink>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff7f4;
  height: 4rem;

  .websiteTitle {
    a {
      text-decoration: none;
      color: black;
    }

    p {
      font-size: 1.5rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      cursor: pointer;
      font-weight: 550;
    }
  }
`;

export default Nav;
