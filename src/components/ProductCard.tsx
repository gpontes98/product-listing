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
    <article className="flex flex-col text-body gap-2 overflow-hidden rounded-t-md bg-white max-w-[320px] shadow-lg relative pb-10">
      <picture className="max-h-[210px] min-h-[210px] max-w-80 overflow-hidden flex justify-center items-center">
        <img
          className="w-[100%] h-[100%] object-cover"
          src={product.thumbnail}
          alt={product.description}
        />
      </picture>
      <div className="px-2 flex justify-between items-center">
        <h3 className="text-title text-pretty m-w-[50%]">{product.title}</h3>
        <h4 className="text-body-light text-nowrap">$ {product.price}</h4>
      </div>
      <div className="px-2">
        <p className="text-xs">category: {product.category}</p>
        <p className="text-xs">brand: {product.brand}</p>
      </div>
      <div className="flex w-full justify-between bottom-0 absolute">
        <button
          type="button"
          onClick={() => navigateToUrl(`product/${product.id}`)}
          className="w-[35%] py-1 bg-primaryContrast rounded-sm px-2 text-body-bold text-sm text-white hover:text-body"
        >
          View
        </button>
        <button
          type="button"
          onClick={() => {
            addProduct(product);
            calculateTotal();
          }}
          className="w-[35%] py-1 bg-secondaryContrast rounded-sm px-2 text-body-bold text-sm text-white hover:text-body"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
