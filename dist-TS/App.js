"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const Body_jsx_1 = __importDefault(require("./components/Body.jsx"));
const Header2_jsx_1 = __importDefault(require("./components/Header2.jsx"));
const Footer_jsx_1 = __importDefault(require("./components/Footer.jsx"));
const react_router_dom_1 = require("react-router-dom");
const About_js_1 = __importDefault(require("./components/About.js"));
const Error_jsx_1 = __importDefault(require("./components/Error.jsx"));
const Contact_jsx_1 = __importDefault(require("./components/Contact.jsx"));
const RestaurantMenu_jsx_1 = __importDefault(require("./components/RestaurantMenu.jsx"));
const Profile_jsx_1 = __importDefault(require("./components/Profile.jsx"));
const InstMart_jsx_1 = __importDefault(require("./components/InstMart.jsx"));
const Cart_js_1 = __importDefault(require("./components/Cart.js"));
const react_redux_1 = require("react-redux");
const store_js_1 = require("./utils/store.js");
const AppLayout = () => {
    return (<react_redux_1.Provider store={store_js_1.store}>
      <react_1.default.Fragment>
        <Header2_jsx_1.default />
        <react_router_dom_1.Outlet />
        <Footer_jsx_1.default />
      </react_1.default.Fragment>
    </react_redux_1.Provider>);
};
const AppRouter = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error_jsx_1.default />,
        children: [
            {
                path: "/about",
                element: <About_js_1.default />,
                children: [
                    {
                        path: "profile",
                        element: <Profile_jsx_1.default />,
                    },
                ],
            },
            {
                path: "/",
                element: <Body_jsx_1.default />,
            },
            {
                path: "/contact",
                element: <Contact_jsx_1.default />,
            },
            {
                path: "restraunt/:id",
                element: <RestaurantMenu_jsx_1.default />,
            },
            {
                path: "/instamart",
                element: <InstMart_jsx_1.default />,
            },
            {
                path: "/cart",
                element: <Cart_js_1.default />
            }
        ],
    },
]);
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(<react_router_dom_1.RouterProvider router={AppRouter}/>);
