import styled from "styled-components";

function Nav() {
  return (
    <NavContainer>
      <div className="websiteTitle">
        <p>foodie .</p>
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

  .websiteTitle {
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
