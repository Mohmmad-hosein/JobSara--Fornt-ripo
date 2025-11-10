import React from "react";
import { Header } from "../Navbar/Header";
import { Section } from "./section/responsive/section";
import toast from "react-hot-toast";
import axios from "axios";
import { Icon } from "@mui/material";

interface userobject {
  Token: any;
  DarckMode: boolean;
  ip: any;
  Password: any;
}
const LandingPage: React.FC<userobject> = () => {
  const ClientHandeler = async () => {
    const GetipSystem = await axios.get("https:api.ipify.org/?format=json");

    const saveToken = localStorage.setItem("Tokenuser", "");
    const DarckModevalu = localStorage.setItem("Darckmode", "false");
    const SaveIp = localStorage.setItem("ip", `${GetipSystem.data.ip}`);
    const InPassword = localStorage.setItem("Pass", "");
    const langueg =localStorage.setItem("lan","fa")

    const GetToken = localStorage.getItem("Tokenuser");
    const GetDarckModevalu = localStorage.getItem("Darckmode");
    const GetIp = localStorage.getItem("ip");
    const GetInPassword = localStorage.getItem("Pass");

    if (GetToken === "") {
      toast.error("ابتدا ثبت نام کنید",{style:{fontFamily:"Peyda, sans-serif",}});
    } else {
      toast("به جابسراخوش آمدید",{position:'bottom-right',style:{backgroundColor:`#1E3A8A`,fontFamily:"Peyda, sans-serif",color:`#fff`}})
    }
  };

  ClientHandeler();

  return (
    <>
      
      <Header />
      <Section />
    </>
  );
};

export { LandingPage };
