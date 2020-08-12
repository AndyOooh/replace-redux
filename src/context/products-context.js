import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {}
});
// initialised with a value only for ide purposes

export default props => {
  // we create state to pass as the value for the context Provider
  const [productsList, setProductsList] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false,
    },
  ]);

  const toggleFavorite = productId => {

    const prodIndex = productsList.findIndex(prod => prod.id === productId);
    const newFavStatus = !productsList[prodIndex].isFavorite;
    const updatedState = [...productsList];
    updatedState[prodIndex] = {
      ...productsList[prodIndex],
      isFavorite: newFavStatus,
    };
    setProductsList(updatedState);
  };

  return (
    <ProductsContext.Provider value={{ products: productsList, toggleFav: toggleFavorite }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

// we already created the .Provider component here as opposed to react.js docs where the examples show the use of .Provider in where it wraps the rendered jsx (typically a high-level component like <App>)
