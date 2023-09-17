import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../Products";
import BookList from "./BookList";

const Cart = () => {
     const navigate = useNavigate();
     const { totalPrice, productState } = useContext(ProductContext);
     let total = totalPrice();
     return (
          <div>
               <h1>Your Cart</h1>
               <div>
                    {PRODUCTS.map((product) => {
                         if (productState[product.id] !== 0) {
                              return (
                                   <BookList
                                        key={product.id}
                                        id={product.id}
                                        image={product.productImage}
                                        title={product.productName}
                                        price={product.price}
                                   />
                              );
                         }
                    })}
               </div>
               <div>
                    {total > 0 ? (
                         <div>
                              <h1>Total: ${total}</h1>
                         </div>
                    ) : (
                         <h1>No cart to total price</h1>
                    )}
               </div>
               <button onClick={() => navigate("/")}>Continue shopping</button>{" "}
               <button onClick={() => navigate("/checkout")}>Checkout</button>
          </div>
     );
};

export default Cart;
