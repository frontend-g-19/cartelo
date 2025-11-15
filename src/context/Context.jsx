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
      <div className="h-screen flex flex-col items-center justify-center gap-4 bg-white">
        {/* Spinner */}
        <div className="relative">
          <div className="w-14 h-14 border-4 border-gray-300 rounded-full"></div>
          <div
            className="
            w-14 h-14 border-4 border-[#2C3E50] 
            border-t-transparent rounded-full absolute top-0 left-0 
            animate-spin
          "
          ></div>
        </div>

        {/* Text animation */}
        <p className="text-[#2C3E50] text-lg font-semibold animate-pulse tracking-wide">
          Loading...
        </p>
      </div>
    );
  }

  return <Context.Provider value={{ products }}>{children}</Context.Provider>;
};
