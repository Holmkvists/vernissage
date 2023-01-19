export const Checkout = () => {
  return (
    <div id="checkout-container">
      <div className="checkout-summary-container"></div>
      <div className="checkout-form-container">
        <form>
          <h3>Shipping & billing address</h3>
          <label htmlFor="full-name-input">Full name</label>
          <input
            type="text"
            name="fullName"
            id="full-name-input"
            placeholder="Jennifer Simonsson"
          />
          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="jennifer@example.com"
          />
          <label htmlFor="address-input">Address</label>
          <input
            type="text"
            name="address"
            id="address-input"
            placeholder="Kungsgatan 10"
          />
          <label htmlFor="city-input">City</label>
          <input
            type="text"
            name="city"
            id="city-input"
            placeholder="Stockholm"
          />
          <label htmlFor="postal-code-input">Postal code</label>
          <input
            type="text"
            name="postalCode"
            id="postal-code-input"
            placeholder="111 43"
          />
          <h3>Payment</h3>
          <label htmlFor="card-name-input">Name on card</label>
          <input
            type="text"
            name="cardName"
            id="card-name-input"
            placeholder="Jennifer Simonsson"
          />
          <label htmlFor="card-number-input">Card number</label>
          <input
            type="number"
            name="cardNumber"
            id="card-number-input"
            placeholder="1111-2222-3333-4444"
          />
          <label htmlFor="exp-month-input">Expiration month</label>
          <input
            type="number"
            name="expMonth"
            id="exp-month-input"
            placeholder="01"
          />
          <label htmlFor="exp-year-input">Expiration year</label>
          <input
            type="number"
            name="expYear"
            id="exp-year-input"
            placeholder="2028"
          />
          <label htmlFor="cvv-input">CVV</label>
          <input type="number" name="cvv" id="cvv-input" placeholder="123" />
          <input type="submit" value="Purchase" />
        </form>
      </div>
    </div>
  );
};
