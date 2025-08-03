import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import LandingService from "../../Components/OurServices/LandingService"
import WhatWeDo from "../../Components/Industries/WhatWeDo"
import Slider from "../Slider/Slider"
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
    <LandingService/>
    
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