import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import ErrorPage from "../errorpage/ErrorPage";
import Profile from "../profile/Profile";
import PrivateRoute from "./PrivateRoute";
import PropertyDetails from "../propertyDetails/PropertyDetails";
import About from "../about/About";
import Blogs from "../blogs/Blogs";
import Bookmarks from "../bookmarks/Bookmarks";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: `/property/:id`,
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>,
                loader: () => fetch('/blog.json')
            },
            {
                path: '/bookmarks',
                element: <PrivateRoute><Bookmarks></Bookmarks></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;