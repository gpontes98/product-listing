import React from "react";

import { IProduct } from "../interfaces/IProduct";
import { navigateToUrl } from "single-spa";

const ProductCard = ({
  id,
  title,
  description,
  price,
  stock,
  category,
  thumbnail,
  brand,
}: IProduct): React.JSX.Element => {
  return (
    <article>
      <picture>
        <img src={thumbnail} alt={description} />
      </picture>
      <div>
        <h3>{title}</h3>
        <h4>$ {price}</h4>
      </div>
      <div className="flex">
        <p>category: {category}</p>
        <p>brand: {brand}</p>
      </div>
      <div>
        <button type="button" onClick={() => navigateToUrl(`product/${id}`)}>
          View
        </button>
        <button>Add to Cart</button>
      </div>
    </article>
  );
};

export default ProductCard;
