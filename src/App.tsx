import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./component/Landing/LandingPage";
import "./index.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import { SigenUp } from "./component/Sighenup/Sighenup";
import { Joblist } from "./component/Job list/Job list";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/Sighenup",
    Component: SigenUp,
  },
  {
    path: "/Joblist",
    Component: Joblist,
  },
]);

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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
