import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Layout/Home";
import DynamicServicePage from "./Components/OurServices/DynamicServicePage";
import IndustriesPage from "./Components/Industries/IndustriesPage";
import About from "./Components/AboutUS/About";
 

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/services",
      element: <DynamicServicePage />,
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
  ]);

  return <RouterProvider router={router} />;
}
import Contact from "./Components/ContactUs/Contact";

export default App;
