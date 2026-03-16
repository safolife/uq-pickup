import React from 'react'
import Link from 'next/link'
import { FaTruck, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/assets/logo.png" alt="Ummal Quwain Logo" className="w-10 h-10 object-contain" />
              <div>
                <h3 className="text-xl font-bold">Ummal Quwain</h3>
                <p className="text-sm text-yellow-500">Rental Pickup Service</p>
              </div>
            </div>
            <p className="text-gray-300">
              Your trusted partner for all pickup rental needs in Umm Al Quwain. 
              Quality vehicles, competitive rates, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Daily Rentals</li>
              <li className="text-gray-300">Weekly Rentals</li>
              <li className="text-gray-300">Monthly Rentals</li>
              <li className="text-gray-300">Long-term Leasing</li>
              <li className="text-gray-300">Corporate Accounts</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                 New Industrial Area, Umm Al Quwain City, UAE
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-yellow-500 flex-shrink-0" />
                <span className="text-gray-300">+971 52 893 8262</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-500 flex-shrink-0" />
                <span className="text-gray-300">ik3043378@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Ummal Quwain Rental Pickup Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer