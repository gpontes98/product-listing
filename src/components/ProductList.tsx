import React, { useEffect, useState } from "react";
import { IProduct } from "../interfaces/IProduct";

// @ts-ignore
import { listProducts } from "@hbler/api";
import ProductCard from "./ProductCard";

const ProductList = (): React.JSX.Element => {
  const [list, setList] = useState<IProduct[]>([]);

  useEffect(() => {
    const fillList = async (): Promise<void> => {
      const products = await listProducts();

      setList(products);
    };

    if (list.length === 0) {
      fillList().catch((e) => console.log(e));
    }
  }, [list, setList]);

  return (
    <>
      {list.length !== 0 &&
        list.map((prod) => <ProductCard {...prod} key={prod.id} />)}
    </>
  );
};

export default ProductList;
