/* IMPORTS */

import { useState } from "react";
import { IShoppingBag } from "../../models/IShoppingBag";

// COMPONENTS

import { CheckoutSummary } from "./components/CheckoutSummary/CheckoutSummary";
import { CheckoutForm } from "./components/CheckoutForm/CheckoutForm";

interface ICheckoutProps {
  shoppingBag: IShoppingBag[];
  setShoppingBag: React.Dispatch<React.SetStateAction<IShoppingBag[]>>;
  setOrderPlaced: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Checkout = (props: ICheckoutProps) => {
  return (
    <div id="checkout-container">
      <CheckoutSummary
        shoppingBag={props.shoppingBag}
        setShoppingBag={props.setShoppingBag}
      />
      <CheckoutForm
        setOrderPlaced={props.setOrderPlaced}
        shoppingBag={props.shoppingBag}
        setShoppingBag={props.setShoppingBag}
      />
    </div>
  );
};
