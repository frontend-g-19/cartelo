import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { defaultProducts } from "../db/data";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchingDataProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const combinedProducts = [...res.data, ...defaultProducts];

        const updatedProducts = combinedProducts.map((mahsulot) => ({
          ...mahsulot,
          liked: favorites.some((f) => f.id === mahsulot.id),
        }));

        const updatedProductsCart = combinedProducts.map((mahsulot) => ({
          ...mahsulot,
          addedCart: cart.some((a) => a.id === mahsulot.id),
        }));

        setProducts(updatedProducts);
        setProducts(updatedProductsCart);
        setIsLoading(false);
      } catch (error) {
        console.log("Malumotlar yuklashda xatolik yuz berdi!");
      }
    };

    fetchingDataProducts();
  }, []);

  // like funksiyasi
  const toggleFavorite = (product) => {
    let updatedFavorites;
    if (favorites.some((f) => f.id === product.id)) {
      updatedFavorites = favorites.filter((f) => f.id !== product.id);
    } else {
      updatedFavorites = [...favorites, product];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? { ...p, liked: !p.liked } : p))
    );
  };

  // adding cart function
  const toggleCart = (product) => {
    let updatedCart;
    if (cart.some((a) => a.id === product.id)) {
      updatedCart = cart.filter((a) => a.id !== product.id);
    } else {
      updatedCart = [...cart, product];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setProducts((prev) =>
      prev.map((p) =>
        p.id === product.id ? { ...p, addedCart: !p.addedCart } : p
      )
    );
  };

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

  return (
    <Context.Provider
      value={{ products, favorites, cart, toggleFavorite, toggleCart }}
    >
      {children}
    </Context.Provider>
  );
};
