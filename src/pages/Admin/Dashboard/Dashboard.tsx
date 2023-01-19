import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArt, getProducts } from "../../../api/api";
import { IArt } from "../../../models/IArt";
import { IShop } from "../../../models/IShop";
import { Delete } from "./Delete/Delete";

export const Dashboard = () => {
  const [art, setArt] = useState<IArt[]>([]);
  const [shop, setShop] = useState<IShop[]>([]);

  const deleteUrl = "http://localhost:4000/";

  useEffect(() => {
    getArt(setArt);
    getProducts(setShop);
  }, []);

  return (
    <div id="dashboard-wrapper">
      <Link to="/admin/add/art" className="add-links">
        Add new art
      </Link>
      <h3>Uploaded art</h3>
      <div className="dashboard-container">
        {art.map((artwork) => (
          <div className="item" key={artwork._id}>
            <img src={artwork.imgSrc} alt={artwork.name} />
            <Delete deleteUrl={deleteUrl + "art/delete/" + artwork._id} />
          </div>
        ))}
      </div>
      <Link to="/admin/add/product" className="add-links">
        Add new product
      </Link>
      <h3>Uploaded products</h3>
      <div className="dashboard-container">
        {shop.map((product) => (
          <div className="item" key={product._id}>
            <img src={product.imgSrc} alt={product.name} />
            <Delete deleteUrl={deleteUrl + "shop/delete/" + product._id} />
          </div>
        ))}
      </div>
    </div>
  );
};
