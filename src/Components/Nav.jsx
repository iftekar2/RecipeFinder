import styled from "styled-components";

function Nav() {
  return (
    <div className="NavComponent">
      <NavSection>
        <Logo>
          <p>foodie .</p>
        </Logo>
        <NavOptions>
          <HomeItem>
            <button>Home</button>
          </HomeItem>
          <AboutItem>
            <button>About</button>
          </AboutItem>
          <FavoritItem>
            <button>Favorit</button>
          </FavoritItem>
          <FAQItem>
            <button>FAQ</button>
          </FAQItem>
          <MenuItem>
            <button>Menu</button>
          </MenuItem>
        </NavOptions>
      </NavSection>
    </div>
  );
}

const NavSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff7f4;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 2rem;
  position: absolute;
  left: 0;
  margin-left: 2rem;

  p {
    text-align: left;
  }
`;

const NavOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 1rem;

  button {
    background-color: #fff7f4;
    font-size: 1.5rem;
    width: 120px;
    padding: 0;
    border: 0;
  }

  button:hover {
    border: 1.5px solid black;
    cursor: pointer;
    border-radius: 50%;
    height: 40px;
    width: 100px;
  }
`;

const HomeItem = styled.div`
  color: red;
  margin: 0;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
`;

const AboutItem = styled.div`
  color: red;
  margin: 0;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
`;

const FavoritItem = styled.div`
  color: red;
  margin: 0;
  height: 40px;
  width: 120px;
  display: flex;
  justify-content: center;
`;

const FAQItem = styled.div`
  color: red;
  margin: 0;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
`;

const MenuItem = styled.div`
  color: red;
  margin: 0;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
`;

export default Nav;
