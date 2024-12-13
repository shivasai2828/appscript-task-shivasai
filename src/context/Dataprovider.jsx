
// Dataprovider.js
import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);

const Dataprovider = ({ children }) => {
  const[cart, addToCart]= useState([])

  return (
    <DataContext.Provider value={{cart, addToCart,}}>
      {children}
    </DataContext.Provider>
  );
};

export default Dataprovider;