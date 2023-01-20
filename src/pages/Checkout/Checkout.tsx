// IMPORTS

import { IShoppingBag } from "../../models/IShoppingBag";
import { useState } from "react";

// COMPONENTS

import { CheckoutSummary } from "./components/CheckoutSummary/CheckoutSummary";
import { CheckoutForm } from "./components/CheckoutForm/CheckoutForm";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { OrderConfirmation } from "./OrderConfirmation/OrderConfirmation";

export const Checkout = () => {
  const [shoppingBag, setShoppingBag] = useState<IShoppingBag[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

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
