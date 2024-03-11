import React from "react";
import ProductList from "./components/ProductList";

const ProductListing = (): React.JSX.Element => {
  return (
    <section className="flex gap-4 flex-wrap overflow-scroll max-h-[87vh] px-3 py-4 justify-center shadow-inner rounded-sm">
      <ProductList />
    </section>
  );
};

export default ProductListing;
