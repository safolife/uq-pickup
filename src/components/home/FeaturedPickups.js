'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaTachometerAlt, FaUsers, FaGasPump, FaStar, FaCrown, FaWhatsapp } from 'react-icons/fa'

const FeaturedPickups = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Toyota Hilux',
      image: '/assets/fleet/1.jpeg',
      price: 250,
      capacity: '1.5 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.8,
      reviews: 124,
      features: ['4x4', 'Air Conditioning', 'Bluetooth'],
    },
    {
      id: 2,
      name: 'Nissan Navara',
      image: '/assets/fleet/2.jpeg',
      price: 230,
      capacity: '1.2 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.7,
      reviews: 98,
      features: ['4x4', 'Leather Seats', 'Navigation'],
    },
    {
      id: 3,
      name: 'Ford Ranger',
      image: '/assets/fleet/3.jpeg',
      price: 280,
      capacity: '1.8 tons',
      seats: 5,
      fuel: 'Diesel',
      rating: 4.9,
      reviews: 156,
      features: ['4x4', 'Parking Sensors', 'Cruise Control'],
    },
  ]

  const whatsappNumber = "+971528938262" // Format: country code without plus for URL
  const whatsappMessage = "Hi, I'm interested in renting the"

  const handleWhatsAppInquiry = (vehicleName) => {
    const message = encodeURIComponent(`${whatsappMessage} ${vehicleName}`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Pickups</h2>
          <p className="section-subtitle">
            Choose from our wide range of well-maintained pickup trucks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="card group"
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-yellow-500 text-navy-900 px-3 py-1 rounded-full font-semibold flex items-center space-x-1 z-10">
                  <FaStar className="text-sm" />
                  <span>{vehicle.rating}</span>
                </div>

                {/* Featured Badge */}
                {index === 0 && (
                  <div className="absolute top-4 left-4 bg-navy-900 text-yellow-500 px-3 py-1 rounded-full font-semibold flex items-center space-x-1 z-10">
                    <FaCrown className="text-sm" />
                    <span className="text-sm">Most Popular</span>
                  </div>
                )}
              </div>

              <div className="p-6">

                <div className="grid grid-cols-3 gap-4 mb-4">
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

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {vehicle.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-navy-900 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold">{vehicle.rating}</span>
                    <span className="text-gray-500">({vehicle.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/fleet" className="btn-secondary inline-flex items-center group">
            View All Vehicles
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Floating WhatsApp Button for quick contact */}
        
      </div>
    </section>
  )
}

export default FeaturedPickups