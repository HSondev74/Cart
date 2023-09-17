import React from "react";
import Home from "./pages/Home";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import BookLayout from "./pages/BookLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cart from "./pages/Cart";

export const api = "https://catfact.ninja/fact";
function App() {
     const query = new QueryClient({
          defaultOptions: {
               queries: {
                    refetchOnWindowFocus: false,
               },
          },
     });
     return (
          <>
               <nav className="container">
                    <ul className="header">
                         <header>logo</header>
                         <Link to="/">Home</Link>
                         <Link to="/cart">cart</Link>
                    </ul>
               </nav>
               <QueryClientProvider client={query}>
                    <Routes>
                         <Route path="/" element={<Home />} />
                         {/* <Route path="/books" element={<BookLayout />}>
                              <Route path="/books/:id" element={<Book />} />
                         </Route> */}
                         <Route path="/cart" element={<Cart />} />
                         <Route path="*" element={<NotFound />} />
                    </Routes>
               </QueryClientProvider>
          </>
     );
}

export default App;
