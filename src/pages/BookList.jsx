import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import "../App.css";

const BookList = ({ id, image, title, price }) => {
     const { addCart, removeCart, updateCart, productState } =
          useContext(ProductContext);
     return (
          <div className="cart">
               <div className="image-cart">
                    <img src={image} alt={title} />
               </div>
               <div>
                    <p>IPhone</p>
                    <p>Price: ${price}</p>
                    <div>
                         <button onClick={() => removeCart(id)}>TRU</button>
                         <input
                              className="input-cart"
                              type="number"
                              value={productState[id]}
                              onChange={(e) =>
                                   updateCart(Number(e.target.value), id)
                              }
                         />
                         <button onClick={() => addCart(id)}>CONG</button>
                    </div>
               </div>
          </div>
     );
};

export default BookList;
