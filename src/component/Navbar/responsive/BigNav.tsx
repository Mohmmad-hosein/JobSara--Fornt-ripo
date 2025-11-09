import React from "react";
import { Box } from "@mui/material";
import Logo from "../../../assets/Landing/Logo.png";
import { useNavigate } from "react-router-dom";


// Define the type for a single navigation item
interface NavItem {
  Addres: string;
  Value: string;
}

// Define the props interface for the component
interface BigsideNavProps {
  NavData: NavItem[];
  setNavData: React.Dispatch<React.SetStateAction<NavItem[]>>;
}





const BigsideNav: React.FC<BigsideNavProps> = ({ NavData, setNavData }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        component="div"
        sx={{
          width: 1,
          height: "100px",
          backgroundColor: "#fff",
          boxShadow: 1,
        }}
        data-aos="fade-down"
      >
        <Box
          component="img"
          id="LogoHeader"
          sx={{ position: "relative", left: "85%", top: "30%" }}
          src={Logo}
          alt="Logo"
        ></Box>
        <Box
          component={"div"}
          id="wraperLink"
          sx={{
            display: "flex",
            gap: 3,
            position: "relative",
            left: { sm: "30%", md: "47%", lg: "50%" },
            height: "40px",
            backgroundColor: "#fff",
            width: { md: "33%", lg: "33%", xl: "33%", sm: "53%" },
            bottom: "10px",
            justifyContent: "center",
            justifyItems: "center",
            top: "-30%",
          }}
        >
          {NavData.map((item, index) => {
            return (
              <Box
                onClick={() => {
                  navigate(item.Addres);
                }}
                key={index}
                sx={{
                  textDecoration: "none",
                  fontSize: {
                    xl: "19px",
                    lg: "17px",
                    md: "15px",
                    sm: "14px",
                  },
                  color: "#545454",
                  fontFamily: "Peyda, sans-serif",
                  position: "relative",
                  top: "10px",
                  cursor: "pointer",
                  transition: ".5s",
                }}
                component={"p"}
              >
                {item.Value}
              </Box>
            );
          })}
        </Box>
        <Box
          id="left-header"
          component={"div"}
          sx={{
            width: "20%",
            position: "relative",
            top: "-60%",
            left: "1%",
            padding: "1px",
            display: "flex",
            gap: "5px",
          }}
        >
          <Box
            id="add and boss"
            component={"div"}
            sx={{
              display: "flex",
              gap: "5px",
              position: "relative",
              top: { sm: "10px", lg: "10", xl: "0" },
            }}
          >
            <Box
              component={"p"}
              sx={{
                fontWeight: "bold",
                fontFamily: "Peyda, sans-serif",
                color: "#545454",
                fontSize: { sm: "10px", xl: "100%", lg: "60%" },
              }}
            >
              ثبت آگهی
            </Box>
            <Box
              component={"p"}
              sx={{
                fontWeight: "bold",
                fontFamily: "Peyda, sans-serif",
                color: "#545454",
                fontSize: { sm: "10px", xl: "100%", lg: "60%" },
              }}
            >
              /
            </Box>
            <Box
              component={"p"}
              sx={{
                fontWeight: "bold",
                fontFamily: "Peyda, sans-serif",
                color: "#545454 ",
                fontSize: { sm: "10px", xl: "100%", lg: "60%" },
              }}
            >
              بخش کار فرمایان
            </Box>
          </Box>
          <Box
            component={"p"}
            sx={{
              position: "relative",
              top: "-4px",
              fontSize: "20px",
              fontFamily: "Peyda, sans-serif",
              color: "#fff",
              opacity: "0.5",
              boxShadow: 1,
              display: "flex",
            }}
          >
            |
          </Box>
          <Box
            id="sighen up and login"
            component={"div"}
            sx={{
              display: "flex",
              gap: "5px",
              width: "35%",
              backgroundColor: "#38BDF8",
              height: "50px",
              position: "relative",
              top: "10px",
              borderRadius: "10px",
            }}
          >
            <Box
              component={"p"}
              sx={{
                fontSize: { sm: "10px", xl: "80%", lg: "60%" },
                color: "#545454",
                fontFamily: "Peyda, sans-serif",
                position: "relative",
                left: "15%",
                fontWeight: "bold",
              }}
            >
              ثبت نام
            </Box>
            <Box
              component={"div"}
              sx={{
                backgroundColor: "#fff",
                width: "49px",
                height: "2px",
                rotate: "110deg",
                m: "0",
                p: "0",
                position: "relative",
                top: "24px",
                left: "1%",
                padding: ".2px",
              }}
            ></Box>
            <Box
              component={"p"}
              sx={{
                fontSize: { sm: "14px", xl: "100%", lg: "80%" },
                color: "#545454",
                fontFamily: "Peyda, sans-serif",
                position: "relative",
                left: "-10px",
                fontWeight: "bold",
              }}
            >
              ورود
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { BigsideNav };
