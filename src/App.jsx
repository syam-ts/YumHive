import React from "react"
import ReactDOM from "react-dom/client"
import Body from './components/Body.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Error from './components/Error.jsx'

 
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  )
}

const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <AppLayout />,
          errorElement: <Error /> 
        },
        {
          path: "/about",
          element: <About /> ,
          errorElement: <Error /> 
        }
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)


 