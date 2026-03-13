'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaTachometerAlt, FaUsers, FaGasPump, FaStar, FaSearch, FaFilter, FaWhatsapp } from 'react-icons/fa'

export default function FleetPage() {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const whatsappNumber = "971528938262" // Format: country code without plus for URL
  const whatsappMessage = "Hi, I'm interested in renting the"

  const vehicles = [
    {
      id: 1,
      name: 'Toyota Hilux',
      category: 'standard',
      image: '/assets/fleet/1.jpeg',
      capacity: '1.5 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.8,
      available: true,
    },
    {
      id: 2,
      name: 'Nissan Navara',
      category: 'standard',
      image: '/assets/fleet/2.jpeg',
      capacity: '1.2 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.7,
      available: true,
    },
    {
      id: 3,
      name: 'Ford Ranger',
      category: 'premium',
      image: '/assets/fleet/3.jpeg',
      capacity: '1.8 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.9,
      available: true,
    },
    {
      id: 4,
      name: 'Mitsubishi L200',
      category: 'economy',
      image: '/assets/fleet/4.jpeg',
      capacity: '1.0 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.6,
      available: true,
    },
    {
      id: 5,
      name: 'Isuzu D-Max',
      category: 'heavy',
      image: '/assets/fleet/5.jpeg',
      capacity: '2.0 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.8,
      available: true,
    },
    {
      id: 6,
      name: 'Chevrolet Silverado',
      category: 'premium',
      image: '/assets/fleet/6.jpeg',
      capacity: '2.5 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.9,
      available: true,
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

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Fleet
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl"
          >
            Choose from our wide selection of well-maintained pickup trucks for any requirement
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-12">
        <div className="container-custom">
          {filteredVehicles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No vehicles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group"
                >
                  <div className="relative overflow-hidden h-64">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {!vehicle.available && (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">Currently Unavailable</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-yellow-500 text-navy-900 px-3 py-1 rounded-full font-semibold flex items-center space-x-1">
                      <FaStar className="text-sm" />
                      <span>{vehicle.rating}</span>
                    </div>
                  </div>

                  <div className="p-6">

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <FaTachometerAlt className="text-xl text-yellow-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">{vehicle.capacity}</p>
                      </div>
                      <div className="text-center">
                        <FaUsers className="text-xl text-yellow-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">{vehicle.seats} Seats</p>
                      </div>
                      <div className="text-center">
                        <FaGasPump className="text-xl text-yellow-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">{vehicle.fuel}</p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Floating WhatsApp Button for quick contact */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg
                 hover:bg-green-700 transition-colors duration-300 z-50 flex items-center justify-center
                 md:w-16 md:h-16 w-14 h-14"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
      >
        <FaWhatsapp className="md:text-3xl text-2xl" />
      </motion.a>
    </div>
  )
}