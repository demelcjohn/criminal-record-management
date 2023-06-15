import Image from "next/image";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import React from "react";
import { StrictMode } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import HomeCitizen from "./home";

export default function Home() {
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <Box
          width="100vw"
          height="100vh"
          sx={{ bgcolor: "#E5ECFF", padding: "7px" }}
        >
          <HomeCitizen />
        </Box>
      </StyledEngineProvider>
    </StrictMode>
  );
}
