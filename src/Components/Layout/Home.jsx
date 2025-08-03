import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import ServicesSection from "../OurServices/Services"
import WhatWeDo from "../../Components/Industries/WhatWeDo"
import Slider from "../Slider/Slider"
// import AboutUsLanding from "../AboutUS/LandingAbout"
// import AnimatedFooter from "../Footer/Footer"
import DynamicServicePage from "../OurServices/DynamicServicePage"
import MainLayout from "./MainLayout"
import WhyChooseNextGrid from "../Industries/WhyChooseNextGrid"
import WhoWeWorkWith from "../Industries/WhoWeWorkWith"
import KeyMetricsSection from "../Industries/KeyMetricsSection"
const Home = () => {
  return (
    <>
    <MainLayout>
    {/* <Navbar/> */}
    <Hero/>
    <WhatWeDo/>
    <ServicesSection/>
    <WhyChooseNextGrid/>
    <WhoWeWorkWith/>
    <KeyMetricsSection/>
    <Slider/>
   
    {/* <AnimatedFooter/> */}
    </ MainLayout>


    </>
  ) 
}

export default Home