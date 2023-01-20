// IMPORTS

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IShop } from "../../models/IShop";
import { getSingleProduct } from "../../api/api";
import { IShoppingBag } from "../../models/IShoppingBag";
import { saveItemToLocalStorage } from "../../utils/localStorage/localStorage";
import { BackButton } from "../../components/BackButton/BackButton";

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

  // ADDS PRODUCT TO SHOPPING BAG

  let [shoppingBag, setShoppingBag] = useState<IShoppingBag[]>([]);

  const [bagItem, setBagItem] = useState<IShoppingBag>({
    id: 0,
    name: "",
    imgSrc: "",
    size: "",
    price: "",
    material: "",
  });

  const [sizeSelected, setSizeSelected] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === "size") {
      bagItem.size = e.target.value;
    }

    bagItem.id = Math.random();
    bagItem.name = product.name;
    bagItem.imgSrc = product.imgSrc;
    bagItem.price = product.price;
    bagItem.material = product.material;

    setBagItem(bagItem);
    setSizeSelected(true);
  };

  const handleClick = () => {
    saveItemToLocalStorage(bagItem, setShoppingBag);
    setItemAdded(true);
    setSizeSelected(false);
  };

  return (
    <>
      <BackButton />
      <div className="product-container">
        <div id="product-image-wrapper">
          <img src={product.imgSrc} alt={product.name} />
        </div>
        <div id="product-info-wrapper">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <p>Material: {product.material}</p>
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
          {sizeSelected ? (
            <button onClick={handleClick}>Add to shopping bag</button>
          ) : (
            ""
          )}
          {itemAdded ? (
            <>
              <Link to={"/shop/checkout"}>Go to checkout</Link>{" "}
              <Link to="/shop">Shop more</Link>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
