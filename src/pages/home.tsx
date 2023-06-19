// import Demo from "./demo";

import HomeLogin from "@/components/homeLogin";
import { Box, Grid } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { StrictMode } from "react";

export default function HomeCitizen() {
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <Box
          width="100vw"
          height="100vh"
          sx={{ bgcolor: "#E5ECFF", padding: "7px" }}
        >
          <Box width="100%" height="100%" sx={{ bgcolor: "#ABC8EA" }}>
            <Grid
              container
              sx={{ width: "100%", height: "100%" }}
              display={"flex"}
              flexDirection={"column"}
            >
              <Grid
                item
                p={{ sm: 2, md: 4, lg: 4 }}
                sx={{ width: "60%", height: "100%" }}
              />
              <HomeLogin />
            </Grid>
          </Box>
        </Box>
      </StyledEngineProvider>
    </StrictMode>
  );
}
