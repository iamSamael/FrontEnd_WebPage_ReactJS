import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Blog from "./pages/Blog";
import MoreAboutTransMax from './pages/MoreAboutTransMax'
import GetAQuote from "./pages/GetAQuote";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Tracking from "./pages/Tracking";
import Services from "./pages/Services";

import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/blog",
        element: <Blog/>,
    },
    {
        path: "/moreAboutUsTransMax",
        element: <MoreAboutTransMax/>,
    },
    {
        path: "/getQuote",
        element: <GetAQuote/>,
    },
    {
        path: "/signin",
        element: <Signin/>,
    },
    {
        path: "/signup",
        element: <Signup/>,
    },
    {
        path: "/tracking",
        element: <Tracking/>,
    },
    {
        path: "/services",
        element: <Services/>,
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
