import React from "react";
import { Box, Button } from "@mui/material";
export const JobFilter = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          component={"input"}
          placeholder="...عنوان شغل با نام شرکت"
          type="text"
          sx={{
            width: "60%",
            height: "61px",
            textAlign: "center",
            borderRadius: "8px",
            fontFamily: "Peyda, sans-serif",
            paddingRight: "5px",
          }}
        />
        <Box
          component={"input"}
          placeholder="...گروه شغلی"
          type="text"
          sx={{
            width: "60%",
            height: "61px",
            textAlign: "center",
            borderRadius: "8px",
            fontFamily: "Peyda, sans-serif",
            paddingRight: "5px",
          }}
        />
        <Box
          component={"input"}
          placeholder="...نام شهر"
          type="text"
          sx={{
            width: "60%",
            height: "61px",
            textAlign: "center",
            borderRadius: "8px",
            fontFamily: "Peyda, sans-serif",
            paddingRight: "5px",
          }}
        />
        <Box
          sx={{
            width: "60%",
            height: "67px",
            borderRadius: "5px",
            display: "flex",
          }}
        >
          <Box
            value={"تعداد نمایش "}
            component={"select"}
            sx={{
              position: "relative",
              bgcolor: "#fff",
              width: "40%",
              height: "61px",
              fontFamily: "Peyda, sans-serif",
              borderRadius: "8px",
              left: "55%",
            }}
          >
            <Box sx={{ textAlign: "right" }} component={"option"}>
              تعداد نمایش
            </Box>
            <Box sx={{ textAlign: "center" }} component={"option"}>
              5
            </Box>
            <Box sx={{ textAlign: "center" }} component={"option"}>
              5
            </Box>
            <Box sx={{ textAlign: "center" }} component={"option"}>
              5
            </Box>
          </Box>
          <Button
            sx={{
              height: "61px",
              bgcolor: "#38BDF8",
              borderRadius: "8px",
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Peyda, sans-serif",
              position:"relative",
              left:"-100px"
            }}
          >
            جستجو در مشاغل
          </Button>
        </Box>
      </Box>
    </>
  );
};
