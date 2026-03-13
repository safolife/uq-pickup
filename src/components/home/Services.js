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
  FaTools
} from 'react-icons/fa'

const Services = () => {
  const services = [
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
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive pickup rental solutions tailored to your needs
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
              className="bg-gray-50 p-6 rounded-xl group hover:bg-navy-900 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-4 
                            group-hover:bg-white transition-all duration-300 transform group-hover:rotate-6">
                <div className="text-navy-900 group-hover:text-yellow-500 transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-500 group-hover:text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services