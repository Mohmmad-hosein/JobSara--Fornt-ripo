import React, { Component, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./component/Landing/LandingPage";
import "./index.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage  ,
  },
]);

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />;
    </>
  );
};

export default App;
