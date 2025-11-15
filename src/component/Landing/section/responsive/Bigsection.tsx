import React from "react";
import { Box } from "@mui/material";
import img from "../../../../assets/Landing/section.png"

const BigSection = () => {
  const Countelm: string = "14325";
  const Countecompany: string = "14325";

  const StyleTextaboutJobsara = {
    display: "flex",
    gap: "5px",
    position: "relative",
    fontWeight: "bold",
    fontFamily: "Peyda, sans-serif",
    fontSize: { xl: "400%", md: "40px" },
    left: {xl:"30%",lg:"25%",md:"15%"},
    top: "10%",
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          bgcolor: "#ccc",
          position: "relative",
        }}
      >
        <Box
          id="imag-section"
          sx={{ position: "absolute", width: "100%", height: "100%" }}
          component={"img"}
          src={img}
        ></Box>
        <Box
          sx={{ display: "flex", gap: "2px" }}
          id="contentsection"
          component={"div"}
        >
          <Box component={"div"} sx={{ color: "" }}>
            <Box
              id="text-about-jobsara"
              sx={StyleTextaboutJobsara}
              component={"div"}
            >
              <Box sx={{ boxShadow: 1 }} component={"p"}>
                شرکت ایرانی
              </Box>
              <Box sx={{ color: "#F59E0B" }} component={"p"}>
                {Countecompany}
              </Box>
              <Box component={"p"}>آگهی استخدام فعال در </Box>
              <Box sx={{ color: "#F59E0B" }} component={"p"}>
                {Countelm}
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                top: "2%",
                width:"100%",
                left:{xl:"50%",lg:"50%", md:"45%"},
                fontSize: {xl:"20px", lg:"18px",md:"15"},
                fontFamily: "Peyda, sans-serif",
                fontWeight: "bold",
              }}
              component={"div"}
            >
              <p>
                فضایی برای رشد کسب و کار شما - پرداخت نهایی پس از رضایت از نتیجه
                کار
              </p>
            </Box>
            <Box component={'div'} sx={{position:"relative",width:"100%", height:'auto',top:"20%",bgcolor:"#0000"}}>
            <Box
              id="search-job"
              component={"div"}
              sx={{
                position: "relative",
                display: "flex",
                gap: "20px",
                top: "20%",
                left: {xl:"25%",lg:"20%",md:"19%"},
                width:"100%",
               
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "25%",
                  height: "8vh",
                  bgcolor: "#38bdf8ff",
                  borderRadius: "10px",
                  transition:"0.5s",
                     "&:hover": {
                      bgcolor: "#369ac5ff",
                    },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    top: "30%",
                    left: "13%",
                    fontWeight: "bold",
                    fontFamily: "Peyda, sans-serif",
                    fontSize: {xl:"16px", lg:"12px", md:"12px"},
                    cursor: "pointer",
                 
                  }}
                >
                  جستجودر مشاغل
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: "25%",
                  borderRadius: "10px",
                  border: "solid 2px #ccc",
                  textAlign: "right",
                  padding: 1,
                  bgcolor: "transparent",
                  fontFamily: "Peyda, sans-serif",
                }}
                component={"input"}
                type="text"
                placeholder="نام شهر"
              ></Box>
              <Box
                sx={{
                  position: "relative",
                  width: "25%",
                  borderRadius: "10px",
                  border: "solid 2px #ccc",
                  textAlign: "right",
                  padding: 1,
                  bgcolor: "transparent",
                  fontFamily: "Peyda, sans-serif",
                }}
                component={"input"}
                type="text"
                placeholder="گروه شغلی"
              ></Box>
              <Box
                sx={{
                  position: "relative",
                  width: "90%",
                  borderRadius: "10px",
                  border: "solid 2px #ccc",
                  textAlign: "right",
                  padding: 1,
                  bgcolor: "transparent",
                  fontFamily: "Peyda, sans-serif",
                }}
                component={"input"}
                type="text"
                placeholder="...عنوان شغل با نام شرکت"
              ></Box>
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export { BigSection };
