import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';
import LoggedInPage from './pages/LoggedInPage';
import HospitalPage from './pages/HospitalPage';

const router = createBrowserRouter([
    {
        path: "/", element: <App />, children: [
            {path: "login", element: <Login />},
            {path: "registration", element: <Registration />},
            {path: "loggedin", element: <LoggedInPage />}, //user idt berakni a linkbe?
            {path: "loggedin/:hospitalid", element: <HospitalPage />}
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
