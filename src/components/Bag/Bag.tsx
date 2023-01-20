// IMPORTS

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IShoppingBag } from "../../models/IShoppingBag";
import {
  getItemsFromLocalStorage,
  removeItemFromShoppingBag,
} from "../../utils/localStorage/localStorage";

export const Bag = () => {
  let [shoppingBag, setShoppingBag] = useState<IShoppingBag[]>([]);
  let [totalPrice, setTotalPrice] = useState("");
  let [empty, setEmpty] = useState(false);

  // GETS BAG ITEMS IF THEY EXIST

  useEffect(() => {
    getItemsFromLocalStorage(setShoppingBag, setTotalPrice, setEmpty);
  }, []);

  // REMOVES ITEM FROM BAG

  const handleClick = (id: number) => {
    removeItemFromShoppingBag(id, setShoppingBag, setTotalPrice);
  };

  return (
    <div id="shopping-bag-container">
      {empty ? (
        <div className="empty-bag">
          <p>Nothing in the bag</p>
          <Link to="/shop">Go to shop</Link>
        </div>
      ) : (
        <>
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
                  <button onClick={() => handleClick(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div id="bag-checkout-info">
            <p>Total price: ${totalPrice}</p>
            <Link to={"/shop/checkout"}>Go to checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};
