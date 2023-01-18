import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "../ShoppingBag/ShoppingBag";

export const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [bagToggle, setBagToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  const toggleBag = () => {
    setBagToggle(!bagToggle);
  };

  return (
    <header>
      <div>
        <a href="/">
          <img src="/assets/logo/holmkvist-logo.png" alt="Logo" />
        </a>
      </div>
      <nav>
        <i onClick={toggleBag} className="bi bi-bag bag"></i>
        {bagToggle ? <ShoppingBag /> : ""}
        <i onClick={toggleMenu} className="bi bi-list hamburger"></i>
        <ul className={`${menuToggle ? "showMenu" : ""}`}>
          <li>
            <Link to={"/exhibition"}>Exhibition</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
