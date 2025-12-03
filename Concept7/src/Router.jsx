import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import PathName from "./pages/PathName";
import NotFound from "./Component/NotFound";
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "path",
                element: <PathName />
            }, 
            {
                 path: "nav",
                 element: <Navbar />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "product",
                element: <Products />
            },
            {
                path: "product/:productId",
                element: <ProductDetails />
            }
        ]
    }
])

export default router;