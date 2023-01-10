import { Link } from "react-router-dom";
import { shop } from "../../data/Shop";

export const Shop = () => {
  return (
    <div id="exhibitions-container">
      {shop.map((product) => (
        <div className="art" key={product.name}>
          <Link to={"/shop/" + product.name}>
            <img src={product.imgSrc} alt={product.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};
