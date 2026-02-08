"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChefHat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Jeśli to link wewnętrzny (anchor)
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Zamknij menu natychmiast dla lepszej responsywności
        setIsMobileMenuOpen(false);

        // Czekaj aż menu się zamknie, potem scrolluj
        setTimeout(() => {
          // Pobierz aktualną wysokość navbara
          const navbar = document.querySelector("nav");
          const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;

          // Oblicz dokładną pozycję elementu względem obecnego scrollu
          const elementRect = targetElement.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const targetPosition = absoluteElementTop - navbarHeight - 20;

          // Instant scroll bez smooth - działa lepiej na iOS
          window.scrollTo({
            top: targetPosition,
            behavior: "auto",
          });
        }, 100);
      }
    }
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Future", href: "#future" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-lg py-4"
          : "bg-white/90 backdrop-blur-sm py-6 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-2 shadow-md group-hover:shadow-lg transition-shadow">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Chef<span className="text-gradient">AI</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <motion.a
              href="https://chef-ai-taupe.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://chef-ai-taupe.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold shadow-lg w-full text-center mt-2 hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
