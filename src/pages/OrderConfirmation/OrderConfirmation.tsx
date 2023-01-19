import { Home } from "../Home/Home";

interface IOrderConfirmationProps {
  orderPlaced: boolean;
}

export const OrderConfirmation = (props: IOrderConfirmationProps) => {
  if (props.orderPlaced) {
    return (
      <div id="order-confirmation-container">
        <h2>Thank you for your order</h2>
        <span>Check your email for order & delivery details</span>
      </div>
    );
  }

  return <Home />;
};
