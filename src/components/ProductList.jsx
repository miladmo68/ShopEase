import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      if (data && data.length > 0) {
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);
  if (loading) {
    return <h1 className="text-2xl font-bold">Data is Loading...</h1>;
  }
  if (error) {
    return <h1 className="text-2xl font-bold">Error:{error}</h1>;
  }

  //////
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
