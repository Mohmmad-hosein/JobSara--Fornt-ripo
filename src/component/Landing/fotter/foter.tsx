import React from 'react'
import Namad from '../../../assets/Landing/namad.png'
import { Box } from "@mui/material";

const Fotter = () => {
  return (
    <>
      <Box
        component={"div"}
        sx={{ width: 1, position: "relative", top: "10px" }}
      >
        <Box component={"div"} sx={{ display: "flex", gap: "1px" }}>
          <Box
            sx={{
              position: "relative",
              border: " 5px solid #fff",
              bgcolor: "#D9D9D9",
              width: "50%",
              height: "10vh",
              borderRadius: "20px",
              top: "1px",
            }}
          ></Box>
          <Box
            sx={{
              width: "50%",
              height: "10vh",
              bgcolor: "#D9D9D9",
              position: "relative",
              top: "10px",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
          >
            <Box
              sx={{
                fontFamily: "Peyda, sans-serif",
                color: "#000000",
                position: "relative",
                left: "70%",
                fontSize: "30px",
                bottom: "12px",
              }}
              component={"h3"}
            >
              استخدام در جابســــــرا
            </Box>
          </Box>
        </Box>
        <Box
          component={"div"}
          sx={{
            position: "relative",
            width: "100%",
            bgcolor: "#D9D9D9",
            height: "58vh",
          }}
        >
          <Box
            sx={{
              position: "relative",
              left: "54%",
              top: "-7%",
              width: "45%",
              height: "12vh",
              fontFamily: "Peyda, sans-serif",
              display: "flex",
              flexFlow: "wrap",
              color: "#000000",
              fontSize: "17px",
              textAlign: "right",
            }}
            component={"div"}
            data-aos="fade-up"
          >
            <Box component={"p"}>
              پلتفرمه بزرگ جابسرا با قابلیته اموزش هوشمند به کار اموز ها و پیدا
              کردن شغل مناسب به راحت ترین شکل برای شما طراحی شده تا شما با خیال
              راحت و سریع به شغل مورد نظرتون برسید و همچنین این پلتفرم با کمک
              هوش مصنوعی کار را برای مسعول های استخدامی راحت کرده و بین افرادی
              که رزومه ارسال کردن رزومه ی انها بیشترین طتابق را با کاره درخواستی
              دارد در الویت میگذارد.
            </Box>
          </Box>
          <Box
            sx={{
              width: "45%",
              height: "25vh",
              bgcolor: "#fff",
              position: "relative",
              left: "50%",
              top:"-7%"
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20%",
                fontFamily: "Peyda, sans-serif",
                color: "#000000",
                justifyContent: "center",
                justifyItems: "center",
              }}
              component={"div"}
            >
              <Box component={"h3"}>جابســــــرا</Box>
              <Box component={"h3"}>کارفـــرمایان</Box>
              <Box component={"h3"}>کارجـــویان</Box>
            </Box>
            <Box
              component={"div"}
              sx={{
                width: 1,
                height: "100%",
                bgcolor: "#ccc",
                display: "flex",
                gap: "10%",
                justifyContent: "center",
                justifyItems: "center",
                position:"relative",
                
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "20%",
                  height: "100%",
                  bgcolor: "#fff",
                  top: "-2%",
                  
                  textAlign: "center",
                  fontFamily: "Peyda, sans-serif",
                }}
                component={"div"}
              >
                <Box component={"p"}>درباره ما</Box>
                <Box component={"p"}>تماس با ما</Box>
                <Box component={"p"}>دانلود اپلیکیشن</Box>
                <Box component={"p"}>حریم خصوصی</Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "20%",
                  height: "100%",
                  bgcolor: "#fff",
                  top: "-1%",
                 
                  textAlign: "center",
                  fontFamily: "Peyda, sans-serif",
                }}
                component={"div"}
              >
                <Box component={"p"}>ثبت آگهی استخدام</Box>
                <Box component={"p"}>efioe</Box>
                <Box component={"p"}>efioe</Box>
                <Box component={"p"}>efioe</Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "20%",
                  height: "100%",
                  bgcolor: "#fff",
                  top: "1%",
                 
                  textAlign: "center",
                  fontFamily: "Peyda, sans-serif",
                }}
                component={"div"}
              >
                <Box component={"p"}>درباره ما</Box>
                <Box component={"p"}>efioe</Box>
                <Box component={"p"}>efioe</Box>
                <Box component={"p"}>efioe</Box>
              </Box>
            </Box>
          </Box>

          <Box
            component={"div"}
            sx={{
              width: "30%",
              height: "20vh",
              position: "relative",
              top: "-30%",
              left: "1%",
              display: "flex",
              gap: 2,
            }}
          >
            <Box
              component={"img"}
              src={Namad}
              sx={{
                position: "relative",
                left: "20%",
                width: "30%",
                height: "90%",
                top: "10px",
              }}
            ></Box>
            <Box
              component={"img"}
              src={Namad}
              sx={{
                position: "relative",
                left: "20%",
                width: "30%",
                height: "90%",
                top: "10px",
              }}
            ></Box>
          </Box>
          <Box
            component={"div"}
            sx={{
              width: "90%",
              height: "1px",
              bgcolor: "#D9D9D9",
              position: "absolute",
              left: "4%",
              bottom: "29%",
              border: " 1px solid #a7a4a4ff",
            }}
          ></Box>
          <Box
            sx={{
              fontFamily: "Peyda, sans-serif",
              position: "relative",
              top: "-16%",
              left: "30%",
              color: "#000000",
            }}
            component={"p"}
          >
            کلیه حقوق برای «ای استخدام» محفوظ بوده و هرگونه استفاده از مطالب
            صرفا با مجوز کتبی مجاز است.
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { Fotter };
