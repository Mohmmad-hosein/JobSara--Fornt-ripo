import React from "react";
import { useState } from "react";
import { BigsideNav } from "./responsive/BigNav";
import { Box } from "@mui/material";
import { MobyleNav } from "./responsive/SmalNav";

const Header: React.FC = () => {
  const [NavData, setNavData] = React.useState([
    { id: "4", Value: "درباره ما", Addres: "/AboutmyPage" },
    { id: "3", Value: " وبلاگ ها", Addres: "/webloGPage" },
    { id: "2", Value: "شرکت‌های برتر", Addres: "/BestcompanyPage" },
    { id: "1", Value: "جستجوی مشاغل", Addres: "/prouductPage" },
  ]);



  return (
    <>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            xl: "block",
            md: "none",
            lg: "block",
          },
        }}
        component={"div"}
        id="ResponsivDeskToppWraper"
      >
        <BigsideNav  NavData={NavData} />
      </Box>

      <Box
        component={"div"}
        sx={{ display: { sm: "block", xl: "none", lg: "none", md: "none" } }}
      >
        <MobyleNav NavData={NavData} />
      </Box>
    </>
  );
};

export { Header };
