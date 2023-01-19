// IMPORT INTERFACE

import { IShoppingBag } from "../../models/IShoppingBag";
import { calculateTotalPrice } from "../generalFunctions/generalFunctions";

// SAVE ITEM TO LOCAL STORAGE

export const saveItemToLocalStorage = (
  shoppingBag: IShoppingBag[],
  item: IShoppingBag,
  bagState: React.Dispatch<React.SetStateAction<IShoppingBag[]>>
) => {
  shoppingBag = JSON.parse(localStorage.getItem("shopping-bag") || "[]");

  shoppingBag.push(item);

  localStorage.setItem("shopping-bag", JSON.stringify(shoppingBag));

  return bagState(shoppingBag);
};

// GET ALL ITEMS FROM LOCAL STORAGE

export const getItemsFromLocalStorage = (
  shoppingBag: IShoppingBag[],
  bagState: React.Dispatch<React.SetStateAction<IShoppingBag[]>>,
  priceState: (value: React.SetStateAction<string>) => void
) => {
  shoppingBag = JSON.parse(localStorage.getItem("shopping-bag") || "[]");

  bagState(shoppingBag);
  return calculateTotalPrice(shoppingBag, priceState);
};

// REMOVE ITEM FROM LOCAL STORAGE

export const removeItemFromShoppingBag = (
  id: number,
  shoppingBag: IShoppingBag[],
  bagState: React.Dispatch<React.SetStateAction<IShoppingBag[]>>,
  priceState: (value: React.SetStateAction<string>) => void
) => {
  shoppingBag = JSON.parse(localStorage.getItem("shopping-bag") || "[]");

  for (let i = 0; i < shoppingBag.length; i++) {
    const item = shoppingBag[i];

    console.log(item);

    if (item.id === id) {
      shoppingBag.splice(i, 1);
    }
  }

  localStorage.setItem("shopping-bag", JSON.stringify(shoppingBag));
  bagState(shoppingBag);
  return calculateTotalPrice(shoppingBag, priceState);
};

// REMOVE ALL ITEMS FROM LOCAL STORAGE

export const removeAllItemsFromLocalStorage = () => {
  localStorage.removeItem("shopping-bag");
};
