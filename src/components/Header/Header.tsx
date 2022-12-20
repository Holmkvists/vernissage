import { useState } from "react";

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
            <a href="#">Exhibition</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
