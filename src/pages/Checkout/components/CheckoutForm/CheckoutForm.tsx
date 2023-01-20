// IMPORTS

import { IShoppingBag } from "../../../../models/IShoppingBag";
import { removeAllItemsFromLocalStorage } from "../../../../utils/localStorage/localStorage";

interface ICheckoutFormProps {
  setOrderPlaced: React.Dispatch<React.SetStateAction<boolean>>;
  shoppingBag: IShoppingBag[];
  setShoppingBag: React.Dispatch<React.SetStateAction<IShoppingBag[]>>;
}

export const CheckoutForm = (props: ICheckoutFormProps) => {
  // RENDERS TO ORDER CONFIRMATION AND REMOVES ITEMS FROM BAG

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    removeAllItemsFromLocalStorage();
    props.setOrderPlaced(true);
  };

  return (
    <div id="checkout-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Shipping & billing address</h3>
          <label htmlFor="full-name-input">Full name</label>
          <input
            type="text"
            name="fullName"
            id="full-name-input"
            placeholder="Jennifer Simonsson"
            required
          />
          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="jennifer@example.com"
            required
          />
          <label htmlFor="address-input">Address</label>
          <input
            type="text"
            name="address"
            id="address-input"
            placeholder="Kungsgatan 10"
            required
          />
          <label htmlFor="city-input">City</label>
          <input
            type="text"
            name="city"
            id="city-input"
            placeholder="Stockholm"
            required
          />
          <label htmlFor="postal-code-input">Postal code</label>
          <input
            type="number"
            name="postalCode"
            id="postal-code-input"
            placeholder="11143"
            required
          />
        </div>
        <div>
          <h3>Payment</h3>
          <label htmlFor="card-name-input">Name on card</label>
          <input
            type="text"
            name="cardName"
            id="card-name-input"
            placeholder="Jennifer Simonsson"
            required
          />
          <label htmlFor="card-number-input">Card number</label>
          <input
            type="number"
            name="cardNumber"
            id="card-number-input"
            placeholder="1111222233334444"
            required
          />
          <label htmlFor="exp-month-input">Expiration month</label>
          <input
            type="number"
            name="expMonth"
            id="exp-month-input"
            placeholder="01"
            required
          />
          <label htmlFor="exp-year-input">Expiration year</label>
          <input
            type="number"
            name="expYear"
            id="exp-year-input"
            placeholder="2028"
            required
          />
          <label htmlFor="cvv-input">CVV</label>
          <input
            type="number"
            name="cvv"
            id="cvv-input"
            placeholder="123"
            required
          />
        </div>
        <input type="submit" value="Purchase" />
      </form>
    </div>
  );
};
