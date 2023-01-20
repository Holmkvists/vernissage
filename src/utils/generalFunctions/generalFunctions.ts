// IMPORTS

import { IShoppingBag } from "../../models/IShoppingBag";

// CALCULATES TOTAL SHOPPING BAG PRICE

export const calculateTotalPrice = (
  shoppingBag: IShoppingBag[],
  priceState: (value: React.SetStateAction<string>) => void
) => {
  let sum = 0;

  for (let i = 0; i < shoppingBag.length; i++) {
    const price = parseInt(shoppingBag[i].price);

    sum += price;
  }

  return priceState(JSON.stringify(sum));
};
