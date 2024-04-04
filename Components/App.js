import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body/Body";
import ErrorComponent from "./ErrorComponent/ErrorComponent";
import ContactUs from "./ContectUs/ContectUs";
import AboutUs from "./AboutUs/About";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
