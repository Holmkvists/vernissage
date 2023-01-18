import { shoppingBag } from "../../data/shoppingBag";

export const ShoppingBag = () => {
  return (
    <div id="shopping-bag-container">
      {shoppingBag.map((product) => (
        <img src={product.imgSrc} alt={product.name} />
      ))}
    </div>
  );
};
