import React from "react";
import ProductCard from "./Productcard";

const ProductList = ({ products, onAddToCart }) => (
  <div className="product-list">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);

export default ProductList;
