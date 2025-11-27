import {createBrowserRouter} from "react-router";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import App from "./App";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "About",
                element: <About />
            },
            {
                path: "Contact",
                element: <Contact />
            }
        ]
    }
    
]);

export default router;