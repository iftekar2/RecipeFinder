import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [burgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuVisible(!burgerMenuVisible);
  };

  return (
    <NavContainer>
      <WebsiteTitle>
        <NavLink to="/">
          <p>foodie .</p>
        </NavLink>
      </WebsiteTitle>

      <BurgerMenu onClick={toggleBurgerMenu}>
        <Span />
        <Span />
        <Span />
      </BurgerMenu>

      <NavItems isVisible={burgerMenuVisible}>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">Favorite</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
        </ul>
      </NavItems>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 3rem;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff7f4;
`;

const WebsiteTitle = styled.div`
  font-size: 1.5rem;

  a {
    text-decoration: none;
    color: black;
  }
`;

const BurgerMenu = styled.div`
  @media (max-width: 950px) {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const Span = styled.div`
  @media (max-width: 950px) {
    height: 3px;
    width: 35px;
    background: black;
    border-radius: 10px;
  }
`;

const NavItems = styled.div`
  ul {
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    gap: 2rem;
  }

  @media (max-width: 950px) {
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      list-style-type: none;
      gap: 2rem;
    }
  }

  li {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .active {
    color: black;
    font-weight: 600;
  }

  @media (max-width: 950px) {
    display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #fff7f4;
    z-index: 1;
    flex-direction: column;
  }
`;

export default Navbar;
