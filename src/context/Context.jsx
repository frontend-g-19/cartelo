import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchingDataProducts = () => {
      try {
        axios.get("https://fakestoreapi.com/products").then((res) => {
          // console.log(res.data);
          setProducts(res.data);
          setIsLoading(false);
        });
      } catch (error) {
        console.log("Malumotlar yuklashda xatolik yuz berdi!");
      }
    };

    fetchingDataProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="border-2 border-dotted border-gray-700 w-10 h-10 rounded-full animate-spin"></div>
      </div>
    );
  }

  return <Context.Provider value={{ products }}>{children}</Context.Provider>;
};
