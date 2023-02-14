import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';
import Hospitals from './pages/Hospitals';

const router = createBrowserRouter([
    {
        path: "/", element: <App />, children: [
            {path: "login", element: <Login />},
            {path: "registration", element: <Registration />},
            {path: "hospitals", element: <Hospitals />}
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
