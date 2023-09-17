import React, { createContext, useState } from "react";
import { PRODUCTS } from "../Products";

export const ProductContext = createContext();

const initialProduct = () => {
     let cart = {};
     for (let i = 1; i < PRODUCTS.length + 1; i++) {
          cart[i] = 0;
     }
     return cart;
};
const ProductProvider = ({ children }) => {
     const [productState, setProductState] = useState(initialProduct());

     const addCart = (idItem) => {
          setProductState((prev) => ({ ...prev, [idItem]: prev[idItem] + 1 }));
     };
     const removeCart = (idItem) => {
          setProductState((prev) => ({ ...prev, [idItem]: prev[idItem] - 1 }));
     };
     const totalPrice = () => {
          return Object.keys(productState).reduce((total, key) => {
               const quantity = productState[key];
               if (quantity > 0) {
                    const findProduct = PRODUCTS.find(
                         (item) => item.id === Number(key)
                    );
                    const productTotal = findProduct.price * quantity;
                    return productTotal + total;
               }
               return total;
          }, 0);
     };

     const updateCart = (newItem, idItem) => {
          setProductState((prev) => ({ ...prev, [idItem]: newItem }));
     };

     return (
          <ProductContext.Provider
               value={{
                    addCart,
                    removeCart,
                    totalPrice,
                    updateCart,
                    productState,
               }}
          >
               {children}
          </ProductContext.Provider>
     );
};

export default ProductProvider;
