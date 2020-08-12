import React, { useContext } from 'react';

import ProductItem from '../components/Products/ProductItem';
import { ProductsContext } from '../context/products-context';
import './Products.css';

const Products = props => {
  // substituted useSelector form react-redux with useContext from react. .products is bc we have created a products key on the context object.
  const productList = useContext(ProductsContext).products;
  return (
    <ul className='products-list'>
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
