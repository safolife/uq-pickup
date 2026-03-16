'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaTruck, 
  FaClock, 
  FaShieldAlt, 
  FaHeadset,
  FaMapMarkedAlt,
  FaWallet,
  FaOilCan,
  FaTools,
  FaArrowUp,
  FaUserTie,
  FaTruckPickup,
  FaWrench,
  FaRoad,
  FaCarCrash
} from 'react-icons/fa'

const Services = () => {
  const services = [
    // New services added at the top
    {
      icon: <FaArrowUp className="text-4xl" />,
      title: 'Car Lifting Service',
      description: 'Professional vehicle lifting and towing services for your convenience. Safe and reliable handling of all vehicle types.',
      features: ['24/7 emergency towing', 'Professional equipment', 'Safe handling', 'Quick response'],
      highlight: true,
    },
    {
      icon: <FaUserTie className="text-4xl" />,
      title: 'Safe Driver Service',
      description: 'Professional drivers available for your rental. Sit back and relax while our expert handles the driving.',
      features: ['Licensed professionals', 'Multi-lingual drivers', 'Flexible hours', 'Competitive rates'],
      highlight: true,
    },
    {
      icon: <FaTruck className="text-4xl" />,
      title: 'Daily Rentals',
      description: 'Flexible daily rental options for your short-term needs. Perfect for moving or weekend projects.',
      features: ['24-hour minimum', 'Unlimited mileage', 'Full insurance'],
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: 'Weekly/Monthly',
      description: 'Special discounts for weekly and monthly rentals. Ideal for long-term projects or business needs.',
      features: ['Up to 30% discount', 'Flexible terms', 'Priority support'],
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Fully Insured',
      description: 'All vehicles come with comprehensive insurance coverage for your peace of mind.',
      features: ['Comprehensive cover', 'Roadside assistance', 'Zero deductible options'],
    },
    {
      icon: <FaHeadset className="text-4xl" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for your peace of mind. We\'re always here to help.',
      features: ['Emergency assistance', 'Multi-language support', 'Quick response'],
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl" />,
      title: 'Free Delivery',
      description: 'Free pickup and delivery within Umm Al Quwain city limits. Save time and money.',
      features: ['Within 30 minutes', 'Free of charge', 'Any location'],
    },
    {
      icon: <FaWallet className="text-4xl" />,
      title: 'Best Prices',
      description: 'Competitive rates with no hidden charges. Best price guaranteed in Umm Al Quwain.',
      features: ['Price match', 'No hidden fees', 'Secure payment'],
    },
    {
      icon: <FaOilCan className="text-4xl" />,
      title: 'Maintained Vehicles',
      description: 'All vehicles regularly serviced and maintained to the highest standards.',
      features: ['Regular servicing', 'Clean and sanitized', 'Latest models'],
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: 'Recovery Service',
      description: '24/7 recovery service included with every rental. Drive with confidence.',
      features: ['Quick response', 'Professional team', 'Towing service'],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full font-semibold text-sm mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive pickup rental solutions tailored to your needs, 
            plus specialized services for your convenience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl 
                        transition-all duration-500 cursor-pointer overflow-hidden
                        ${service.highlight 
                          ? 'border-2 border-yellow-500 bg-gradient-to-br from-yellow-50 to-white' 
                          : 'border border-gray-100'}`}
            >
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-yellow-500 rounded-full blur-2xl"></div>
                <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-navy-900 rounded-full blur-2xl"></div>
              </div>

              {/* Icon Container */}
              <div className={`relative w-20 h-20 rounded-xl flex items-center justify-center mb-6
                            transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3
                            ${service.highlight 
                              ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' 
                              : 'bg-gradient-to-br from-yellow-400 to-yellow-600'}`}>
                <div className="text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Animated rings for highlighted services */}
                {service.highlight && (
                  <>
                    <div className="absolute inset-0 rounded-xl animate-ping bg-yellow-500 opacity-20"></div>
                    <div className="absolute -inset-1 rounded-xl bg-yellow-500 opacity-20 blur-md"></div>
                  </>
                )}
              </div>
              
              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 transition-colors duration-300
                           ${service.highlight 
                             ? 'text-navy-900 group-hover:text-yellow-600' 
                             : 'text-navy-900 group-hover:text-yellow-600'}`}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-start group-hover:text-gray-600">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0
                                   ${service.highlight 
                                     ? 'bg-yellow-500' 
                                     : 'bg-yellow-500'}`}>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Quick action for highlighted services */}
              {service.highlight && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 w-full py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 
                           text-white rounded-lg font-semibold text-sm
                           hover:from-yellow-600 hover:to-yellow-700 
                           transition-all duration-300 transform hover:scale-105
                           flex items-center justify-center space-x-2"
                >
                  <span>Inquire Now</span>
                  <FaArrowUp className="text-xs rotate-45" />
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Service Highlights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Need Special Assistance?</h3>
              <p className="text-gray-300 max-w-2xl">
                Whether you need vehicle lifting services or a professional driver, 
                we've got you covered 24/7.
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-navy-900 px-6 py-3 rounded-xl font-semibold
                               hover:bg-yellow-600 transition-colors duration-300">
                Request Car Lifting
              </button>
              <button className="bg-white text-navy-900 px-6 py-3 rounded-xl font-semibold
                               hover:bg-gray-100 transition-colors duration-300">
                Hire a Driver
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services