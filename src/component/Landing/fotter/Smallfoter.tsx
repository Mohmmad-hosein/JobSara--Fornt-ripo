import React from "react";
import Namad from "../../../assets/Landing/namad.png";
import Shar from "../../../assets/Landing/Shar.png";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SmallFotter: React.FC = () => {
  const naviate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: "90%",
          height: "17vh",
          bgcolor: "#f8f8f8ff",
          borderRadius: "10px",
          left: "4%",
          position: "relative",
          top: "10px",
          boxShadow: "2",
        }}
      >
        <Box
          component={"div"}
          sx={{
            position: "relative",
            width: "50%",
            borderTopRightRadius: "40px",
            borderEndEndRadius: "40px",
            bgcolor: "#c1bfbfff",
            height: "17vh",
            boxShadow: 1,
          }}
        >
          <Box
            sx={{
              fontFamily: "Peyda, sans-serif",
              position: "relative",
              top: "27%",
              left: "10px",
              padding: "5px",
              width: "120px",
              height: "40px",
              borderRadius: "10px",
              bgcolor: "#1E3A8A",
              color: "#fff",
              cursor: "pointer",
            }}
            component={"button"}
            onClick={() => {
              naviate("/Login");
            }}
          >
            همین حالا شروع کن
          </Box>
        </Box>
        <Box
          sx={{
            width: "30%",
            height: "10vh",
            position: "relative",
            left: "69%",
            top: "-30%",
            display: "flex",
            justifyContent: "end",
            justifyItems: "end",
          }}
        >
          <Box
            sx={{
              fontFamily: "Peyda, sans-serif",
              position: "relative",
              left: "1%",
              color: "#635e5eff",
              bottom: "120%",
              textShadow: " 0 0 3px #f0ededff",
              fontWeight: "bo",
            }}
            component={"h5"}
          >
            استخدام در جابســــــرا
          </Box>
          <Box
            component={"div"}
            sx={{
              
              width: "50px",
              bgcolor: "#c1bfbfff",
              height: "5vh",
              position: "relative",
              left: "4px",
              borderTopLeftRadius: "20px",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export { SmallFotter };
