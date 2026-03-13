'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al Ali',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      content: 'Excellent service! The pickup was clean, well-maintained, and delivered on time. The team was very professional and helpful. Will definitely rent again.',
      rating: 5,
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Fatima Al Mansouri',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1494790108777-847ef6a5b5f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      content: 'I rented a pickup for moving furniture. The process was smooth, prices were reasonable, and the vehicle was in great condition. Highly recommended!',
      rating: 5,
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Mohammed Al Zaabi',
      role: 'Contractor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      content: 'Best pickup rental service in Umm Al Quwain! I rent regularly for my construction business. They always have well-maintained vehicles and offer great rates.',
      rating: 5,
      date: '3 weeks ago',
    },
    {
      id: 4,
      name: 'Sara Al Shehhi',
      role: 'Event Planner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      content: 'Used their service for an event setup. The team was punctual, professional, and the pickup was perfect for transporting equipment. Great experience!',
      rating: 4,
      date: '2 months ago',
    },
    {
      id: 5,
      name: 'Khalid Al Nuaimi',
      role: 'Farmer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      content: 'Regular customer for my farm supplies. Always reliable, good prices, and friendly staff. The 24/7 service is a lifesaver sometimes!',
      rating: 5,
      date: '1 week ago',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <FaQuoteLeft className="text-4xl text-yellow-500 mb-6 opacity-50" />
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].date}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < testimonials[currentIndex].rating
                          ? 'text-yellow-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 
                     w-10 h-10 bg-navy-900 text-white rounded-full flex items-center justify-center
                     hover:bg-yellow-500 hover:text-navy-900 transition-colors duration-300
                     shadow-lg"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4
                     w-10 h-10 bg-navy-900 text-white rounded-full flex items-center justify-center
                     hover:bg-yellow-500 hover:text-navy-900 transition-colors duration-300
                     shadow-lg"
          >
            <FaChevronRight />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-yellow-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials