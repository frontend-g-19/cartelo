import { useContext } from "react";
import { Context } from "../context/Context";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { Rating, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  const { products, toggleFavorite } = useContext(Context);

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-16 px-4">
      {products.map((tovar, index) => (
        <motion.div
          key={tovar.id}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
            delay: index * 0.06, // Cards enter one-by-one ✨
          }}
          whileHover={{
            scale: 1.03,
            translateY: -6,
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          }}
          className="
            relative flex flex-col justify-between
            rounded-2xl shadow-md p-4 bg-white
            transition-all duration-300
            min-h-[380px] w-full max-w-[330px] mx-auto
          "
        >
          {/* Badge + Like */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[#2C3E50] text-white py-0.5 px-3 rounded-md text-xs shadow-sm"
            >
              {tovar.rating.count}
            </motion.span>

            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => toggleFavorite(tovar)}
              className="text-red-500 cursor-pointer hover:scale-110 transition"
            >
              {tovar.liked ? (
                <IoMdHeart size={22} />
              ) : (
                <IoIosHeartEmpty size={22} />
              )}
            </motion.button>
          </div>

          {/* Image */}
          <motion.img
            src={tovar.image}
            alt="mahsulot"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            whileHover={{ scale: 1.08 }}
            className="
              w-full h-40 object-contain mt-8
              transition-all duration-300
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
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.04 }}
            className="
              mt-3 flex items-center justify-center gap-2
              bg-[#2C3E50] text-white py-1.5 w-full
              rounded-lg text-sm font-semibold shadow-sm
              transition-all duration-300
              hover:bg-[#1b2836]
            "
          >
            <IoMdCart size={18} />
            Add to cart
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}
