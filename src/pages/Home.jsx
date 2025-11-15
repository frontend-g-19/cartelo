import { useContext } from "react";
import { Context } from "../context/Context";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { Rating, Stack } from "@mui/material";

export default function Home() {
  const { products } = useContext(Context);

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 py-16 px-4">
      {products.map((tovar) => (
        <div
          key={tovar.id}
          className="
            relative flex flex-col justify-between
            rounded-xl shadow-md p-4 bg-white
            transition-all duration-300
            hover:shadow-xl hover:-translate-y-1
            min-h-[380px] max-w-[330px] mx-auto
          "
        >
          {/* Badge + Like */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="bg-[#2C3E50] text-white py-0.5 px-3 rounded-md text-xs shadow-sm">
              {tovar.rating.count}
            </span>

            <button className="text-red-500 cursor-pointer hover:scale-110 transition">
              <IoIosHeartEmpty size={22} />
            </button>
          </div>

          {/* Image */}
          <img
            src={tovar.image}
            alt="mahsulot"
            className="
              w-full h-40 object-contain mt-8
              transition-all duration-300 hover:scale-105
            "
          />

          {/* Category + Price */}
          <div className="flex items-center justify-between w-full mt-2">
            <span className="bg-[#2C3E50] text-white px-3 py-1 text-xs font-semibold rounded-md">
              {tovar.category}
            </span>

            <span className="text-green-600 text-xl font-bold tracking-wide">
              ${tovar.price}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-base text-[#2C3E50] font-semibold mt-2 line-clamp-1">
            {tovar.title}
          </h1>

          {/* Description */}
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
            {tovar.description}
          </p>

          {/* Rating */}
          <Stack spacing={1} className="mt-1">
            <Rating
              name="rating"
              defaultValue={tovar.rating.rate}
              precision={0.5}
              readOnly
            />
          </Stack>

          {/* Cart button */}
          <button
            className="
              mt-3 flex items-center justify-center gap-2
              bg-[#2C3E50] text-white py-1.5 w-full
              rounded-lg text-sm font-semibold shadow-sm
              transition-all duration-300
              hover:bg-[#1b2836] hover:shadow-md hover:scale-[1.02] cursor-pointer
            "
          >
            <IoMdCart size={18} />
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
