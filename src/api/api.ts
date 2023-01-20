// MODELS IMPORTS

import { IArt } from "../models/IArt";
import { IShop } from "../models/IShop";

/* ART */

// GET ALL ART

export const getArt = async (
  state: React.Dispatch<React.SetStateAction<IArt[]>>
) => {
  fetch("http://localhost:4000/art/get-art")
    .then((res) => res.json())
    .then((res) => {
      return state(res);
    })
    .catch((err) => console.error(err));
};

// GET SINGLE ART

export const getSingleArt = async (
  id: string | undefined,
  state: React.Dispatch<React.SetStateAction<IArt>>
) => {
  fetch("http://localhost:4000/art/single-art/" + id)
    .then((res) => res.json())
    .then((res) => {
      return state(res);
    })
    .catch((err) => console.error(err));
};

/* PRODUCTS */

// GET ALL PRODUCTS

export const getProducts = async (
  state: React.Dispatch<React.SetStateAction<IShop[]>>
) => {
  fetch("http://localhost:4000/shop/get-products")
    .then((res) => res.json())
    .then((res) => {
      return state(res);
    })
    .catch((err) => console.log(err));
};

// GET SINGLE PRODUCT

export const getSingleProduct = async (
  id: string | undefined,
  state: React.Dispatch<React.SetStateAction<IShop>>
) => {
  fetch("http://localhost:4000/shop/single-product/" + id)
    .then((res) => res.json())
    .then((res) => {
      return state(res);
    })
    .catch((err) => console.error(err));
};
