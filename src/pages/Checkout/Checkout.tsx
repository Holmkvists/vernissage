// IMPORTS

import { IShoppingBag } from "../../models/IShoppingBag";
import { useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS

import { CheckoutSummary } from "./components/CheckoutSummary/CheckoutSummary";
import { CheckoutForm } from "./components/CheckoutForm/CheckoutForm";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { OrderConfirmation } from "./OrderConfirmation/OrderConfirmation";

export const Checkout = () => {
  const [shoppingBag, setShoppingBag] = useState<IShoppingBag[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  let [empty, setEmpty] = useState(false);

  if (empty) {
    return (
      <>
        <Header />
        <div id="checkout-error">
          <p>Nothing to checkout</p>
          <Link to="/shop">Go to shop</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      {orderPlaced ? (
        <OrderConfirmation />
      ) : (
        <div id="checkout-container">
          <CheckoutSummary
            shoppingBag={shoppingBag}
            setShoppingBag={setShoppingBag}
            setEmpty={setEmpty}
          />
          <CheckoutForm
            setOrderPlaced={setOrderPlaced}
            shoppingBag={shoppingBag}
            setShoppingBag={setShoppingBag}
          />
        </div>
      )}
      <Footer />
    </>
  );
};
