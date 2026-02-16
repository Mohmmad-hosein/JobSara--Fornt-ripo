import React from "react";
import { Box } from "@mui/material";
import Likejob from "../../../assets/Landing/Likejob.png";
const Jobsara = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 1,
          height: "30vh",
          display: "flex",
          gap: "10px",
          top: "10%",
          justifyContent: "center",
          justifyItems: "center",
        }}
        component={"div"}
      >
        <Box
          sx={{
            width: "45%",
            height: "40vh",
            position: "relative",
            borderRadius: "10px",
          }}
          component={"div"}
        >
          <Box
            component={"div"}
            sx={{
              width: "100%",
              position: "relative",
              height: "15vh",
            }}
          >
            <Box
              sx={{
                position: "relative",
                left: { xl: "76%", lg: "76%", md: "70%", sm: "50%" },
                color: "#100f0fff",
                fontWeight: "bold",
                fontFamily: "Peyda, sans-serif",
                fontSize: "20px",
              }}
              component={"p"}
            >
              حالا چرا جابســــرا؟
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "75%",
              height: "26vh",
              top: "-25%",
              textAlign: "right",
              fontFamily: "Peyda, sans-serif",
              left: "20%",
              lineHeight: { xl: "30px", lg: "30px", md: "24px", sm: "23px" },
              zIndex: { xl: "0", sm: "30", md: "30", lg: "30",xs:""},
            }}
            component={"div"}
          >
            <Box component={"p"}>
              این بخش یک ابزار کاربردی و هوشمند است که به سه گروه اصلی مخاطبان
              کمک می‌کند تا دقیقاً آنچه نیاز دارند را به سادگی پیدا کنند. چه شما
              به دنبال یادگیری مهارت‌های جدید باشید، چه در جستجوی نیروی متخصص
              برای کسب‌وکار خود، یا به دنبال فرصت شغلی مناسب، این فیلتر طراحی
              شده تا مسیر شما را کوتاه‌تر و هدفمندتر کند.
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "45%",
            height: "40vh",
            position: "relative",
            bgcolor: "#cccc",
            borderRadius: "10px",
          }}
          component={"div"}
        >
          <Box
            sx={{ position: "absolute", width: "100%", height: "100%" }}
            component={"img"}
            src={Likejob}
          ></Box>
        </Box>
      </Box>
    </>
  );
};
export { Jobsara };
