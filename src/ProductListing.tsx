import React from "react";
import ProductList from "./components/ProductList";

const ProductListing = (): React.JSX.Element => {
  return (
    <main>
      <h2>Lista de produtos</h2>
      <ProductList />
    </main>
  );
};

export default ProductListing;
