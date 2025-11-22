import React from "react";
import { Box } from "@mui/material";
import BestJob from "../../../assets/Landing/Bestjob.png";

const JobSaraPurpos: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 1,
          height: "30vh",
          display: "flex",
          gap:"5px",
          top: "10%",
          justifyContent: "center",
          justifyItems: "center",
        }}
        component={"div"}
      >
        <Box
          sx={{
            position: "relative",
            width: "45%",
            bgcolor: "#111010cc",
            height: "40vh",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{ position: "absolute", width: "100%", height: "100%" }}
            component={"img"}
            src={BestJob}
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "45%",
            bgcolor: "#fff",
            height: "40vh",
            borderRadius: "10px",
          }}
          component={"div"}
        >
          <Box
            sx={{
              position: "relative",
              textAlign: "right",
              color: "#000000",
              fontWeight: "bold",
              fontFamily: "Peyda, sans-serif",
              width:"100%"
             
            }}
            component={"div"}
          >
            <Box sx={{ position: "relative",  }} component={"h2"}>
              هدف جابـــــسرا چیه؟
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "91%",
              height: "30vh",
              left: "8%",
              fontFamily: "Peyda, sans-serif",
              textAlign: "right",
              fontSize: "22px",
              color: "#000000",
              top: "4%",
             
            }}
            component={"div"}
          >
            <Box component={"p"}>
              جابسرا با هدف راحت تر کردن پیدا کردن و اموزش برای کار اموزان و
              راحت سازی ارتباط و شکل گرفتن همکاری بین کارجویان و کارفرما با
              استفاده از ابزار هایی مانند هوش مصنوعی و راحتی ارتباط ساخته شده
              است
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export { JobSaraPurpos };
