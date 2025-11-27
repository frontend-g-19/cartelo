import { useContext } from "react";
import { Context } from "../context/Context";
import { IoMdHeart } from "react-icons/io";
import { Rating, Stack } from "@mui/material";

export default function Favorites() {
  const { favorites, toggleFavorite } = useContext(Context);

  if (favorites.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500 text-lg">
        <p>You didn't like any products yet</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-16 px-4">
      {favorites.map((tovar) => (
        <div
          key={tovar.id}
          className="relative flex flex-col justify-between rounded-2xl shadow-lg p-4 bg-white transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={() => toggleFavorite(tovar)}
              className="text-red-500 cursor-pointer hover:scale-125 transition-transform duration-300"
            >
              <IoMdHeart size={24} />
            </button>
          </div>

          <img
            src={tovar.image}
            alt={tovar.title}
            className="w-full h-48 object-contain mb-4 transition-transform duration-300"
          />

          <div className="flex items-center justify-between mb-2">
            <span className="bg-[#2C3E50] text-white px-3 py-1 text-xs font-semibold rounded-full">
              {tovar.category}
            </span>
            <span className="text-green-600 text-lg font-bold">
              ${tovar.price}
            </span>
          </div>

          <h1 className="text-sm md:text-base text-[#2C3E50] font-semibold line-clamp-2 mb-2">
            {tovar.title}
          </h1>

          <p className="text-xs text-gray-500 line-clamp-3 mb-3">
            {tovar.description}
          </p>

          {tovar.rating && (
            <Stack spacing={1} className="mb-3">
              <Rating
                name="rating"
                defaultValue={tovar.rating.rate}
                precision={0.5}
                readOnly
                size="small"
              />
            </Stack>
          )}

          <button className="mt-auto flex items-center justify-center bg-[#2C3E50] text-white py-2 rounded-lg text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-[#1b2836] hover:shadow-md hover:scale-[1.02]">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
