import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import NotFound from "./Components/NotFound"
import Home from "./Pages/Home"
import Courses from "./Pages/Courses"
import CourseDetails from "./Pages/CourseDetails"
import Navbar from "../../Concept7/src/pages/Navbar"
import Login from "./Pages/Login"
import { Protect_Rout } from "./Components/Protect_Rout"
import Cart from "./Pages/Cart"


// import Protect_Rout from "./Components/Protect_Rout"
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
                path: "course",
                element: (
                 <Protect_Rout element={<Courses />} />
                )
              

            },
            {
                path: "course/:coursesId",
                element: <CourseDetails />
            },
            {
                path: "nav",
                element: <Navbar />
            },
            
            {
                path: "login",
                element: <Login />
            }, 
          {
            path: "cart",
            element: (
                <Protect_Rout element={<Cart />} />
            )
          }
        ]
    }
]);
export default router;