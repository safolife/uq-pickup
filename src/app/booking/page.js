'use client'

import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import BookingForm from '@/components/forms/BookingForm'
import { FaShieldAlt, FaClock, FaTruck } from 'react-icons/fa'

function BookingContent() {
  const searchParams = useSearchParams()
  const vehicleId = searchParams.get('vehicle')

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
            Book Your Pickup
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl"
          >
            Fill in the details below and we'll get your pickup ready
          </motion.p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <BookingForm vehicleId={vehicleId} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Why Book With Us?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaShieldAlt className="text-navy-900 text-sm" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">Best Price Guarantee</h4>
                      <p className="text-sm text-gray-600">We match any genuine quote</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaClock className="text-navy-900 text-sm" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">24/7 Support</h4>
                      <p className="text-sm text-gray-600">Round-the-clock assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaTruck className="text-navy-900 text-sm" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">Free Delivery</h4>
                      <p className="text-sm text-gray-600">Within Umm Al Quwain city</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-6 pt-6">
                  <h4 className="font-semibold text-navy-900 mb-2">Need Help?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Call us at <span className="font-bold text-yellow-500">+971 50 123 4567</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Email: <span className="font-bold text-yellow-500">info@uqpickup.ae</span>
                  </p>
                </div>

                <div className="bg-yellow-500/10 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-navy-900 mb-2">Quick Tips</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Valid Emirates ID or passport required</li>
                    <li>• Security deposit applicable</li>
                    <li>• Free cancellation up to 24 hours</li>
                    <li>• Fuel policy: Full to full</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-navy-900">Loading...</p>
        </div>
      </div>
    }>
      <BookingContent />
    </Suspense>
  )
}