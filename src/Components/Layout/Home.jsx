import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import ServicesSection from "../OurServices/Services"
import Industry from "../Industries/Industry"
import Slider from "../Slider/Slider"
import AboutUsLanding from "../AboutUS/LandingAbout"
import AnimatedFooter from "../Footer/Footer"
import DynamicServicePage from "../OurServices/DynamicServicePage"
import MainLayout from "./MainLayout"
const Home = () => {
  return (
    <>
    <MainLayout>
    {/* <Navbar/> */}
    <Hero/>
    <Industry/>
    <ServicesSection/>
    <Slider/>
    <AboutUsLanding/>
    {/* <AnimatedFooter/> */}
    </ MainLayout>


    </>
  ) 
}

export default Home