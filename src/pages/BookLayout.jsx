import React from "react";
import { Link, Outlet } from "react-router-dom";

const BookLayout = () => {
     return (
          <div>
               <Link to="/books/1">book 1</Link>
               <Link to="/books/2">book 2</Link>
               <Outlet />
          </div>
     );
};

export default BookLayout;
