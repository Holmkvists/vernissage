// IMPORTS

import { Home } from "../Home/Home";

interface IOrderConfirmationProps {
  orderPlaced: boolean;
}

export const OrderConfirmation = (props: IOrderConfirmationProps) => {
  // RENDERS ORDER CONFIRMATION IF BOOLEAN IS TRUE

  return (
    <>
      {props.orderPlaced ? (
        <div id="order-confirmation-container">
          <h2>Thank you for your order</h2>
          <span>Check your email for order & delivery details</span>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};
