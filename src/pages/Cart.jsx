import React from "react";
import CartModal from "../components/CartModal";

const Cart = () => {
  return (
    <div className="p-4 flex flex-col ">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      <CartModal />
    </div>
  );
};

export default Cart;
