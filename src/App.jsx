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

// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Layout/Home";
import DynamicServicePage from "./Components/OurServices/DynamicServicePage";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
