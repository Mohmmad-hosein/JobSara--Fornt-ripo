import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../assets/Landing/Logo.png";
import Moon from "../../../../assets/Landing/Moon.png";
import DarckLogo from "../../../../assets/Landing/DarckLogo.png";
import Registration from "../../../../assets/Landing/auth.png";

const BigsideNav: React.FC = () => {
  const [NavData, setNavData] = React.useState([
    { id: "1", Value: "ثبت آگهی", Addres: "/PostingPage" },
    { id: "4", Value: "درباره ما", Addres: "/AboutmyPage" },
    { id: "3", Value: " وبلاگ ها", Addres: "/webloGPage" },
    { id: "2", Value: "شرکت‌های برتر", Addres: "/BestcompanyPage" },
    { id: "1", Value: "جستجوی مشاغل", Addres: "/prouductPage" },
  ]);

  const { scrollYProgress } = useScroll();
 
  const navigate = useNavigate();
  let [Drackmode,SetDarckmode] =useState (localStorage.getItem("Darckmode") || false )
  const MotionBox = motion(Box);

  return (
    <>
      <Box
        component="div"
        sx={{
          width: 1,
          height: "100px",
          backgroundColor: Drackmode ? "#383636ff" : "#fff",
          boxShadow: 1,
        }}
      >
        <Box
          component="img"
          id="LogoHeader"
          sx={{ position: "relative", left: "85%", top: "30%" }}
          src={Drackmode ? DarckLogo : Logo}
          alt="Logo"
        ></Box>
        <Box
          component={"div"}
          id="wraperLink"
          sx={{
            display: "flex",
            gap: 3,
            position: "relative",
            left: { sm: "30%", md: "47%", lg: "50%" },
            height: "40px",
            width: { md: "33%", lg: "33%", xl: "33%", sm: "53%" },
            bottom: "10px",
            justifyContent: "center",
            justifyItems: "center",
            top: "-22px",
          }}
        >
          {NavData.map((item, index) => {
            return (
              <Box
                onClick={() => {
                  navigate(item.Addres);
                }}
                key={index}
                sx={{
                  textDecoration: "none",
                  fontSize: {
                    xl: "19px",
                    lg: "17px",
                    md: "15px",
                    sm: "14px",
                  },
                  color: Drackmode ? "#fff" : "#2a2828ff",
                  fontFamily: "Peyda, sans-serif",
                  position: "relative",
                  cursor: "pointer",
                  transition: ".5s",
                  "&:hover": {
                    textShadow: Drackmode
                      ? " 2px 2px 4px #eae3e3ff"
                      : " 0px 0px 2px #4e4b4bff",
                  },
                }}
                component={"p"}
              >
                {item.Value}
              </Box>
            );
          })}
        </Box>
        <Box
          id="left-header"
          component={"div"}
          sx={{
            width: "20%",
            position: "relative",
            top: "-60%",
            left: "1%",
            padding: "1px",
            display: "flex",
            gap: "5px",
          }}
        >
          <Box
            sx={{
              width: "auto",
              height: "6vh",
              position: "relative",
              top: "10%",
              borderRadius: "10px",
              display: "flex",
              gap: "5px",
            }}
            component={"div"}
          >
            <MotionBox
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              sx={{
                position: "relative",
                width: "49px",
                height: "80%",
                bgcolor: Drackmode ? "#145b81cc" : "#38BDF8",
                top: "5px",
                left: "5%",
                borderRadius: "80%",
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                cursor: "pointer",
              }}
             onClick={()=>{SetDarckmode(!Drackmode)}}
            >
              <Box
                sx={{
                  position: "relative",
                  rotate: "-30deg",
                  width: "30px",
                  height: "30px",
                  top: "10px",
                  borderRadius: "100%",
                }}
                component={"img"}
                src={Moon}
              />
            </MotionBox>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "30%",
              height: "80%",
              top: "10px",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              left: "10%",
              cursor: "pointer",
            }}
            component={"div"}
          >
            <Box
              sx={{ position: "relative", width: "100%", height: "100%" }}
              component={"img"}
              src={Registration}
              onClick={() => {
                navigate("/RegesterHandeler");
              }}
            />
          </Box>
        </Box>
      </Box>
      <MotionBox
        sx={{
          position:"sticky",
          height: "4px",
          borderRadius:"10px",
          bgcolor:Drackmode ? "#bc4408ff":"#38BDF8",
          transform: `scaleX(${scrollYProgress})`,
        }}
      ></MotionBox>
    </>
  );
};

export { BigsideNav };
