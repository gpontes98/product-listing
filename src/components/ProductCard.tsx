import React from "react";
import { navigateToUrl } from "single-spa";

// @ts-ignore
import { addProduct, calculateTotal } from "@hbler/api";
import { IProduct } from "../interfaces/IProduct";

const ProductCard = (product: IProduct): React.JSX.Element => {
  // Custom Events - method
  // const addToCart = (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ): void => {
  //   e.preventDefault();
  //   dispatchEvent(
  //     new CustomEvent("@hbler/product-listing/product-card/add-to-cart", {
  //       detail: {
  //         id: product.id,
  //         title: product.title,
  //         price: product.price,
  //         thumbnail: product.thumbnail,
  //       },
  //     })
  //   );
  // };

  return (
    <article>
      <picture>
        <img src={product.thumbnail} alt={product.description} />
      </picture>
      <div>
        <h3>{product.title}</h3>
        <h4>$ {product.price}</h4>
      </div>
      <div className="flex">
        <p>category: {product.category}</p>
        <p>brand: {product.brand}</p>
      </div>
      <div>
        <button
          type="button"
          onClick={() => navigateToUrl(`product/${product.id}`)}
        >
          View
        </button>
        <button
          type="button"
          onClick={() => {
            addProduct(product);
            calculateTotal();
          }}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
