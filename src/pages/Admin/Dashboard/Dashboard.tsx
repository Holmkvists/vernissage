import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArt, getProducts } from "../../../api/api";
import { IArt } from "../../../models/IArt";
import { IShop } from "../../../models/IShop";

export const Dashboard = () => {
  const [art, setArt] = useState<IArt[]>([]);
  const [shop, setShop] = useState<IShop[]>([]);

  useEffect(() => {
    getArt(setArt);
    getProducts(setShop);
  }, []);

  return (
    <div id="dashboard-wrapper">
      <Link to="/admin/add/art" className="add-links">
        Add new art
      </Link>
      <h3>Select art to edit</h3>
      <div className="dashboard-container">
        {art.map((artwork) => (
          <div className="item" key={artwork.name}>
            <Link to={"/admin/art/" + artwork.name}>
              <img src={artwork.imgSrc} alt={artwork.name} />
            </Link>
          </div>
        ))}
      </div>
      <Link to="/admin/add/product" className="add-links">
        Add new product
      </Link>
      <h3>Select product to edit</h3>
      <div className="dashboard-container">
        {shop.map((product) => (
          <div className="item" key={product.name}>
            <Link to={"/admin/product/" + product.name}>
              <img src={product.imgSrc} alt={product.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
