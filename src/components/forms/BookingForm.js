'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTruck, FaWhatsapp } from 'react-icons/fa'

const BookingForm = ({ vehicleId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    pickupDate: '',
    returnDate: '',
    vehicleType: vehicleId || '',
    purpose: '',
    additionalNotes: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const whatsappNumber = "971528938262" // Format: country code without plus for URL

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleWhatsAppSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'pickupDate', 'returnDate', 'vehicleType']
    const missingFields = requiredFields.filter(field => !formData[field])
    
    if (missingFields.length > 0) {
      alert('Please fill in all required fields')
      setIsSubmitting(false)
      return
    }

    // Get vehicle name
    const selectedVehicle = vehicles.find(v => v.id === formData.vehicleType)
    
    // Format the message for WhatsApp
    const message = `
*New Booking Inquiry - Ummal Quwain Rentals*

*Personal Information:*
• Full Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Address: ${formData.address || 'Not provided'}

*Rental Details:*
• Vehicle: ${selectedVehicle?.name || 'Not selected'} (AED ${selectedVehicle?.price}/day)
• Pickup Date: ${formData.pickupDate}
• Return Date: ${formData.returnDate}
• Purpose: ${formData.purpose || 'Not specified'}

*Additional Notes:*
${formData.additionalNotes || 'No additional notes'}

Thank you for choosing Ummal Quwain Rental Pickup Service!
    `.trim()

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
  }

  const vehicles = [
    { id: '1', name: 'Toyota Hilux', price: 250 },
    { id: '2', name: 'Nissan Navara', price: 230 },
    { id: '3', name: 'Ford Ranger', price: 280 },
    { id: '4', name: 'Mitsubishi L200', price: 200 },
    { id: '5', name: 'Isuzu D-Max', price: 300 },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {!submitSuccess ? (
        <>
          <form onSubmit={handleWhatsAppSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">Book Your Pickup Truck</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Information Column */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-navy-900 border-b border-yellow-500 pb-2">
                  <FaUser className="inline mr-2 text-yellow-500" />
                  Personal Information
                </h4>
                
                <div>
                  <label className="block text-navy-900 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="input-field w-full"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-navy-900 font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field w-full"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-navy-900 font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field w-full"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-navy-900 font-medium mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="input-field w-full"
                    placeholder="Enter your address (optional)"
                  />
                </div>
              </div>

              {/* Rental Details Column */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-navy-900 border-b border-yellow-500 pb-2">
                  <FaTruck className="inline mr-2 text-yellow-500" />
                  Rental Details
                </h4>
                
                <div>
                  <label className="block text-navy-900 font-medium mb-2">
                    Select Vehicle <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    required
                    className="input-field w-full"
                  >
                    <option value="">Choose a vehicle</option>
                    {vehicles.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} - AED {v.price}/day
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-navy-900 font-medium mb-2">
                    Pickup Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="input-field w-full"
                  />
                </div>

                <div>
                  <label className="block text-navy-900 font-medium mb-2">
                    Return Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    required
                    min={formData.pickupDate || new Date().toISOString().split('T')[0]}
                    className="input-field w-full"
                  />
                </div>

                <div>
                  <label className="block text-navy-900 font-medium mb-2">
                    Purpose of Rental
                  </label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="input-field w-full"
                  >
                    <option value="">Select purpose (optional)</option>
                    <option value="moving">Moving / Relocation</option>
                    <option value="business">Business / Commercial</option>
                    <option value="personal">Personal Use</option>
                    <option value="construction">Construction</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Notes - Full Width */}
            <div className="mt-6">
              <label className="block text-navy-900 font-medium mb-2">
                Additional Notes
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows="3"
                className="input-field w-full"
                placeholder="Any special requirements or notes... (optional)"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold
                         hover:bg-green-700 transition-all duration-300
                         flex items-center justify-center space-x-3 group relative overflow-hidden
                         disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <FaWhatsapp className="text-2xl relative z-10" />
                <span className="relative z-10 text-lg">
                  {isSubmitting ? 'Sending...' : 'Submit via WhatsApp'}
                </span>
              </motion.button>
              <p className="text-sm text-gray-500 text-center mt-4">
                <span className="text-red-500">*</span> Required fields
              </p>
              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you'll be redirected to WhatsApp to confirm your booking
              </p>
            </div>
          </form>
        </>
      ) : (
        // Success Message
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-12 text-center"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaWhatsapp className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">WhatsApp Opened!</h3>
          <p className="text-gray-600 mb-8">
            You've been redirected to WhatsApp with your booking details. Please send the message to confirm your booking with Ummal Quwain Rental Pickup Service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/'}
              className="btn-primary"
            >
              Return to Home
            </button>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" />
              Open WhatsApp Again
            </a>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default BookingForm