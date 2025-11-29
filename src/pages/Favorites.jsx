import { useContext } from "react";
import { Context } from "../context/Context";
import { IoMdHeart } from "react-icons/io";
import { Rating, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto py-16 px-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {favorites.map((tovar) => (
            <motion.div
              key={tovar.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{
                duration: 0.45,
                type: "spring",
                stiffness: 90,
                damping: 12,
              }}
              className="relative flex flex-col justify-between rounded-2xl shadow-lg p-4 bg-white 
              hover:shadow-2xl transition-all duration-300"
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >
              {/* Like Button */}
              <motion.button
                onClick={() => toggleFavorite(tovar)}
                whileTap={{ scale: 0.8 }}
                className="absolute top-4 right-4 text-red-500"
              >
                <IoMdHeart size={24} />
              </motion.button>

              {/* Image */}
              <motion.img
                src={tovar.image}
                alt={tovar.title}
                className="w-full h-48 object-contain mb-4"
                transition={{ duration: 0.25 }}
              />

              {/* Category + Price */}
              <div className="flex items-center justify-between mb-2">
                <span className="bg-[#2C3E50] text-white px-3 py-1 text-xs font-semibold rounded-full">
                  {tovar.category}
                </span>
                <span className="text-green-600 text-lg font-bold">
                  ${tovar.price}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-sm md:text-base text-[#2C3E50] font-semibold line-clamp-2 mb-2">
                {tovar.title}
              </h1>

              {/* Description */}
              <p className="text-xs text-gray-500 line-clamp-3 mb-3">
                {tovar.description}
              </p>

              {/* Rating */}
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

              {/* Add to Cart */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                className="mt-auto flex items-center justify-center bg-[#2C3E50] 
                text-white py-2 rounded-lg text-sm font-semibold shadow-sm transition-colors 
                duration-300 hover:bg-[#1b2836]"
              >
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
