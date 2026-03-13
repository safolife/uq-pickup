'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaTruck, FaUsers, FaHandshake, FaAward } from 'react-icons/fa'

export default function AboutPage() {
  const stats = [
    { icon: <FaTruck />, value: '50+', label: 'Vehicles' },
    { icon: <FaUsers />, value: '1000+', label: 'Happy Customers' },
    { icon: <FaHandshake />, value: '10+', label: 'Years Experience' },
    { icon: <FaAward />, value: '4.9', label: 'Customer Rating' },
  ]

  const team = [
    {
      name: 'Ahmed Al Ali',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'With over 15 years in the automotive industry, Ahmed founded Ummal Quwain Rental to provide reliable pickup services.',
    },
    {
      name: 'Mohammed Al Zaabi',
      position: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Mohammed ensures all vehicles are well-maintained and operations run smoothly 24/7.',
    },
    {
      name: 'Fatima Al Mansouri',
      position: 'Customer Relations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Fatima leads our customer service team, ensuring every client gets the best experience.',
    },
  ]

  const values = [
    {
      title: 'Reliability',
      description: 'We deliver on our promises, every time. Your pickup will be ready when you need it.',
    },
    {
      title: 'Quality',
      description: 'All our vehicles are regularly maintained and sanitized to the highest standards.',
    },
    {
      title: 'Integrity',
      description: 'Transparent pricing with no hidden charges. What you see is what you pay.',
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go the extra mile for our customers.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="About Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/70"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Your trusted partner for pickup rentals in Umm Al Quwain since 2013
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl text-yellow-500 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-navy-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ummal Quwain Rental Pickup Service was founded in 2013 with a simple mission: 
                to provide reliable, affordable, and high-quality pickup rentals to the people 
                of Umm Al Quwain and beyond.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started with just 3 vehicles has grown into a fleet of over 50 well-maintained 
                pickups, serving thousands of satisfied customers. Our growth is a testament to our 
                commitment to excellence and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be the most trusted pickup rental service in Umm Al Quwain, 
                known for our reliability, transparency, and exceptional customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/fleet/1.jpeg"
                  alt="Our Fleet"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl text-center group hover:bg-navy-900 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Dedicated professionals committed to your satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-1">{member.name}</h3>
                  <p className="text-yellow-500 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Rent a Pickup?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Experience the best pickup rental service in Umm Al Quwain
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/booking" className="btn-primary text-lg px-8 py-4">
              Book Your Pickup Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}