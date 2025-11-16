import React from "react";
import { Box } from "@mui/material";

const AddSection = () => {
  const DarckValue =localStorage.getItem("Darckmode")
 
  return (
    <>
      <Box
        sx={{
          width: "90%",
          bgcolor: "#1E3A8A",
          height: "30vh",
          position: "relative",
          top: "10%",
          left: "5%",
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          borderRadius: "5px",
        }}
      >
        <Box
          component={"div"}
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Box
            component={"p"}
            sx={{
              fontFamily: "Peyda, sans-serif",
              fontWeight: "bold",
              color: "#ffff",
              top: "-1%",
              position: "relative",
              fontSize: "20px",
            }}
          >
            کارفرمای جابــــسرا هستید؟
          </Box>
        </Box>
        <Box
          component={"div"}
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Box
            component={"div"}
            sx={{
              fontFamily: "Peyda, sans-serif",
              fontWeight: "bold",
              color:DarckValue ? "#38BDF8":"#",
              top: "-1%",
              position: "relative",
              fontSize: "",
              bgcolor: DarckValue ? "#242424":"#fff",
              width: { xl: "20%", lg: "20%", md: "20%", sm: "28%" },
              height: "7vh",
              borderRadius: "4px",
              display: "flex",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                width: "40px",
                height: "6.7vh",
                borderRadius: "4px",
                bgcolor:  "#1E3A8A",
                position: "relative",
                left: "1%",
                top: "1px",
              }}
              component={"div"}
            ></Box>
            <Box
              sx={{
                position: "relative",
                top: "-10%",
                left: { xl: "10%", lg: "6%", md: "5%", sm: "-10px" },
              }}
              component={"p"}
            >
              آگهی خود را ثبت کنید
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { AddSection };
