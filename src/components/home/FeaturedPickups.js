'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaGasPump, 
  FaStar, 
  FaCrown, 
  FaWhatsapp,
  FaCalendarCheck,
  FaShieldAlt,
  FaSnowflake,
  FaArrowRight,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa'

const FeaturedPickups = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Toyota Hilux',
      image: '/assets/fleet/1.jpeg',
      price: 250,
      capacity: '3 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.8,
      reviews: 124,
      transmission: 'Manual',
      year: 2023,
      features: ['4x4', 'Air Conditioning', 'Bluetooth', 'Reverse Camera'],
      available: true,
    },
    {
      id: 2,
      name: 'Cran Pickup Truck',
      image: '/assets/fleet/2.jpeg',
      price: 230,
      capacity: 'Cran',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.7,
      reviews: 98,
      transmission: 'Manual',
      year: 2022,
      features: ['Crane', '4x4', 'Leather Seats', 'Navigation'],
      available: true,
    },
    {
      id: 3,
      name: '1 Ton Pickup Truck',
      image: '/assets/fleet/3.jpeg',
      price: 280,
      capacity: '1.0 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.9,
      reviews: 156,
      transmission: 'Automatic',
      year: 2023,
      features: ['4x4', 'Parking Sensors', 'Cruise Control', 'Bluetooth'],
      available: true,
    },
  ]

  const whatsappNumber = "971528938262"
  const whatsappMessage = "Hi, I'm interested in renting the"

  const handleWhatsAppInquiry = (vehicleName) => {
    const message = encodeURIComponent(`${whatsappMessage} ${vehicleName}`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full font-semibold text-sm mb-4">
            Best Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Featured Pickup Trucks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular vehicles, hand-picked for their exceptional 
            performance and reliability
          </p>
        </motion.div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-navy-900 px-3 py-1.5 rounded-full font-semibold flex items-center space-x-1 shadow-lg z-20">
                  <FaStar className="text-yellow-500" />
                  <span>{vehicle.rating}</span>
                  <span className="text-gray-400 text-sm ml-1">({vehicle.reviews})</span>
                </div>

                {/* Featured Badge */}
                {index === 0 && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-1.5 rounded-full font-semibold flex items-center space-x-1 shadow-lg z-20">
                    <FaCrown className="text-sm" />
                    <span className="text-sm">Most Popular</span>
                  </div>
                )}

                {/* Availability Badge */}
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg z-20">
                  Available Now
                </div>

                {/* Quick Action Buttons - Appear on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                  <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <button
                      onClick={() => handleWhatsAppInquiry(vehicle.name)}
                      className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors shadow-lg"
                    >
                      <FaWhatsapp className="text-xl" />
                    </button>
                    <button className="bg-navy-900 text-white p-3 rounded-full hover:bg-navy-800 transition-colors shadow-lg">
                      <FaPhone className="text-xl" />
                    </button>
                    <button className="bg-yellow-500 text-navy-900 p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg">
                      <FaEnvelope className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Vehicle Name and Price */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-1">{vehicle.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Ready for immediate pickup
                    </p>
                  </div>
                </div>

                {/* Specs Grid - Enhanced */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                  <div className="text-center">
                    <div className="bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FaTachometerAlt className="text-xl text-yellow-600" />
                    </div>
                    <p className="text-xs text-gray-500">Capacity</p>
                    <p className="font-semibold text-navy-900">{vehicle.capacity}</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FaUsers className="text-xl text-yellow-600" />
                    </div>
                    <p className="text-xs text-gray-500">Seats</p>
                    <p className="font-semibold text-navy-900">{vehicle.seats}</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FaGasPump className="text-xl text-yellow-600" />
                    </div>
                    <p className="text-xs text-gray-500">Fuel</p>
                    <p className="font-semibold text-navy-900">{vehicle.fuel}</p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4 p-3 bg-gray-50 rounded-lg">
                  <span className="flex items-center">
                    <FaCalendarCheck className="mr-2 text-yellow-500" />
                    {vehicle.year} Model
                  </span>
                  <span className="flex items-center">
                    <FaShieldAlt className="mr-2 text-yellow-500" />
                    {vehicle.transmission}
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {vehicle.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full flex items-center"
                    >
                      <FaShieldAlt className="mr-1 text-yellow-500 text-xs" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleWhatsAppInquiry(vehicle.name)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold
                             hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105
                             flex items-center justify-center space-x-2 shadow-lg shadow-green-500/30"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Inquire Now</span>
                  </button>
                  <Link 
                    href="/fleet"
                    className="flex-1 bg-gradient-to-r from-navy-900 to-navy-800 text-white py-3 px-4 rounded-xl font-semibold
                             hover:from-navy-800 hover:to-navy-700 transition-all duration-300 transform hover:scale-105
                             flex items-center justify-center space-x-2 shadow-lg shadow-navy-900/30"
                  >
                    <span>View Details</span>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-bl-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-tr-3xl -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/fleet" 
            className="group relative inline-flex items-center bg-navy-900 text-white px-10 py-4 rounded-full font-semibold 
                     overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              Explore All Vehicles
              <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Link>
          <p className="text-gray-500 mt-4 text-sm">
            Over 20+ vehicles available for immediate rental
          </p>
        </motion.div>

        {/* Floating WhatsApp Button (optional - can be removed if you already have it globally) */}
        <motion.a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg
                   hover:bg-green-700 transition-colors duration-300 z-50 flex items-center justify-center
                   md:w-14 md:h-14 w-12 h-12 group"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ scale: 1.1 }}
        >
          <FaWhatsapp className="md:text-2xl text-xl" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Quick Inquiry
          </span>
        </motion.a>
      </div>
    </section>
  )
}

export default FeaturedPickups