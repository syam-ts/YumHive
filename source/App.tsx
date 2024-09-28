import React, { lazy } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu.tsx"
import InstaMart from "./components/InstMart.tsx"
import Contact from "./components/Contact.tsx"
import Profile from "./components/Profile.tsx"
import Header2 from "./components/Header2.tsx"
import Footer from "./components/Footer.tsx"
import Error from "./components/Error.tsx"
import About from "./components/About.tsx"
import Body from "./components/Body.tsx"
import Cart from './components/Cart.tsx'
import { store } from './utils/store.ts'
import { Provider } from "react-redux"
import Home from "./components/Home.tsx" 


const AppLayout = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header2 />
        <Outlet />
        <Footer />
      </React.Fragment>
    </Provider>
  )
}

const AppRouter = createBrowserRouter([
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
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restraunt/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <InstaMart />,
      },
      {
        path: "/cart",
        element: < Cart/>
      }
    ],
  } 
])


const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={AppRouter} />);
} else {
  console.error("Root element not found");
}
 