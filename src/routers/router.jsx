import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/home/HomePage"

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                children: [
                    {
                        path: "",
                        element: ( <HomePage />)
                    },
                    

                ]
            }
        ]
    },
    {
        path: "*",
        element: <h1>404 not found</h1>,
      },
])