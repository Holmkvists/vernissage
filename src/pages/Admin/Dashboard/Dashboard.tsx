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
    <div className="dashboard-container">
      <div className="dashboard-art-container">
        <Link to="/admin/add/art">Add new art</Link>
        <p>Select art to edit</p>
        {art.map((artwork) => (
          <div className="art" key={artwork.name}>
            <Link to={"/admin/art/" + artwork.name}>
              <img src={artwork.imgSrc} alt={artwork.name} />
            </Link>
          </div>
        ))}
      </div>
      <div className="dashboard-shop-container">
        <a href="/admin/add/product">Add new product</a>
        <p>Select product to edit</p>
        {shop.map((product) => (
          <div className="art" key={product.name}>
            <Link to={"/admin/product/" + product.name}>
              <img src={product.imgSrc} alt={product.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
