'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  FaMedal, 
  FaUsers, 
  FaClock, 
  FaShieldAlt,
  FaHandshake,
  FaStar
} from 'react-icons/fa'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaMedal className="text-3xl" />,
      title: '10+ Years Experience',
      description: 'Serving Umm Al Quwain with excellence and reliability since 2013.',
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: '1000+ Happy Customers',
      description: 'Trusted by individuals and businesses for their pickup rental needs.',
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: '24/7 Availability',
      description: 'Round-the-clock service to meet your urgent requirements.',
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Safety First',
      description: 'All vehicles regularly inspected and maintained for your safety.',
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: 'Best Price Guarantee',
      description: 'Competitive rates with no hidden charges or surprises.',
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: 'Premium Service',
      description: 'Exceptional customer service from booking to return.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We pride ourselves on providing the best pickup rental service in Umm Al Quwain. 
              Here's why customers trust us:
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <div className="text-navy-900">
                      {reason.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats and Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/fleet/6.jpeg"
                alt="Our Team"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-500">50+</div>
                    <div className="text-sm">Vehicles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-500">10+</div>
                    <div className="text-sm">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-500">24/7</div>
                    <div className="text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -top-6 -right-6 bg-yellow-500 rounded-full p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-900">#1</div>
                <div className="text-sm text-navy-900 font-semibold">Rated</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs