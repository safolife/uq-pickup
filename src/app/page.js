import Hero from '@/components/home/Hero'
import FeaturedPickups from '@/components/home/FeaturedPickups'
import Services from '@/components/home/Services'
import Testimonials from '@/components/home/Testimonials'
import WhyChooseUs from '@/components/home/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPickups />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </>
  )
}