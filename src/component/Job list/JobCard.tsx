import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
export const JobCard = () => {
  return (
    <>
      <Box
        sx={{
          width: "80%",
          height: "200px",
          bgcolor: "#fff",
          boxShadow: 3,
          position: "relative",
          borderRadius: "5px",
          cursor:"pointer"
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "120px",
            justifyContent: "end",
            flexDirection: "row-reverse",
          }}
        >
          <Box
            sx={{
              width: "134px",
              height: "95px",
              bgcolor: "#D9D9D9",
              position: "relative",
              left: "-10px",
              top: "10px",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{ position: "absolute", width: "100%", height: "100%" }}
              component={"img"}
              src="wdedre"
              alt="nopic"
            />
          </Box>
          <Box
            sx={{
              width: "200px",
              height: "100px",
              position: "relative",
              left: "-1%",
              top: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "95%",
                height: "30px",
                display: "flex",
                justifyContent: "end",
                justifyItems: "end",
                fontFamily: "Peyda, sans-serif",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              کارشناس گمرک و ترخیص کالا
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "95%",
                height: "30px",
                display: "flex",
                justifyContent: "end",
                justifyItems: "end",
                fontFamily: "Peyda, sans-serif",
                fontSize: "15px",
              }}
            >
              شرکت سپهرگان
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "95%",
                height: "30px",
                display: "flex",
                justifyContent: "end",
                justifyItems: "end",
                fontFamily: "Peyda, sans-serif",
                fontSize: "15px",
              }}
            >
              تهران
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "90%",
            height: "1px",
            bgcolor: "#ccc",
            position: "relative",
            left: "5%",
          }}
        ></Box>
        <Box sx={{ width: "100%", height: "10vh" }}>
          <Button
            sx={{
              bgcolor: "#38BDF8",
              color: "#000",
              width: "100px",
              fontFamily: "Peyda, sans-serif",
              position:"relative",
              top:"10px",
              left:"5%"
            }}
          >
            ارسال رزومه
          </Button>
        </Box>
      </Box>
    </>
  );
};
