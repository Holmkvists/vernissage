// IMPORTS

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IShop } from "../../models/IShop";
import { getSingleProduct } from "../../api/api";
import { shoppingBag } from "../../data/shoppingBag";
import { IShoppingBag } from "../../models/IShoppingBag";

export const ShopSingle = () => {
  // GET THE SELECTED PRODUCT

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
    getSingleProduct(params.id, setProduct);
  }, []);

  // ADDING PRODUCT TO SHOPPING BAG

  const [bagItem, setBagItem] = useState<IShoppingBag>({
    name: "",
    imgSrc: "",
    size: "",
    price: "",
    material: "",
  });

  const [itemAdded, setItemAdded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name == "size") {
      bagItem.size = e.target.value;
    }

    bagItem.name = product.name;
    bagItem.imgSrc = product.imgSrc;
    bagItem.price = product.price;
    bagItem.material = product.material;

    setBagItem(bagItem);
  };

  const handleClick = () => {
    shoppingBag.push(bagItem);
    setItemAdded(true);
    console.log(shoppingBag);
  };

  return (
    <div className="product-container">
      <div id="product-image-wrapper">
        <img src={product.imgSrc} alt={product.name} />
      </div>
      <div id="product-info-wrapper">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <select
          name="size"
          id="size-select"
          onChange={handleChange}
          defaultValue="default"
        >
          <option disabled value="default">
            Select size
          </option>
          {product.sizes.map((size, i) => (
            <option value={size} key={i}>
              {size}
            </option>
          ))}
        </select>
        <button onClick={handleClick}>Add to cart</button>
        <p>Material: {product.material}</p>
      </div>
    </div>
  );
};
