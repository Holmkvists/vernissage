import { Link } from "react-router-dom";
import { art } from "../../../data/art";
import { shop } from "../../../data/shop";

export const Dashboard = () => {
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
