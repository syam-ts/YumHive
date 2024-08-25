import React from "react"
import ReactDOM from "react-dom/client"
import Body from './components/Body.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Contact from './components/Contact.jsx'

 
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <AppLayout />,
          errorElement: <Error />,
          children: [
            {
              path: "/about",
              element: <About />
            },
            {
              path: "/",
              element: <Body />
            },
            {
              path: "/contact",
              element: <Contact />
            },
          ] 
        }
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)


 