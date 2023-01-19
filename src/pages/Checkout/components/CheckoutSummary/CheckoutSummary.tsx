import { useEffect, useState } from "react";
import { IShoppingBag } from "../../../../models/IShoppingBag";
import { getItemsFromLocalStorage } from "../../../../utils/localStorage/localStorage";

interface ICheckoutSummary {
  shoppingBag: IShoppingBag[];
  setShoppingBag: React.Dispatch<React.SetStateAction<IShoppingBag[]>>;
}

export const CheckoutSummary = (props: ICheckoutSummary) => {
  let [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    getItemsFromLocalStorage(
      props.shoppingBag,
      props.setShoppingBag,
      setTotalPrice
    );
  }, []);

  return (
    <div id="checkout-summary-container">
      <h3>Checkout summary</h3>
      <div id="checkout-items-container">
        {props.shoppingBag.map((product, i) => (
          <div className="checkout-item" key={i}>
            <img src={product.imgSrc} alt={product.name} />
            <div className="checkout-item-info">
              <div>
                <p>{product.name}</p>
                <p>${product.price}</p>
              </div>
              <p>Size: {product.size}</p>
            </div>
          </div>
        ))}
      </div>
      <h4>Total price: ${totalPrice}</h4>
    </div>
  );
};
