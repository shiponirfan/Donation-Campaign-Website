import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Donation from './components/Donation/Donation';
import DonationDetails from './components/DonationDetails/DonationDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/donations",
      element: <Donation></Donation>
    },
    {
      path: "/statistics",
      element: <Statistics></Statistics>
    },
    {
      path: "/donation/:id",
      loader: ()=> fetch('/donation.json'),
      element: <DonationDetails></DonationDetails>
    },
  ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
