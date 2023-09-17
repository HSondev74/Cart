import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import "../App.css";
import Book from "./Book";

const Home = () => {
     // const { data, isLoading, refetch } = useQuery(["doggy"], () => {
     //      return axios.get(api).then((res) => res.data);
     // });

     // if (isLoading) {
     //      return <p>Loading...</p>;
     // }

     return (
          <main>
               <h1>JSon Shop</h1>
               <Book />
          </main>
     );
};

export default Home;
