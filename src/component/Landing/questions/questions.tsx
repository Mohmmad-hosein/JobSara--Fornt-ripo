import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import { NewContext } from "../../Context/context";
import { useContext } from "react";

const Freequestions = () => {
  const data = useContext(NewContext);

  const [Data, SetData] = useState([
    { id: "1", text: "whyTypeScript" },
    { id: "1", text: "whyjobsara" },
    { id: "1", text: "bestCorse" },
    { id: "1", text: "bestCorse" },
    { id: "1", text: "bestCorse" },
  ]);

  const DarckMode = data?.darkMode || false;

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "30vh",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          justifyContent: "center",
          justifyItems: "center",
          overflowX: "auto",
          top: "10px",
        }}
      >
        {Data.map((item, index) => {
          return (
            <>
              <Box
                key={index}
                sx={{
                  width: "90%",
                  height: "10vh",
                  bgcolor: DarckMode ? "#393939": "#cccc",
                  top: "10px",
                  position: "relative",
                  left: "5%",
                  borderRadius: "10px",
                  display: "flex",
                  padding: "5px",
                }}
                component={"div"}
              >
                <Box
                  sx={{
                    position: "relative",
                    left: "90%",
                    height: "50px",
                    width: "50px",
                    borderRadius: "100%",
                    bgcolor: DarckMode ? "#fff" : "#c9bdbdcc",
                    
                  }}
                  component={"div"}
                ></Box>
                <Box sx={{ fontFamily: "Peyda, sans-serif",color:DarckMode ?"#fff":"#000" }} component={"p"}>
                  {item.text}
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export { Freequestions };
