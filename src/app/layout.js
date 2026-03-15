import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ummal Quwain Rental Pickup Service | Best Pickup Truck Rental in UAQ',
  description: 'Professional pickup truck rental services in Umm Al Quwain. Affordable rates for commercial & personal use. Daily, weekly & monthly rentals available. 24/7 support in UAE.',
  keywords: 'pickup rental Umm Al Quwain, truck rental UAQ, pickup for rent Umm Al Quwain, vehicle rental Umm Al Quwain, cheap pickup rental UAE, Nissan pickup rental UAQ, Toyota Hilux rental Umm Al Quwain, commercial vehicle rental UAQ, pickup truck hire Umm Al Quwain, rent a pickup UAE, daily pickup rental Umm Al Quwain, monthly pickup rental UAQ, construction vehicle rental Umm Al Quwain, delivery vehicle rental UAE, 4x4 pickup rental Umm Al Quwain',
  openGraph: {
    title: 'Umm Al Quwain Pickup Truck Rental | Professional Vehicle Hire',
    description: 'Rent pickup trucks in Umm Al Quwain at competitive prices. Well-maintained fleet for all your transportation needs.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'UAQ Pickup Rental Service',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.ummalquwainpickup.com',
  },
  verification: {
    google: 'googlee3848a56a751cd5f.html', // Add your Google Search Console verification code
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="AE-UQ" />
        <meta name="geo.placename" content="Umm Al Quwain" />
        <meta name="geo.position" content="25.5647;55.5552" />
        <meta name="ICBM" content="25.5647, 55.5552" />
        <meta name="format-detection" content="telephone=+971XXXXXXXXX" />
        <link rel="canonical" href="https://www.uaqpickuprental.com" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}