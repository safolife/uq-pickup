'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const whatsappNumber = "971528938262" // Format: country code without plus for URL
  const phoneNumber = "+971 52 893 8262"
  const phoneNumberClean = "+971528938262"

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
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message']
    const missingFields = requiredFields.filter(field => !formData[field])
    
    if (missingFields.length > 0) {
      alert('Please fill in all required fields')
      setIsSubmitting(false)
      return
    }

    // Format the message for WhatsApp
    const message = `
*New Contact Form Inquiry - Ummal Quwain Rentals*

*Contact Information:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

*Subject:* ${formData.subject}

*Message:*
${formData.message}

Thank you for contacting Ummal Quwain Rental Pickup Service!
We'll get back to you shortly.
    `.trim()

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone',
      details: [phoneNumber, '+971 50 987 6543'],
      action: 'Call us now',
      link: `tel:${phoneNumberClean}`,
      bgColor: 'bg-blue-500',
      hasLink: true,
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp',
      details: [phoneNumber, '24/7 Quick Response'],
      action: 'Chat on WhatsApp',
      link: `https://wa.me/${whatsappNumber}`,
      bgColor: 'bg-green-500',
      hasLink: true,
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Location',
      details: ['New Industrial Area', 'Umm Al Quwain, UAE'],
      action: 'Get directions',
      link: 'https://maps.google.com/?q=New+Industrial+Area+Umm+Al+Quwain',
      bgColor: 'bg-red-500',
      hasLink: true,
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Working Hours',
      details: ['24/7 - 365 days', 'Emergency support always available'],
      action: 'Always open',
      bgColor: 'bg-purple-500',
      hasLink: false, // No link for working hours
    },
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl"
          >
            Get in touch with us for any inquiries or assistance
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const CardContent = (
                <div
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    info.hasLink ? 'cursor-pointer hover:-translate-y-1' : ''
                  }`}
                >
                  <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center mb-4 text-white`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                  <p className="text-yellow-500 text-sm font-semibold mt-3 group-hover:underline">
                    {info.action} {info.hasLink && '→'}
                  </p>
                </div>
              );

              return info.hasLink ? (
                <motion.a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="block"
                >
                  {CardContent}
                </motion.a>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="block"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question or need assistance? Fill out the form below and we'll get back to you via WhatsApp shortly.
              </p>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaWhatsapp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">Message Ready to Send!</h3>
                  <p className="text-gray-600 mb-6">
                    You've been redirected to WhatsApp with your message. Please send it to complete your inquiry.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center justify-center"
                    >
                      <FaWhatsapp className="mr-2" />
                      Open WhatsApp
                    </a>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-navy-900 font-medium mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field w-full"
                        placeholder="Enter your name"
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        placeholder="Enter your phone"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-900 font-medium mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input-field w-full"
                        placeholder="Enter subject"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy-900 font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="input-field w-full"
                      placeholder="Type your message here..."
                    />
                  </div>

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
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="relative z-10">Preparing...</span>
                      </>
                    ) : (
                      <>
                        <FaWhatsapp className="text-2xl relative z-10" />
                        <span className="relative z-10 text-lg">Send via WhatsApp</span>
                      </>
                    )}
                  </motion.button>
                  
                  <p className="text-sm text-gray-500 text-center mt-4">
                    <span className="text-red-500">*</span> Required fields
                  </p>
                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you'll be redirected to WhatsApp to send your message
                  </p>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115688.17869354583!2d55.53754595!3d25.5505186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef6f6f3f3f3f3f3%3A0x3f3f3f3f3f3f3f3f!2sNew%20Industrial%20Area%2C%20Umm%20Al%20Quwain!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Umm Al Quwain New Industrial Area Map"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                q: "What documents do I need to rent a pickup?",
                a: "You'll need a valid Emirates ID or passport, and a valid UAE driving license. For tourists, an international driving permit is accepted."
              },
              {
                q: "Is there a security deposit?",
                a: "Yes, a refundable security deposit is required. The amount varies based on the vehicle type and rental duration."
              },
              {
                q: "What is your cancellation policy?",
                a: "Free cancellation up to 24 hours before the scheduled pickup time. Cancellations within 24 hours may incur a fee."
              },
              {
                q: "Do you offer delivery service?",
                a: "Yes, we offer free pickup and delivery within Umm Al Quwain city limits. Delivery to other areas may incur additional charges."
              },
              {
                q: "What is your fuel policy?",
                a: "We operate on a full-to-full fuel policy. The vehicle will be delivered with a full tank and should be returned with a full tank."
              },
              {
                q: "Where are you located exactly?",
                a: "We are located in the New Industrial Area, Umm Al Quwain. You can find us easily via the map above or contact us for directions."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 mb-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}