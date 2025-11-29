import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdCloseFullscreen, MdFavorite } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Context } from "../context/Context";

export default function Navbar() {
  const [openingMenu, setOpeningMenu] = useState(false);
  const navigate = useNavigate();

  const handleOpeningMenu = () => setOpeningMenu(!openingMenu);

  const { favorites, cart } = useContext(Context);
  const likedCount = favorites.length;
  const addedCount = cart.length;
  // console.log(likedCount);

  const menuArr = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Contact Us", path: "/contact-us" },
    { title: "Orders", path: "/orders" },
  ];

  return (
    <div className="container mx-auto flex items-center justify-between py-8 px-5 md:px-0">
      <Link to={"/"}>
        <h1 className="text-3xl font-bold text-[#F8F9FA]">Cartelo</h1>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-x-10">
        {menuArr.map((link) => (
          <li key={link.title} className="text-[#F8F9FA] font-semibold text-lg">
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-5">
        <button
          onClick={() => navigate("/favorites")}
          className="flex items-center gap-2 bg-[#F8F9FA] py-1.5 px-8 rounded-xl text-lg font-semibold text-[#2C3E50] cursor-pointer"
        >
          <span className="text-red-500">{likedCount}</span>
          <MdFavorite size={22} />
          Favorites
        </button>

        <button
          onClick={() => navigate("/cart")}
          className="flex items-center gap-2 bg-[#F8F9FA] py-1.5 px-8 rounded-xl text-lg font-semibold text-[#2C3E50] cursor-pointer"
        >
          <span className="text-red-500">{addedCount}</span>
          <IoMdCart size={22} />
          Cart
        </button>

        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 bg-[#F8F9FA] py-1.5 px-8 rounded-xl text-lg font-semibold text-[#2C3E50] cursor-pointer"
        >
          <IoLogIn size={22} />
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={handleOpeningMenu}
        className="md:hidden border-2 rounded-full p-2 text-[#F8F9FA]"
      >
        <HiDotsVertical size={25} />
      </button>

      {/* MOBILE MENU + MOTION */}
      <AnimatePresence>
        {openingMenu && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 15 }}
            className="mobile-menu fixed inset-0 bg-[#F8F9FA] flex flex-col items-center justify-around z-50"
          >
            <div className="flex items-center justify-between w-full px-12">
              <Link to={"/"}>
                <h1 className="text-3xl font-bold text-[#2C3E50]">Cartelo</h1>
              </Link>

              <button
                onClick={handleOpeningMenu}
                className="md:hidden border-2 rounded-full p-2 text-[#2C3E50]"
              >
                <MdCloseFullscreen size={25} />
              </button>
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col gap-5">
              {menuArr.map((link, i) => (
                <motion.li
                  key={link.title}
                  onClick={handleOpeningMenu}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-[#2C3E50] px-8 py-2 rounded-xl text-2xl text-[#F8F9FA] font-semibold"
                >
                  <Link to={link.path}>{link.title}</Link>
                </motion.li>
              ))}
            </ul>

            {/* Bottom Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="md:hidden space-y-5"
            >
              <button
                onClick={() => navigate("/favorites")}
                className="flex items-center gap-2 py-1.5 px-8 rounded-xl border-2 w-full text-lg font-semibold text-[#2C3E50] cursor-pointer"
              >
                <span className="text-red-500">{likedCount}</span>
                <MdFavorite size={22} />
                Favorites
              </button>

              <button
                onClick={() => navigate("/cart")}
                className="flex items-center gap-2 py-1.5 px-8 rounded-xl border-2 w-full text-lg font-semibold text-[#2C3E50] cursor-pointer"
              >
                <span className="text-red-500">{addedCount}</span>
                <IoMdCart size={22} />
                Cart
              </button>

              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-2 py-1.5 px-8 rounded-xl border-2 w-full text-lg font-semibold text-[#2C3E50] cursor-pointer"
              >
                <IoLogIn size={22} />
                Login
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
