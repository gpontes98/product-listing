import React from "react";
import ProductList from "./components/ProductList";
import { QueryClientProvider } from "@tanstack/react-query";
// @ts-ignore
import { queryClient } from "@hbler/api";

const ProductListing = (): React.JSX.Element => {
  return (
	<QueryClientProvider client={queryClient}>
		<section className="flex gap-4 flex-wrap overflow-scroll max-h-[87vh] px-3 py-4 justify-center shadow-inner rounded-sm">
			<ProductList />
		</section>
	</QueryClientProvider>
  );
};

export default ProductListing;
