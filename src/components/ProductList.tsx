import React from "react";
import { IProduct } from "../interfaces/IProduct";
import { useQuery } from "@tanstack/react-query";

// @ts-ignore
import { listProducts } from "@hbler/api";
import ProductCard from "./ProductCard";

const ProductList = (): React.JSX.Element => {
	const { data, error, isLoading } = useQuery<IProduct[]>({
		queryKey: ["products"],
		queryFn: listProducts,
	});

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error loading products</div>;

	return (
		<>
			{data.length > 0 &&
				data.map((prod) => <ProductCard {...prod} key={prod.id} />)}
		</>
	);
};

export default ProductList;
