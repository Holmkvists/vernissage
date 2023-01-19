import { useState } from "react";
import { Link } from "react-router-dom";
import { IShoppingBag } from "../../models/IShoppingBag";
import { Bag } from "../Bag/Bag";

interface IHeaderProps {
  shoppingBag: IShoppingBag[];
  setShoppingBag: React.Dispatch<React.SetStateAction<IShoppingBag[]>>;
}

export const Header = (props: IHeaderProps) => {
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
      <div id="logo-container">
        <a href="/">
          <img src="/assets/logo/holmkvist-logo.png" alt="Logo" />
        </a>
      </div>
      <div className="nav-container">
        <i onClick={toggleBag} className="bi bi-bag bag"></i>
        <div
          id={`${bagToggle ? "display-bag" : ""}`}
          className="nav-bag-container"
        >
          {bagToggle ? (
            <Bag
              shoppingBag={props.shoppingBag}
              setShoppingBag={props.setShoppingBag}
            />
          ) : (
            ""
          )}
        </div>
        <nav>
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
      </div>
    </header>
  );
};
