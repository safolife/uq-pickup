'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaTruck, FaShieldAlt, FaClock, FaStar } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-yellow-500/10 text-yellow-600 px-4 py-2 rounded-full mb-6">
              <FaStar className="mr-2" />
              <span className="font-semibold">#1 Pickup Rental in Umm Al Quwain</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-6">
              Reliable{' '}
              <span className="text-yellow-500 relative">
                Pickup
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q25,0 50,5 T100,5" stroke="currentColor" strokeWidth="2" fill="none" className="text-yellow-500"/>
                </svg>
              </span>{' '}
              Rentals
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Your trusted partner for all pickup rental needs in Umm Al Quwain. 
              Affordable rates, well-maintained vehicles, and 24/7 support.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/booking" className="btn-primary group">
                Rent Now
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
              </Link>
              <Link href="/fleet" className="btn-secondary group">
                View Fleet
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-navy-900">50+</div>
                <div className="text-gray-600">Vehicles</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-navy-900">1000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-navy-900">24/7</div>
                <div className="text-gray-600">Support</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-navy-900 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <img
                src="/assets/fleet/1.jpeg"
                alt="Pickup Truck"
                className="rounded-3xl shadow-2xl relative z-10 w-full h-auto object-cover"
              />
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl z-20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="text-navy-900 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Fully Insured</p>
                  <p className="text-sm text-gray-600">100% coverage</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-navy-900 p-4 rounded-lg shadow-xl z-20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <FaClock className="text-navy-900 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-white">24/7 Service</p>
                  <p className="text-sm text-gray-300">Always available</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-navy-900 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-yellow-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero