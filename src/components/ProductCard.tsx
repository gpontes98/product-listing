import React from "react";

import { IProduct } from "../interfaces/IProduct";

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
    <article key={id}>
      <picture>
        <img src={thumbnail} alt={description} />
      </picture>
      <div>
        <h3>{title}</h3>
        <h4>$ {price}</h4>
      </div>
      <div>
        <p>category: {category}</p>
        <p>brand: {brand}</p>
        <p>in stock: {stock}</p>
      </div>
    </article>
  );
};

export default ProductCard;
