import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Logo from "../../../assets/Landing/Logo.png";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import MenuPic from "../../../assets/Landing/Menu.png";
import CloseImg from "../../../assets/Landing/Close.png";
import Moonpic from "../../../assets/Landing/Moon.png";
import { useNavigate } from "react-router-dom";

const SmallNav: React.FC = () => {
  const [NavData, setNavData] = React.useState([
    { id: "4", Value: "درباره ما", Addres: "/AboutmyPage" },
    { id: "3", Value: " وبلاگ ها", Addres: "/webloGPage" },
    { id: "2", Value: "شرکت‌های برتر", Addres: "/BestcompanyPage" },
    { id: "1", Value: "جستجوی مشاغل", Addres: "/prouductPage" },
  ]);
  const [Menu, setMenu] = React.useState(false);

  const MotionBox = motion(Box);
  const navigat = useNavigate();

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#fff",
        height: "100px",
        boxShadow: 1,
        borderRadius: "5px",
      }}
    >
      <MotionBox
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        sx={{
          width: "50px",
          height: "50px",
          bgcolor: "#0a2c5bcc",
          position: "relative",
          left: "87%",
          top: "20%",
          borderRadius: "10px",
        }}
        onClick={() => {
          setMenu(!Menu);
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "70%",
            height: "70%",
            top: "13%",
            left: "15%",
          }}
          component={"img"}
          src={MenuPic}
        ></Box>
      </MotionBox>
      <Box
        style={{ visibility: Menu ? "visible" : "hidden" }}
        component={"div"}
        sx={{
          position: "relative",
          width: "100%",
          background: "linear-gradient(45deg, #4f5680ff 30%, #1E3A8A 90%)",
          borderRadius: "10px",
          boxShadow: 2,
          height: "100vh",
          top: "-50%",
          transition: "0.5s",
          border: "solid 1px #274755ff,",
          zIndex: "100",
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "100px" }}>
          <Box
            sx={{
              position: "relative",
              width: "50px",
              height: "50px",
              bgcolor: "#0a2c5bcc",
              borderRadius: "10px",
              padding: "2px",
              top: "10px",
              left: "90%",
              "&:hover": {
                bgcolor: "#20477ecc",
              },
            }}
            component={"div"}
            onClick={() => {
              setMenu(false);
            }}
          >
            <Box
              src={CloseImg}
              component={"img"}
              sx={{
                position: "absolute",
                width: "50%",
                height: "50%",
                top: "20%",
                left: "20%",
              }}
            ></Box>
            <MotionBox
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              id="Darck-ModButton"
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "10px",
                position: "relative",
                bgcolor: "#0a2c5bcc",
                left: "-120%",
                padding: "1px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "50%",
                  height: "50%",
                  top: "20%",
                  left: "20%",
                  rotate: "-12deg",
                }}
                component={"img"}
                src={Moonpic}
              ></Box>
            </MotionBox>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontFamily: "Peyda, sans-serif",
            padding: 1,
            fontSize: "20px",
            mt: "30%",
          }}
          id="menuValu"
        >
          {NavData.map((item, index) => {
            return (
              <>
                <Box
                  key={index}
                  onClick={() => {
                    navigat(item.Addres);
                  }}
                  sx={{ margin: "0 auto 10px ", cursor: "pointer" }}
                  component={"p"}
                >
                  {item.Value}
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export { SmallNav };
