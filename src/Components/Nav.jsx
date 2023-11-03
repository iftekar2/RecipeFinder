import { NavLink } from "react-router-dom";
import "./style.css";
import { useState } from "react";

function Nav() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <section className="navSection">
      <div className="navComponent">
        <div className="websiteName">
          <NavLink to="/">
            <p>foodie .</p>
          </NavLink>
        </div>

        <div
          className="burgerMenu"
          onClick={() => {
            setBurgerMenu(!burgerMenu);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navItems">
          <ul className={burgerMenu ? "open" : ""}>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/Favorite">Favorite</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/Menu">Menu</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Nav;
