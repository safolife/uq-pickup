import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ummal Quwain Rental Pickup Service',
  description: 'Premium pickup truck rental services in Umm Al Quwain. Affordable rates, well-maintained vehicles, and 24/7 support.',
  keywords: 'pickup rental, Umm Al Quwain, truck rental, vehicle rental',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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