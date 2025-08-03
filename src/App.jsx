import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Layout/Home";
import IndustriesPage from "./Components/Industries/IndustriesPage";
import About from "./Components/AboutUS/About";
import Services from "./Components/OurServices/Services";
import Contact from "./Components/ContactUs/Contact";
import { Italic } from "lucide-react";
import ITServices from "./Components/OurServices/ItServices";
import TechRecruitment from "./Components/OurServices/TechRecruitment";
import ITManagedServices from "./Components/OurServices/ITManagedServices";
import ITAssetManagement from "./Components/OurServices/ITAssetManagement";
import NetworkUserSupport from "./Components/OurServices/NetworkUserSupport";
import ProjectChangeManagement from "./Components/OurServices/ProjectChangeManagement";
import CreativeDigitalSupport from "./Components/OurServices/CreativeDigitalSupport";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

       {
        // Main service Page
      path: "/services",
      element: <Services />,
    },

    {
      path: "/industries",
      element: <IndustriesPage />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
        // First service
        path: "/it-service",
        element: <ITServices />,
      },
      {
        // second service
        path: "/tech-recruitment",
        element: <TechRecruitment />,
      },
      {
        // Third service
        path: "/managed-services",
        element: <ITManagedServices />,
      },
      {
        // Fourth service
        path: "/ITAsset-Management",
        element: <ITAssetManagement />,
      },

      {
        // Fiveth service
        path: "/network-support",
        element: <NetworkUserSupport />,
      },
      {
        // Sixth service
        path: "/project-management",
        element: <ProjectChangeManagement />,
      },

      {
        // Seventh service
        path: "/creative-support",
        element: <CreativeDigitalSupport />,
      },
      
  ]);

  return <RouterProvider router={router} />;
}


export default App;
