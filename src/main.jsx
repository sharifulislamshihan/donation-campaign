import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Roots from './Components/Roots/Roots';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import DonationDetails from './Components/DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('donated.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/donation_details/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('info.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
