import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const ProductItem = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="border p-4 rounded flex flex-col h-full">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>

      <button
        onClick={() => dispatch({ type: "ADD_To_CART", product })}
        className="mt-auto bg-amber-600 hover:bg-amber-400 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
