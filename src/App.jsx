// import Home from "./Components/Layout/Home"
// // import MouseLayout from "./Components/Layout/UpdateHome"
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import DynamicServicePage from "./Components/OurServices/DynamicServicePage"

// function App() {
 

//   const router = createBrowserRouter([
//     {
//       path : "services/",
//       element : <DynamicServicePage/>
//     },
    
//   ])
//   return (
//     <>
// <Home/>
// <RouterProvider router={router}/>
// {/* <MouseLayout/> */}
//     </>
//   )
// }


// export default App

import Home from "./Components/Layout/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DynamicServicePage from "./Components/OurServices/DynamicServicePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/services", // Changed from "services/" to "/services"
      element: <DynamicServicePage />,
    },
    {
      path: "/", // Optional home route
      element: <Home />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
