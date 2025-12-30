import React from "react";
import { BigsideNav } from "../Landing/Navbar/responsive/BigNav";
import { SmallNav } from "../Landing/Navbar/responsive/SmalNav";
import { Box, Button } from "@mui/material";
import { JobCard } from "./JobCard";
import SearchFilter from "../../assets/prouduct/Search.png";
import close from "../../assets/Landing/Close.png";
import { JobFilter } from "./filterJob";

export const Joblist = () => {
  const [showModul, setShowModul] = React.useState(true);
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          zIndex: "100",
          bgcolor: "#fcf7f7ff",
          display: showModul ? "block" : "none",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "10vh",
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <Box
            component={"div"}
            onClick={() => {
              setShowModul(!showModul);
            }}
            sx={{
              position: "relative",
              width: "50px",
              height: "50px",
              bgcolor: "#38BDF8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              left: "-20px",
              top: "-25%",
            }}
          >
            <Box component={"img"} src={close} />
          </Box>
        </Box>
        <JobFilter/>
      </Box>
      <Box
        id="BigNAv-Wraper"
        sx={{
          visibility: {
            xl: "visible",
            lg: "visible",
            md: "hidden",
            sm: "hidden",
            xs: "hidden",
          },
        }}
      >
        <BigsideNav />
      </Box>

      <Box
        id="SmallNav-Wraper"
        sx={{
          visibility: {
            xl: "hidden",
            lg: "hidden",
            md: "visible",
            sm: "visible",
            xs: "visible",
          },
        }}
      >
        <SmallNav />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "-10%",
          padding: "1px",
        }}
        id="Fielid-Wraper"
      >
        <Box
          sx={{
            width: "80%",
            height: "16vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xl: "20px", lg: "20px", md: "10px", sm: "10px", xs: "10px" },
            borderBottom: "5px solid #2a3f79ff",
            boxShadow: " 0  0.5px #000000ff",
            visibility: {
              xl: "visible",
              lg: "visible",
              md: "visible",
              sm: "hidden",
              xs: "hidden",
            },
          }}
          id="Input-conteiner"
        >
          <Box
            component={"div"}
            onClick={() => {
              setShowModul(!showModul);
            }}
            sx={{
              width: "100x",
              height: "100px",
              borderRadius: "10px",
              position: "relative",
              left: "70%",
              zIndex: "10",
              visibility: {
                xl: "hidden",
                lg: "hidden",
                md: "hidden",
                sm: "visible",
                xs: "visible",
              },
            }}
          >
            <Box component={"img"} src={SearchFilter} />
          </Box>
          <Button
            sx={{
              width: "15%",
              height: "61px",
              bgcolor: "#38BDF8",
              borderRadius: "8px",
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Peyda, sans-serif",
            }}
          >
            جستجو در مشاغل
          </Button>
          <Box
            value={"تعداد نمایش "}
            component={"select"}
            sx={{
              bgcolor: "#fff",
              width: "10%",
              height: "61px",
              fontFamily: "Peyda, sans-serif",
              borderRadius: "8px",
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
          <Box
            component={"input"}
            placeholder="نام شهر"
            type="text"
            sx={{
              width: "10%",
              height: "61px",
              textAlign: "right",
              borderRadius: "8px",
              fontFamily: "Peyda, sans-serif",
              paddingRight: "5px",
            }}
          />
          <Box
            component={"input"}
            placeholder="گروه شغلی"
            type="text"
            sx={{
              width: "10%",
              height: "61px",
              textAlign: "right",
              borderRadius: "8px",
              fontFamily: "Peyda, sans-serif",
              paddingRight: "5px",
            }}
          />
          <Box
            component={"input"}
            placeholder="...عنوان شغل با نام شرکت"
            type="text"
            sx={{
              width: "28%",
              height: "61px",
              textAlign: "center",
              borderRadius: "8px",
              fontFamily: "Peyda, sans-serif",
              paddingRight: "5px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          top: "-11%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="Card-Wraper"
      >
        <Box
          sx={{
            position: "relative",
            width: "90%",
            height: "60vh",
            display: "flex",
            flexWrap: "wrap",
            overflowY: "scroll",
            justifyContent: "center",
            gap: "10px",
            top: "-20%",
          }}
        >
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </Box>
      </Box>
    </>
  );
};
