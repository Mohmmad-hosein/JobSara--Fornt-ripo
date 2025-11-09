import React from "react";
import { Box } from "@mui/material";
import img from "../../../../assets/Landing/section.png";

const SmallSection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "50vh",
          bgcolor: "#ccc",
          position: "relative",
        }}
      >
        <Box
          sx={{ position: "absolute", width: "100%", height: "100%" }}
          component={"img"}
          src={img}
        ></Box>
        <Box
          sx={{
            width: "100%",
            height: "100px",
            position: "relative",
            top: "15%",
            display: "flex",
            fontFamily: "Peyda, sans-serif",
            color: "#000000",
            padding: "1px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <Box
            data-aos="fade-up"
            boxShadow={1}
            color={"#F59E0B"}
            position={"relative"}
            left={"15%"}
            top={"10%"}
            component={"p"}
          >
              6537 
          </Box>
          <Box
            data-aos="fade-up"
            position={"relative"}
            left={"15%"}
            top={"10%"}
            component={"p"}
          >
               شرکت ایرانــــی
          </Box>
          <Box
            data-aos="fade-up"
            position={"relative"}
            left={"15%"}
            top={"10%"}
            component={"p"}
          >
            {" "}
            آگهی استخدام فعال در
          </Box>
          <Box
            data-aos="fade-up"
            boxShadow={1}
            color={"#ac7008ff"}
            position={"relative"}
            left={"15%"}
            top={"10%"}
            component={"p"}
          >
            14325
          </Box>
        </Box>
        <Box
          data-aos="fade-right"
          sx={{
            position: "relative",
            top: "4%",
            width: "50%",
            fontWeight: "bold",
            fontFamily: "Peyda, sans-serif",
            fontSize: "30px",
            left: "-33%",
          }}
        >
          <Box sx={{ position: "relative", left: "100%" }} component={"p"}>
            فضایی برای رشد کسب و کار شما - پرداخت نهایی پس از رضایت از نتیجه کار
          </Box>
        </Box>
        <Box
          component={"div"}
          sx={{
            width: "100%",
            height: "100px",
            position: "relative",
            top: "1%",
           
          }}
        >
          <Box
            type="text"
            sx={{
              position: "relative",
              width: "60%",
              borderRadius: "10px",
              border: "solid 2px #31302d96",
              textAlign: "center",
              padding: 1,
              bgcolor: "transparent",
              fontFamily: "Peyda, sans-serif",
              left: "15%",
              top: "2px",
              height:"30px"
            }}
            component={"input"}
            placeholder="...عنوان شغل با نام شرکت"
            color={"#494343ff"}
            data-aos="fade-up"
          />

        </Box>
      </Box>
    </>
  );
};

export { SmallSection };
