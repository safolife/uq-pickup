'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaGasPump, 
  FaStar, 
  FaSearch, 
  FaFilter, 
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaCalendarCheck,
  FaShieldAlt,
  FaSnowflake,
  FaTools
} from 'react-icons/fa'

export default function FleetPage() {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [hoveredCard, setHoveredCard] = useState(null)

  const whatsappNumber = "971528938262"
  const whatsappMessage = "Hi, I'm interested in renting the"

  const vehicles = [
    {
      id: 1,
      name: '3 Ton Pickup Truck',
      category: 'standard',
      image: '/assets/fleet/1.jpeg',
      capacity: '3 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.8,
      available: true,
      price: 'AED 299/day',
      features: ['4x4', 'AC', 'Bluetooth', 'Reverse Camera'],
      transmission: 'Manual',
      year: 2023,
    },
    {
      id: 2,
      name: 'Cran Pickup Truck',
      category: 'standard',
      image: '/assets/fleet/2.jpeg',
      capacity: 'Cran',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.7,
      available: true,
      price: 'AED 259/day',
      features: ['Crane', '4x4', 'AC', 'Power Steering'],
      transmission: 'Manual',
      year: 2022,
    },
    {
      id: 3,
      name: '1 ton Pickup Truck',
      category: 'premium',
      image: '/assets/fleet/3.jpeg',
      capacity: '1.0 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.9,
      available: true,
      price: 'AED 349/day',
      features: ['4x4', 'Leather Seats', 'Navigation', 'Bluetooth'],
      transmission: 'Automatic',
      year: 2023,
    },
    {
      id: 4,
      name: '10 ton Pickup Truck',
      category: 'economy',
      image: '/assets/fleet/4.jpeg',
      capacity: '10.0 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.6,
      available: true,
      price: 'AED 399/day',
      features: ['Heavy Duty', 'AC', 'Power Windows', 'Cruise Control'],
      transmission: 'Manual',
      year: 2022,
    },
    {
      id: 5,
      name: 'Troller T4 Pickup Truck',
      category: 'heavy',
      image: '/assets/fleet/5.jpeg',
      capacity: '5.0 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.8,
      available: true,
      price: 'AED 379/day',
      features: ['4x4', 'Off-road', 'Snorkel', 'Winch'],
      transmission: 'Manual',
      year: 2023,
    },
  ]

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesFilter = filter === 'all' || vehicle.category === filter
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const handleWhatsAppInquiry = (vehicleName) => {
    const message = encodeURIComponent(`${whatsappMessage} ${vehicleName}`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const categories = ['all', 'standard', 'premium', 'economy', 'heavy']

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header with animated background */}
      <section className="relative bg-navy-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        <div className="container-custom relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
          >
            Our Premium Fleet
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            Discover our collection of meticulously maintained pickup trucks, 
            each ready to power your next adventure or business operation
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-20 z-30 border-b shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full font-medium capitalize transition-all transform hover:scale-105 ${
                    filter === cat
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg shadow-yellow-500/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-16">
        <div className="container-custom">
          {filteredVehicles.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FaFilter className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-2xl text-gray-600 mb-2">No vehicles found</p>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(vehicle.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-navy-900 px-3 py-1.5 rounded-full font-semibold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-yellow-500" />
                      <span>{vehicle.rating}</span>
                      <span className="text-gray-400 text-sm ml-1">(120+)</span>
                    </div>

                    {/* Availability Badge */}
                    <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full font-semibold text-sm shadow-lg ${
                      vehicle.available 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {vehicle.available ? 'Available' : 'Booked'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Vehicle Name */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-navy-900 mb-1">{vehicle.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Ready for pickup
                      </p>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
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

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full flex items-center">
                            <FaShieldAlt className="mr-1 text-yellow-500 text-xs" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-6 p-3 bg-gray-50 rounded-lg">
                      <span className="flex items-center">
                        <FaCalendarCheck className="mr-2 text-yellow-500" />
                        {vehicle.year} Model
                      </span>
                      <span className="flex items-center">
                        <FaTools className="mr-2 text-yellow-500" />
                        {vehicle.transmission}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleWhatsAppInquiry(vehicle.name)}
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold
                                 hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105
                                 flex items-center justify-center space-x-2 shadow-lg shadow-green-500/30"
                      >
                        <FaWhatsapp className="text-xl" />
                        <span>Inquire</span>
                      </button>
                      <button
                        className="flex-1 bg-gradient-to-r from-navy-900 to-navy-800 text-white py-3 px-4 rounded-xl font-semibold
                                 hover:from-navy-800 hover:to-navy-700 transition-all duration-300 transform hover:scale-105
                                 flex items-center justify-center space-x-2 shadow-lg shadow-navy-900/30"
                      >
                        <FaPhone className="text-xl" />
                        <span>Call</span>
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  {hoveredCard === vehicle.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent pointer-events-none"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Floating Action Buttons */}
      <motion.div
        className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-4 rounded-full shadow-lg
                   hover:bg-green-700 transition-all duration-300 flex items-center justify-center
                   md:w-14 md:h-14 w-12 h-12 relative group"
          whileHover={{ scale: 1.1 }}
        >
          <FaWhatsapp className="md:text-2xl text-xl" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp Us
          </span>
        </motion.a>
        
        <motion.a
          href="tel:+971528938262"
          className="bg-navy-900 text-white p-4 rounded-full shadow-lg
                   hover:bg-navy-800 transition-all duration-300 flex items-center justify-center
                   md:w-14 md:h-14 w-12 h-12 relative group"
          whileHover={{ scale: 1.1 }}
        >
          <FaPhone className="md:text-2xl text-xl" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Call Us
          </span>
        </motion.a>
      </motion.div>
    </div>
  )
}