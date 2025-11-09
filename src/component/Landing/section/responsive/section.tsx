import React from "react";
import { Box } from "@mui/material";
import { BigSection } from "./Bigsection";
import { SmallSection } from "./smallsection";

const Section = () => {
  return (
    <>
      <Box
        sx={{ display: { xs:"none", sm: "none", md: "none", lg: "block", xl: "block" } }}
      >
        <BigSection />
      </Box>
      <Box sx={{ display: {  sm: "block", md: "block", lg: "none", xl: "none" } }}>
        <SmallSection />
      </Box>
    </>
  );
};

export { Section };
