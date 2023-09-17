import React, { useContext, useState } from "react";
import "../App.css";
import { ProductContext } from "../context/ProductProvider";

const About = ({ id, image, title, price }) => {
     const { addCart, productState } = useContext(ProductContext);
     const cartItem = productState[id];
     return (
          <div key={id}>
               <img src={image} alt={title} />
               <p>{title}</p>
               <p>${price}</p>
               <p className="btn-cart" onClick={() => addCart(id)}>
                    Add To Cart {cartItem > 0 ? <span>{cartItem}</span> : ""}
               </p>
          </div>
     );
};

export default About;
