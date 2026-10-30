import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User, LogOut, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import GharSansarLogo from "./GharSansarLogo";

const searchList = [
  "Wallpaper Rolls",
  "Wallpapers",
  "3D Wallpapers",
  "Wall Art Effect",
  "Vinyl Flooring",
  "Natural Vertical Garden",
  "Blinds",
  "Automation Motorised Blinds",
  "Gym Flooring",
  "Artificial Wall Garden",
  "ICU Flooring",
  "Sliding & Metal Door",
  "Invisible Grill",
  "Wooden Flooring",
  "Curtains",
  "Interior Decor",
  "Festive Gifts",
  "Return Gifts",
  "Pooja Decor",
  "Designer Sofa",
  "Luxury Table",
];

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 90) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  const location = useLocation();

  const desktopSearchRef = useRef<HTMLFormElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setUserMenuOpen(false);
    setShowSuggestions(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const updateSearchTerm = (value: string) => {
    setSearchTerm(value);
    if (!value.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const filtered = searchList.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  };

  const onSuggestionSelect = (value: string) => {
    setSearchTerm(value);
    setShowSuggestions(false);
    navigate(`/interior-design?category=${encodeURIComponent(value)}`);
  };

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/interior-design?category=${encodeURIComponent(searchTerm.trim())}`);
    setSearchTerm("");
    setShowSuggestions(false);
  };

  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/interior-design", label: "Interior Design" },
    { path: "/products", label: "Products" },
    { path: "/return-gifts", label: "Festive Gifts" },
    { path: "/services", label: "Services" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div
          className={`w-full transition-all duration-300 ${
            isTransparent
              ? "bg-transparent border-b border-transparent"
              : "bg-[#F5F0EA]/95 backdrop-blur-md shadow-xs border-b border-[#E2D8C9]"
          }`}
        >
          <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
            {/* 1. Left: Brand Logo matching design */}
            <div className="flex items-center shrink-0">
              <GharSansarLogo variant={isTransparent ? "light" : "dark"} />
            </div>

            {/* 2. Center: Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs xl:text-[13px] font-medium"
              role="navigation"
            >
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative py-1 transition-colors duration-200 ${
                      isTransparent
                        ? active
                          ? "text-white font-semibold"
                          : "text-white/80 hover:text-white"
                        : active
                          ? "text-gray-900 font-semibold"
                          : "text-gray-650 hover:text-gray-900"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C26847] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 3. Right: Search bar & User/Wishlist/Cart/Menu icons matching design */}
            <div className="flex items-center space-x-2.5 sm:space-x-3.5 shrink-0">
              {/* Pill Search Bar - visible on tablet/desktop */}
              <div className="relative hidden md:block">
                <form
                  ref={desktopSearchRef}
                  onSubmit={onSearchSubmit}
                  className="flex items-center relative"
                >
                  <div
                    className={`flex items-center w-40 lg:w-48 xl:w-56 h-9 rounded-full px-3.5 transition-all ${
                      isTransparent
                        ? "bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-gray-800 shadow-xs"
                        : "bg-[#F3ECE1] hover:bg-white border border-[#E2D8C9] text-gray-800 shadow-xs"
                    }`}
                  >
                    <input
                      type="search"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => updateSearchTerm(e.target.value)}
                      onFocus={() => {
                        if (suggestions.length > 0) setShowSuggestions(true);
                      }}
                      className="w-full bg-transparent text-xs font-normal text-gray-800 placeholder:text-gray-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Submit search"
                      className="text-gray-600 hover:text-gray-900 ml-1.5 cursor-pointer"
                    >
                      <Search className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Suggestions dropdown */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full right-0 mt-2 w-60 bg-white/95 backdrop-blur-md border border-[#E8E2D5] rounded-xl shadow-xl py-2 z-50 overflow-hidden">
                      {suggestions.map((s, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#FAF7F2] hover:text-[#C26847] transition-colors cursor-pointer"
                          onClick={() => onSuggestionSelect(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </form>
              </div>

              {/* Profile Icon */}
              {user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setUserMenuOpen((v) => !v)}
                    aria-label="User profile"
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors ${
                      isTransparent
                        ? "text-white hover:text-white/80"
                        : "text-gray-800 hover:text-gray-950"
                    }`}
                  >
                    <User className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-52 bg-white border border-[#E8E2D5] rounded-xl shadow-xl p-2 z-50">
                      <div className="px-3 py-2 border-b border-gray-100 mb-1">
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                          Signed in as
                        </p>
                        <p className="text-xs font-bold text-gray-900 truncate">
                          {user.email || user.name}
                        </p>
                      </div>
                      <Link
                        to="/profile"
                        className="block px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-[#FAF7F2] hover:text-[#C26847] rounded-lg transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          navigate("/");
                        }}
                        className="w-full flex items-center px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-1"
                      >
                        <LogOut className="mr-2 w-3.5 h-3.5" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  aria-label="Sign In"
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors ${
                    isTransparent
                      ? "text-white hover:text-white/80"
                      : "text-gray-800 hover:text-gray-950"
                  }`}
                >
                  <User className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </Link>
              )}

              {/* Wishlist Heart Icon */}
              <Link
                to="/products"
                aria-label="Wishlist"
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors relative ${
                  isTransparent
                    ? "text-white hover:text-white/80"
                    : "text-gray-800 hover:text-gray-950"
                }`}
              >
                <Heart className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                {wishlist.length > 0 && (
                  <span className="absolute 1 -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#C26847] text-white text-[9px] font-bold flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart Icon with Red/Orange Badge matching design */}
              <Link
                to="/cart"
                aria-label="Shopping Cart"
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors relative ${
                  isTransparent
                    ? "text-white hover:text-white/80"
                    : "text-gray-800 hover:text-gray-950"
                }`}
              >
                <ShoppingCart className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                {/* Red/Orange badge with total items count matching design */}
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#D45936] text-white text-[9.5px] font-bold flex items-center justify-center shadow-xs">
                  {totalItems || 0}
                </span>
              </Link>

              {/* Hamburger Menu Icon */}
              <button
                aria-label="Toggle navigation menu"
                onClick={() => setMenuOpen((v) => !v)}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors ${
                  isTransparent
                    ? "text-white hover:text-white/80"
                    : "text-gray-800 hover:text-gray-950"
                }`}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / Full Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-[82%] max-w-sm bg-[#FAF7F2] shadow-2xl border-l border-[#E8E2D5] z-[999] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E2D5]">
                  <GharSansarLogo variant="dark" />
                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-1.5 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-200/50"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Search input */}
                <form onSubmit={onSearchSubmit} className="mb-6 relative">
                  <input
                    type="search"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white border border-[#E4DDD3] rounded-full pl-4 pr-10 py-2.5 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#C26847]"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </form>

                <nav className="flex flex-col space-y-3.5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-sm font-serif font-semibold py-1.5 border-b border-gray-200/40 flex items-center justify-between transition-colors ${
                        isActive(link.path)
                          ? "text-[#C26847]"
                          : "text-gray-800 hover:text-[#C26847]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive(link.path) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C26847]" />
                      )}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#E8E2D5] text-xs text-gray-500">
                <p className="font-serif font-bold text-gray-800 text-sm mb-1">
                  Ghar Sansar Vijayawada
                </p>
                <p>+91 9701990090</p>
                <p>gharsansarvij@gmail.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
