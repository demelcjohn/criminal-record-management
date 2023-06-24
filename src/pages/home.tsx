import HomeLogin from "@/components/homeLogin";
import { Box, Grid } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { StrictMode } from "react";

export default function HomeCitizen() {
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <Box width="100%" height="100%" sx={{ bgcolor: "#EDEFF6" }}>
          <Box width="100%" height="100%" sx={{ bgcolor: "#ABC8EA" }}>
            <Grid
              container
              sx={{ width: "100%", height: "100%" }}
              display={"flex"}
              flexDirection={"column"}
            >
              <Grid item sx={{ width: "60%", height: "100%" }}>
                <Box
                  sx={{
                    backgroundImage: 'url("/justice.jpg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {/* Your content */}
                </Box>
              </Grid>
              <HomeLogin />
            </Grid>
          </Box>
        </Box>
      </StyledEngineProvider>
    </StrictMode>
  );
}
