"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaWhatsapp, FaTimes, FaTruck, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const whatsappNumber = "971528938262"; // Format: country code without plus for URL
  const phoneNumber = "+971 52 893 8262"; // Display format
  const phoneNumberClean = "+971528938262"; // Clean format for links

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Fleet", path: "/fleet" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-navy-900 text-white py-2 fixed top-0 left-0 right-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline-block">🚚 Premium Pickup Rental Services in UAE</span>
              <span className="hidden md:inline-block text-yellow-500">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-4">
              {/* Phone Number with Call Button */}
              <a 
                href={`tel:${phoneNumberClean}`}
                className="flex items-center space-x-2 hover:text-yellow-500 transition-colors duration-300 group"
              >
                <div className="bg-yellow-500 p-1.5 rounded-full group-hover:bg-yellow-400 transition-colors">
                  <FaPhoneAlt className="text-navy-900 text-xs" />
                </div>
                <span className="font-medium hidden sm:inline">{phoneNumber}</span>
                <span className="font-medium sm:hidden">Call Us</span>
              </a>
              
              {/* WhatsApp Button in Top Bar (Mobile) */}
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-green-500 transition-colors duration-300 group sm:hidden"
              >
                <div className="bg-green-500 p-1.5 rounded-full group-hover:bg-green-400 transition-colors">
                  <FaWhatsapp className="text-white text-xs" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-white backdrop-blur-md shadow-lg py-2" : "bg-white py-4"
        }`}
        style={{ top: '40px' }} // Offset for top bar
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <img
                  src="/assets/logo.png"
                  alt="Ummal Quwain Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-navy-900">
                  Ummal Quwain
                </h1>
                <p className="text-xs text-yellow-500 -mt-1 font-medium">
                  Rental Pickup Service
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-lg font-medium transition-colors duration-300 relative group ${
                    pathname === item.path
                      ? "text-yellow-500"
                      : "text-navy-900 hover:text-yellow-500"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full ${
                      pathname === item.path ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              ))}
              
              {/* WhatsApp Button in Navbar */}
              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg
                         hover:bg-green-700 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <FaWhatsapp className="text-xl relative z-10" />
                <span className="relative z-10 font-medium">WhatsApp</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-navy-900 text-2xl p-2 hover:bg-yellow-500/10 rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <div className="flex flex-col space-y-4 pb-4 bg-white rounded-lg shadow-xl p-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg py-2 px-4 rounded-lg transition-colors duration-300 ${
                        pathname === item.path
                          ? "bg-yellow-500 text-navy-900 font-semibold"
                          : "text-navy-900 hover:bg-yellow-500/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Contact Options */}
                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    {/* Call Button */}
                    <a
                      href={`tel:${phoneNumberClean}`}
                      className="flex items-center justify-center space-x-3 bg-navy-900 text-white px-4 py-3 rounded-lg
                               hover:bg-navy-800 transition-all duration-300 w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaPhone className="text-yellow-500" />
                      <span className="font-medium">Call Us: {phoneNumber}</span>
                    </a>
                    
                    {/* WhatsApp Button */}
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 bg-green-600 text-white px-4 py-3 rounded-lg
                               hover:bg-green-700 transition-all duration-300 w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaWhatsapp className="text-xl" />
                      <span className="font-medium">WhatsApp Us</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Floating WhatsApp Button (Hidden on Desktop since we have navbar button) */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg
                 hover:bg-green-700 transition-colors duration-300 z-50 flex items-center justify-center
                 md:hidden w-14 h-14"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>
    </>
  );
};

export default Navbar;