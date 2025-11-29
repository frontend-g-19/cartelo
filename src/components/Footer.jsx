import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1F2A36] text-[#E9ECEF] pt-16 pb-10 mt-20 relative overflow-hidden">
      {/* Gradient light */}
      <div className="absolute inset-0 opacity-10 bg-linear-to-tr from-[#2C3E50] to-transparent"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide mb-4">Cartelo</h1>
          <p className="text-[#E9ECEF]/70 text-sm leading-6">
            Discover premium products, smooth shopping, and a service experience
            built around comfort and trust.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-[#E9ECEF]/80">
            {["Home", "About Us", "Contact Us", "Orders"].map((item) => (
              <li key={item}>
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-3 text-[#E9ECEF]/80 text-sm">
            <li className="hover:text-white transition">FAQ</li>
            <li className="hover:text-white transition">Shipping & Returns</li>
            <li className="hover:text-white transition">Privacy Policy</li>
            <li className="hover:text-white transition">Terms of Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-3 text-[#E9ECEF]/80 text-sm">
            <li>Email: support@cartelo.uz</li>
            <li>Phone: +998 90 123-45-67</li>
            <li>Address: Tashkent, Uzbekistan</li>
          </ul>
        </div>
      </div>

      <hr className="border-[#E9ECEF]/20 mt-14 mb-6" />

      <p className="text-center text-[#E9ECEF]/50 text-sm relative z-10">
        © {new Date().getFullYear()} Cartelo. All rights reserved.
      </p>
    </footer>
  );
}
