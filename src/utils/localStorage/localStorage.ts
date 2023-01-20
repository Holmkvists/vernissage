// IMPORT INTERFACES

import { IShoppingBag } from "../../models/IShoppingBag";
import { calculateTotalPrice } from "../generalFunctions/generalFunctions";

// SAVE ITEM TO LOCAL STORAGE

export const saveItemToLocalStorage = (
  item: IShoppingBag,
  bagState: React.Dispatch<React.SetStateAction<IShoppingBag[]>>
) => {
  const shoppingBag = JSON.parse(localStorage.getItem("shopping-bag") || "[]");

  shoppingBag.push(item);

  localStorage.setItem("shopping-bag", JSON.stringify(shoppingBag));

  return bagState(shoppingBag);
};

// GET ALL ITEMS FROM LOCAL STORAGE

export const getItemsFromLocalStorage = (
  bagState: React.Dispatch<React.SetStateAction<IShoppingBag[]>>,
  priceState: (value: React.SetStateAction<string>) => void,
  emptyState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const shoppingBag = JSON.parse(localStorage.getItem("shopping-bag") || "[]");

  if (shoppingBag.length === 0) {
    return emptyState(true);
  }

  bagState(shoppingBag);
  return calculateTotalPrice(shoppingBag, priceState);
};

// REMOVE ITEM FROM LOCAL STORAGE

export const removeItemFromShoppingBag = (
  id: number,
  bagState: React.Dispatch<React.SetStateAction<IShoppingBag[]>>,
  priceState: (value: React.SetStateAction<string>) => void,
  emptyState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const shoppingBag = JSON.parse(localStorage.getItem("shopping-bag") || "[]");

  for (let i = 0; i < shoppingBag.length; i++) {
    const item = shoppingBag[i];

    if (item.id === id) {
      shoppingBag.splice(i, 1);
    }
  }

  if (shoppingBag.length === 0) {
    emptyState(true);
  }

  localStorage.setItem("shopping-bag", JSON.stringify(shoppingBag));
  bagState(shoppingBag);
  return calculateTotalPrice(shoppingBag, priceState);
};

// REMOVE ALL ITEMS FROM LOCAL STORAGE

export const removeAllItemsFromLocalStorage = () => {
  localStorage.removeItem("shopping-bag");
};
