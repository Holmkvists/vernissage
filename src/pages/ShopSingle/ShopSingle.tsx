// IMPORTS

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IShop } from "../../models/IShop";

export const ShopSingle = () => {
  let params = useParams();

  const [product, setProduct] = useState<IShop>({
    _id: 0,
    name: "",
    imgSrc: "",
    sizes: [""],
    price: "",
    material: "",
  });

  useEffect(() => {
    fetch("http://localhost:4000/shop/single-product/" + params.id)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="product-container">
      <div id="product-image-wrapper">
        <img src={product.imgSrc} alt={product.name} />
      </div>
      <div id="product-info-wrapper">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <select name="size" id="size-select">
          <option>Select size</option>
          {product.sizes.map((size, i) => (
            <option value={size} key={i}>
              {size}
            </option>
          ))}
        </select>
        <button>Add to cart</button>
        <p>Material: {product.material}</p>
      </div>
    </div>
  );
};
