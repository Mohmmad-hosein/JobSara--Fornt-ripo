import React, { type Reducer } from "react";
import { Box, Typography } from "@mui/material";
import picturLogin from "../../assets/regester/loginimg.png";
import { useContext, useState } from "react";
import { NewContext } from "../Context/context";
import toast from "react-hot-toast";
import * as yup from "yup";
import "./Sighenup.css";

//ValidateForm

export const SigenUp: React.FC = () => {
  const data = useContext(NewContext);
  const Drackmode = false;

  //stateMentInput
  const [Value, setValue] = React.useState({
    emile: "",
    password: "",
    Confrimpassword: "",
  });
  const [Errors, SetErrors] = React.useState<Record<string, string>>({});
  console.log(data);
  const ValidationScham = yup.object().shape({
    email: yup
      .string()
      .email("لطفا یک ایمیل معتبر وارد کنید")
      .required("این فیلد الزامی است"),
    password: yup
      .string()
      .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
      .required("این فیلد الزامی است"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "رمز عبور و تکرار آن باید یکسان باشد")
      .required("این فیلد الزامی است"),
  });

  function ChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValue({ ...Value, [name]: value });
    if (Errors[name]) {
      SetErrors({ ...Errors, [name]: "" });
    }
  }

  async function SubmitHandeler(e: React.FormEvent) {
    e.preventDefault();

    try {
      // اعتبارسنجی با yup
      await ValidationScham.validate(Value, { abortEarly: false });

      // اگر اعتبارسنجی موفق بود
      SetErrors({});
      toast.success("ثبت نام با موفقیت انجام شد!");

      // ارسال داده به سرور یا ادامه فرآیند
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors: Record<string, string> = {};

        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });

        SetErrors(newErrors);
        toast.error("لطفا خطاهای فرم را بررسی کنید");
      }
    }
  }

  console.log(SubmitHandeler, Errors, Value);

  console.log(Error);
  //Html
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundColor: Drackmode ? "#393939" : "#ffff",
        }}
      >
        <Box
          id="Login-CenterHandeler"
          sx={{
            position: "absolute",
            width: "100%",
            height: "89vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            id="Login-side"
            sx={{
              position: "relative",
              width: "70%",
              height: { xl: "70vh", sm: "80vh" },
              backgroundColor: Drackmode ? "#393939" : "#E3E3E3",
              borderRadius: "30px",
              boxShadow: 20,
              padding: "5px",
            }}
          >
            <Box
              id="Login-Textwraper"
              sx={{
                width: "100%",
                height: "10vh",
                bgcolor: "transparent",
                display: "flex",
                justifyContent: {
                  xl: "end",
                  md: "center",
                  sm: "cenetr",
                  xs: "center",
                },
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Typography
                id="text-Login "
                variant="h4"
                sx={{
                  color: Drackmode ? "#FFF" : "#131212ff",
                  fontWeight: "bold",
                  left: "-10px",
                  position: "relative",
                  fontFamily: "Peyda, sans-serif",
                }}
              >
                ثبت نام
              </Typography>
            </Box>
            <Box
              id="Login-AvatarAndForm"
              sx={{
                position: "relative",
                width: "100%",
                height: "60vh",
                display: "flex",
                flexFlow: {
                  xl: "nowrap",
                  lg: "column",
                  md: "column",
                  sm: "column",
                  xs: "column",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                id="ImgHandeler"
              >
                <Box
                  sx={{
                    width: {
                      xl: "90%",
                      lg: "70%",
                      md: "60%",
                      sm: "85%",
                      xs: "80%",
                    },
                    height: {
                      xl: "90%",
                      lg: "100%",
                      md: "100%",
                      sm: "100%",
                      xs: "100%",
                    },
                    padding: "1rem",
                    position: "relative",
                    bottom: "5%",
                    isolation: "isolate",
                  }}
                  component={"img"}
                  src={picturLogin}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
                id=" FormHandeler"
              >
                <Box
                  id="FildeHandeler"
                  sx={{
                    width: "90%",
                    height: "70%",
                    position: "relative",
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    alignItems: {
                      xl: "end",
                      lg: "center",
                      md: "center",
                      sm: "center",
                      xs: "center",
                    },
                    gap: "25px",
                  }}
                >
                  <Box
                    onChange={ChangeValue}
                    component={"input"}
                    name="email"
                    type="text"
                    sx={{
                      width: "75%",
                      height: "40px",
                      borderRadius: "12px",
                      textAlign: "right",
                      padding: "5px",
                      fontFamily: "Peyda, sans-serif",
                      paddingBlock: "5px",
                      outlineColor: "#748DAE",
                      border: "none",
                      borderWidth: "1px",
                      borderColor: "#748DAE",
                      borderStyle: "solid",
                      color: Drackmode ? "#fff" : "#000",
                      backgroundColor: "transparent",
                      "::placeholder": {
                        color: Drackmode ? "#FFF" : "",
                      },
                    }}
                    placeholder={"https://example.com"}
                  />
                  {Errors.email && (
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Peyda, sans-serif",
                        color: "#d32f2f",
                        fontSize: "0.8rem",
                        textAlign: "right",
                        width: "70%",
                      }}
                    >
                      {Errors.email}
                    </Typography>
                  )}
                  <Box
                    onChange={ChangeValue}
                    component={"input"}
                    name="password"
                    type="text"
                    sx={{
                      width: "75%",
                      height: "40px",
                      borderRadius: "12px",
                      textAlign: "right",
                      padding: "5px",
                      fontFamily: "Peyda, sans-serif",
                      paddingBlock: "5px",
                      outlineColor: "#748DAE",
                      border: "none",
                      borderWidth: "1px",
                      borderColor: "#748DAE",
                      borderStyle: "solid",
                      backgroundColor: "transparent",
                      color: Drackmode ? "#fff" : "#000",
                      "::placeholder": {
                        color: Drackmode ? "#FFF" : "",
                      },
                    }}
                    placeholder={"متن مور نظر"}
                  />
                  {Errors.password && (
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Peyda, sans-serif",
                        color: "#d32f2f",
                        fontSize: "0.8rem",
                        textAlign: "right",
                        width: "70%",
                      }}
                    >
                      {Errors.password}
                    </Typography>
                  )}

                  <Box
                    component={"input"}
                    onChange={ChangeValue}
                    name="confirmPassword"
                    type="Confrimpassword"
                    sx={{
                      width: "75%",
                      height: "40px",
                      borderRadius: "12px",
                      textAlign: "right",
                      padding: "5px",
                      fontFamily: "Peyda, sans-serif",
                      paddingBlock: "5px",
                      outlineColor: "#748DAE",
                      border: "none",
                      borderWidth: "1px",
                      borderColor: "#748DAE",
                      borderStyle: "solid",
                      backgroundColor: "transparent",
                      color: Drackmode ? "#fff" : "#000",
                      "::placeholder": {
                        color: Drackmode ? "#FFF" : "",
                      },
                    }}
                    placeholder={"متن مورد نظر"}
                  />

                  {Errors.confirmPassword && (
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Peyda, sans-serif",
                        color: "#d32f2f",
                        fontSize: "0.8rem",
                        textAlign: "right",
                        width: "70%",
                      }}
                    >
                      {Errors.confirmPassword}
                    </Typography>
                  )}

                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: {
                        xl: "end",
                        lg: "cenetr",
                        md:"cenetr",
                        sm: "cenetr",
                        xs: "cenetr",
                      },
                      alignItems: {
                        xl: "end",
                        lg: "cenetr",
                        md:"center",
                        sm: "cenetr",
                        xs: "cenetr",
                      },
                      flexDirection: "row-reverse",
                    }}
                    id="naviagate-Wraper"
                  >
                    <Typography
                      sx={{
                        color: Drackmode ? "#fff" : "#000000",
                        fontFamily: "Peyda, sans-serif",
                        cursor: "pointer",
                      }}
                    >
                      از قبل حساب کاربری دارید؟
                    </Typography>
                    <Typography
                      sx={{
                        color: "#0762FF",
                        fontFamily: "Peyda, sans-serif",
                        cursor: "pointer",
                      }}
                    >
                      ورود به حساب کاربری
                    </Typography>
                  </Box>

                  <Box
                    component={"div"}
                    id="Wraper-SubmiteButton"
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "70%",
                    }}
                  >
                    <Box
                      sx={{
                        width: "398px",
                        height: "50px",
                        borderRadius: "12px",
                        backgroundColor: "#38BDF8",
                        color: "#000000",
                        fontFamily: "Peyda, sans-serif",
                        fontWeight: "boold",
                        position: "relative",
                        left: "-10px",
                        cursor: "pointer",
                      }}
                      onClick={SubmitHandeler}
                      component={"button"}
                    >
                      ساخت حساب کاربری
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
