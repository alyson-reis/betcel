import './App.css'
import CallToActionBanner from './componets/CallToActionBanner'
import Footer from './componets/Footer'
import Header from './componets/Header'
import HeroSection from './componets/HeroSection'
import LocationSection from './componets/LocationSection'
import ServicesSection from './componets/ServicesSection'
import WhyChooseUsSection from './componets/WhyChooseUsSection'

function App() {

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

export default App
