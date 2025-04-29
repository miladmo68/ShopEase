import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const CartModal = () => {
  const { cart, dispatch } = useContext(CartContext);
  return (
    <div className="p-4 flex justify-between ">
      <div className="flex-col  ">
        {cart.map((product) => (
          <div
            className="flex justify-between gap-5 my-2 px-5"
            key={product.id}
          >
            <img src={product.image} alt={product.title} className="h-10 " />
            <h2 className="text-sm font-bold mt-2">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: product.id })
              }
              className="mt-auto bg-red-600 hover:bg-red-400 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className=" mb-4">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <p>Price:</p>
        <Link to="/checkout">
          <button
            onClick={() => dispatch({ type: "CHECKOUT" })}
            className="mt-auto bg-sky-600 hover:bg-red-400 text-white px-4 py-2 rounded"
          >
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartModal;
