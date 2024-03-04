import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import ProductListing from "./ProductListing";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ProductListing,
  errorBoundary(err, info, props) {
    return <div>Error</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
