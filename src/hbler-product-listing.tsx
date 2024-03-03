import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import ProductListing from "./ProductListing";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ProductListing,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
