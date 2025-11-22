import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-[#F8F9FA] py-10 mt-16">
      <div className="container mx-auto px-5 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold mb-3">Cartelo</h1>
          <p className="text-[#F8F9FA]/80 text-sm leading-6">
            Premium quality products, fast delivery and trusted services. Shop
            confidently with Cartelo.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-[#F8F9FA]/90">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-3 text-[#F8F9FA]/90 text-sm">
            <li>Email: support@cartelo.uz</li>
            <li>Phone: +998 90 123-45-67</li>
            <li>Address: Tashkent, Uzbekistan</li>
          </ul>
        </div>
      </div>

      <hr className="border-[#F8F9FA]/20 my-8" />

      <p className="text-center text-sm text-[#F8F9FA]/70">
        © {new Date().getFullYear()} Cartelo. All rights reserved.
      </p>
    </footer>
  );
}
