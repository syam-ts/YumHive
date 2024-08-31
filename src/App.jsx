import React, { lazy } from "react"
import ReactDOM from "react-dom/client"
import Body from './components/Body.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Contact from './components/Contact.jsx'
import RestaurantMenu from "./components/RestaurantMenu.jsx"
import Profile from './components/Profile.jsx' 
import InstaMart from './components/InstMart.jsx'
import Provide from 'react-redux'
import store from './utils/store.js'
 
const AppLayout = () => {
  return (
    <Provide store={store}>
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
    </Provide>
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
              element: <About />,
              children: [
                {
                  path: 'profile', 
                  element: <Profile />
                }
              ]
            },
            {
              path: "/",
              element: <Body />
            },
            {
              path: "/contact",
              element: <Contact />
            },
            {
              path: "restraunt/:id",
              element: <RestaurantMenu />
            },
            {
              path: "/instamart",
              element: <InstaMart />
            }
          ] 
        }
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)


 