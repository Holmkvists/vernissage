// IMPORTS

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
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
      <p>inquiries@holmkvist.com</p>
    </footer>
  );
};
