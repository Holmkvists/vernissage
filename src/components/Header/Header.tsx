import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header>
      <div>
        <a href="/">
          <img src="/assets/logo/holmkvist-logo.png" alt="Logo" />
        </a>
      </div>
      <nav>
        <i className="bi bi-bag bag"></i>
        <i onClick={toggleMenu} className="bi bi-list hamburger"></i>
        <ul className={`${isToggled ? "showMenu" : ""}`}>
          <li>
            <a href="/exhibition">Exhibition</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
