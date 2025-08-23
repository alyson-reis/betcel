import CallToActionBanner from '../components/CallToActionBanner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import LocationSection from '../components/LocationSection'
import ServicesSection from '../components/ServicesSection'
import WhyChooseUsSection from '../components/WhyUs'

function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ServicesSection/>
      <LocationSection/>
      <WhyChooseUsSection/>
      <CallToActionBanner/>
      <Footer/>
    </div>
  )
}

export default Home
