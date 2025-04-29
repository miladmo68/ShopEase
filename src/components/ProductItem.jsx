import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const ProductItem = ({ product }) => {
  const { dispatch, cart } = useContext(CartContext);
  return (
    <div className="border p-4 rounded flex flex-col h-full">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>

      {cart.some((item) => item.id === product.id) ? (
        <button
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: product.id })
          }
          className="mt-auto bg-red-600 hover:bg-red-400 text-white px-4 py-2 rounded"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => dispatch({ type: "ADD_To_CART", payload: product })}
          className="mt-auto bg-amber-600 hover:bg-amber-400 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
