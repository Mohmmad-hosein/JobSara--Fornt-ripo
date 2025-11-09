import React, { useEffect } from "react";
import { Header } from "../Navbar/Header";
import { Section } from "./section/responsive/section";
import toast, { Toaster } from "react-hot-toast";

const LandingPage: React.FC = () => {
  localStorage.setItem("Token", "salam");

  const HandelToken = () => {
    const ValedatToke = localStorage.getItem("Token");
    if (!ValedatToke) {
      toast.error("ابتدا ثبت نام کنید");
    } else {
      toast.success("خوش آمدید", { position: "bottom-right" });
    }
  };
  useEffect(() => {
    HandelToken();
  }, []);

  return (
    <>
      <Header />
      <Section />
    </>
  );
};

export { LandingPage };
