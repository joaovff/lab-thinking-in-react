import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductRow from './ProductRow';

function ProductsPage(props) {
  const [products, setProducts] = useState(props.jsonData);
  const [filteredProducts, setFilteredProducts] = useState(props.jsonData);

  function handleFilterProduct(keyword) {
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setFilteredProducts(filtered);
  }
  return (
    <div>
      <SearchBar
        filteredProducts={filteredProducts}
        handleFilterProduct={handleFilterProduct}
        setFilteredProducts={setFilteredProducts}
      />
      <h1>IronStore</h1>
      <ProductRow products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
