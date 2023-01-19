import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IShoppingBag } from "../../models/IShoppingBag";
import {
  getItemsFromLocalStorage,
  removeItemFromShoppingBag,
} from "../../utils/localStorage/localStorage";

export const ShoppingBag = () => {
  let [shoppingBag, setShoppingBag] = useState<IShoppingBag[]>([]);
  let [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    getItemsFromLocalStorage(shoppingBag, setShoppingBag, setTotalPrice);
  }, []);

  const handleClick = (id: number) => {
    removeItemFromShoppingBag(id, shoppingBag, setShoppingBag, setTotalPrice);
  };

  return (
    <div id="shopping-bag-container">
      {shoppingBag.map((product, i) => (
        <div className="bag-item" key={i}>
          <div className="bag-item-img">
            <img src={product.imgSrc} alt={product.name} />
          </div>
          <div className="bag-item-info">
            <div className="info-layout">
              <p>{product.name}</p>
              <p className="bag-price">${product.price}</p>
            </div>
            <div className="info-layout">
              <p>Size: {product.size}</p>
              <button onClick={() => handleClick(product.id)}>X</button>
            </div>
          </div>
        </div>
      ))}
      <div id="bag-checkout-info">
        <p>Total price: ${totalPrice}</p>
        <Link to={"/shop/checkout"}>Go to checkout</Link>
      </div>
    </div>
  );
};
