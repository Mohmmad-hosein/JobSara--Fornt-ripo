import React from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
//ComponentImport
import { Fotter } from "./fotter/foter";
import { BigsideNav } from "./Navbar/responsive/BigNav";
import { BigSection } from "./section/responsive/Bigsection";
import { SmallSection } from "./section/responsive/smallsection";
import { SmallFotter } from "./fotter/Smallfoter";
import { AddSection } from "./Addsection/Addsection";
import { Earnmony } from "./Aarn money/Earnmony";
import { JobSaraPurpos } from "./purposeSection/JobsaraPurpos";
import { Jobsara } from "./purposeSection/whyJobsara";
import { Freequestions } from "./questions/questions";

interface userobject {
  Token: any;
  DarckMode: boolean;
  ip: any;
  Password: any;
}

const LandingPage: React.FC<userobject> = () => {
  const ClientHandeler = async () => {
    const GetipSystem = await axios.get("https:api.ipify.org/?format=json");

    const saveToken = localStorage.setItem("Tokenuser", "token");
    const SaveIp = localStorage.setItem("ip", `${GetipSystem.data.ip}`);
    


    const GetToken = localStorage.getItem("Tokenuser");


    if (GetToken === "") {
      toast.error("ابتدا ثبت نام کنید", {
        style: { fontFamily: "Peyda, sans-serif" },
      });
    } else {
      toast("به جابسراخوش آمدید", {
        position: "bottom-right",
        style: {
          backgroundColor: `#1E3A8A`,
          fontFamily: "Peyda, sans-serif",
          color: `#fff`,
        },
      });
    }
  };
  useEffect(() => {
    ClientHandeler();
  }, []);

  return (
    <>
      <BigsideNav/>
      {/* <BigSection/>  */}
      {/* <Fotter/> */}
      {/* <SmallFotter/> */}
      {/* <AddSection/> */}
      {/* <Earnmony/> */}
      {/* <JobSaraPurpos/> */}
      {/* <Jobsara/> */}
      <Freequestions/>
    
      
    </>
  );
};

export { LandingPage };
