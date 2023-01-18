import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { shop } from "../../data/shop";
import { IShop } from "../../../models/IShop";

export const Shop = () => {
  const [shop, setShop] = useState<IShop[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/shop/get-products")
      .then((res) => res.json())
      .then((res) => {
        setShop(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="flow-container">
      {shop.map((product) => (
        <div className="item" key={product.name}>
          <Link to={"/shop/" + product._id}>
            <img src={product.imgSrc} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
