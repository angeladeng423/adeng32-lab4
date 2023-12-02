import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Login from './pages/Login'
import CreateAcc from './pages/CreateAcc';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const UserContext = React.createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, 
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/create-account",
    element: <CreateAcc/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);