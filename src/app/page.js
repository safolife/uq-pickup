import Hero from '@/components/home/Hero'
import FeaturedPickups from '@/components/home/FeaturedPickups'
import Services from '@/components/home/Services'
import Testimonials from '@/components/home/Testimonials'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>Umm Al Quwain Pickup Rental | Best Truck Rental in UAQ</title>
        <meta name="description" content="Rent pickup trucks in Umm Al Quwain for personal or commercial use. Toyota Hilux, Nissan Patrol and more. Daily, weekly and monthly rentals with insurance included." />
        <meta name="keywords" content="pickup rental Umm Al Quwain, truck rental UAQ, rent pickup Umm Al Quwain, Hilux rental Umm Al Quwain, Nissan pickup rental UAQ, commercial vehicle rental Umm Al Quwain" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ummalquwainpickup.com/" />
        <meta property="og:title" content="Umm Al Quwain Pickup Rental Service" />
        <meta property="og:description" content="Professional pickup truck rental in Umm Al Quwain. Best rates, 24/7 support, free delivery within UAQ." />
        <meta property="og:image" content="https://www.ummalquwainpickup.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.ummalquwainpickup.com/" />
        <meta name="twitter:title" content="Umm Al Quwain Pickup Rental" />
        <meta name="twitter:description" content="Rent pickup trucks in Umm Al Quwain at competitive prices. Daily and monthly rentals available." />
        <meta name="twitter:image" content="https://www.ummalquwainpickup.com/twitter-image.jpg" />

        {/* UAE specific meta tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="geo.region" content="AE-UQ" />
        <meta name="geo.placename" content="Umm Al Quwain" />
        
        {/* Location specific */}
        <meta name="dc.language" content="en" />
        <meta name="dc.source" content="https://www.ummalquwainpickup.com" />
        <meta name="dc.subject" content="Pickup Truck Rental Umm Al Quwain" />
        <meta name="citation_author" content="UAQ Pickup Rental" />
      </Head>

      {/* Schema.org markup for Google */}
      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "AutoRental",
            "name": "Umm Al Quwain Pickup Rental Service",
            "description": "Professional pickup truck rental services in Umm Al Quwain",
            "url": "https://www.ummalquwainpickup.com",
            "telephone": "+971XXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sheikh Zayed Road",
              "addressLocality": "Umm Al Quwain",
              "addressRegion": "UAQ",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.5647,
              "longitude": 55.5552
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": "Umm Al Quwain"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pickup Truck Rental",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Vehicle",
                    "name": "Toyota Hilux",
                    "description": "Double cab pickup truck for rent"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Vehicle",
                    "name": "Nissan Patrol",
                    "description": "Heavy duty pickup for commercial use"
                  }
                }
              ]
            }
          }
        `}
      </Script>

      {/* Local Business Schema */}
      <Script id="local-business-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "UAQ Pickup Rental",
            "image": "https://www.ummalquwainpickup.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Umm Al Quwain",
              "addressCountry": "AE"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "125"
            }
          }
        `}
      </Script>

      <Hero />
      <FeaturedPickups />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </>
  )
}