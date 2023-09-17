import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../Products";
import About from "./About";

const Book = () => {
     const [products, setProducts] = useState("");
     const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
     const handleSearch = (e) => {
          const searchValue = e.target.value.toLowerCase();
          setProducts(searchValue);

          const filteredResult = PRODUCTS.filter((product) =>
               product.productName.toLowerCase().includes(searchValue)
          );
          setTimeout(() => {
               setFilteredProducts(filteredResult);
          }, 1000);
     };

     return (
          <div className="content">
               <input
                    type="text"
                    placeholder="Your favorite product..."
                    value={products}
                    onChange={handleSearch}
               />
               <div className="grid-content">
                    {filteredProducts.map((product) => (
                         <About
                              key={product.id}
                              id={product.id}
                              image={product.productImage}
                              title={product.productName}
                              price={product.price}
                         />
                    ))}
               </div>
          </div>
     );
};

export default Book;
