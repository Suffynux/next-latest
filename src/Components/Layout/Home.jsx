import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import ServicesSection from "../OurServices/Services"
import Industry from "../Industries/Industry"
import Slider from "../Slider/Slider"
import AboutUsLanding from "../AboutUS/LandingAbout"
import AnimatedFooter from "../Footer/Footer"
const Home = () => {
  return (
    <>
  
    <Navbar/>
    <Hero/>
    <Industry/>
    <ServicesSection/>
    <Slider/>
    <AboutUsLanding/>
    <AnimatedFooter/>


    </>
  ) 
}

export default Home