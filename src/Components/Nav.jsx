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

// const NavSection = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #fff7f4;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 1000;

//   a {
//     height: 40px;
//     width: 100px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-decoration: none;
//   }
// `;

// const Logo = styled.div`
//   font-size: 2rem;
//   position: absolute;
//   left: 0;
//   margin-left: 2rem;

//   p {
//     text-align: left;
//     color: black;
//   }
// `;

// const NavOptions = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 1rem;
//   height: 30px;

//   ul {
//     list-style-type: none;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 2rem;
//   }

//   li {
//     font-size: 1.5rem;
//   }

//   a {
//     color: black;
//   }

//   a:hover {
//     background-color: #b7e3e4;
//     border-radius: 20px;
//   }
// `;

export default Nav;
