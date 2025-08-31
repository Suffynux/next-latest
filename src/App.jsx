import { createBrowserRouter, RouterProvider } from "react-router-dom";// Make sure the path is correct
import Home from "./Components/Layout/Home";
import IndustriesPage from "./Components/Industries/IndustriesPage";
import About from "./Components/AboutUS/About";
import Services from "./Components/OurServices/Services";
import Contact from "./Components/ContactUs/Contact";
import TechRecruitment from "./Components/OurServices/TechRecruitment";
import ITManagedServices from "./Components/OurServices/ITManagedServices";
import ITAssetManagement from "./Components/OurServices/ITAssetManagement";
import NetworkUserSupport from "./Components/OurServices/NetworkUserSupport";
import ProjectChangeManagement from "./Components/OurServices/ProjectChangeManagement";
import CreativeDigitalSupport from "./Components/OurServices/CreativeDigitalSupport";
import ShopifyDevelopment from "./Components/OurServices/Creative/ShopifyDevelopment";
import CustomWebDevelopment from "./Components/OurServices/Creative/CustomWebDevelopment";
import DigitalMarketing from "./Components/OurServices/Creative/DigitalMarketing";
import Layout from "./Components/Layout/Layout";
import ITServices from "./Components/OurServices/ItServices";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // All routes go inside this layout
      children: [
        { path: "/", element: <Home /> },
        { path: "/services", element: <Services /> },
        { path: "/industries", element: <IndustriesPage /> },
        { path: "/about-us", element: <About /> },
        { path: "/contact-us", element: <Contact /> },
        { path: "/it-service", element: <ITServices/> },
        { path: "/tech-recruitment", element: <TechRecruitment /> },
        { path: "/managed-services", element: <ITManagedServices /> },
        { path: "/ITAsset-Management", element: <ITAssetManagement /> },
        { path: "/network-support", element: <NetworkUserSupport /> },
        { path: "/project-management", element: <ProjectChangeManagement /> },
        { path: "/creative-support", element: <CreativeDigitalSupport /> },
        { path: "/services/creative-support/shopify-development", element: <ShopifyDevelopment /> },
        { path: "/services/creative-support/custom-web-development", element: <CustomWebDevelopment /> },
        { path: "/services/creative-support/digital-marketing", element: <DigitalMarketing /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
