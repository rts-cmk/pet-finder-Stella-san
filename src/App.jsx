import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import PetProfile from "./pages/PetProfile"
import homeLoader from "./loader/homeLoader"



function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: homeLoader
    },
    {
      path: "/pet-profile",
      element: <PetProfile />
    }
  ])
  
  return <RouterProvider router={browserRouter} />

}

export default App
