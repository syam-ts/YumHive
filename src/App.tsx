import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.tsx";
import Header2 from "./components/Header2.js";
import Footer from "./components/Footer.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../dist-TS/components/About.js
import Error from "./components/Error.js";
import Contact from "./components/Contact.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Profile from "./components/Profile.jsx";
import InstaMart from "./components/InstMart.js";
import Cart from './components/Cart.js'
import { Provider } from "react-redux";
import { store } from './utils/store.js'

const AppLayout = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header2 />
        <Outlet />
        <Footer />
      </React.Fragment>
    </Provider>
  );
};

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
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
