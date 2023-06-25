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
                  display={"flex"}
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    backgroundImage: 'url("/justice.jpg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                    color: "white",
                    textShadow: "10px 10px 20px rgba(0, 0, 1, 1)",
                    WebkitTextStroke: "1px black",
                  }}
                  padding="10%"
                >
                  <h1>
                    Citizen access to criminal records enables informed
                    decision-making, promoting transparency and accountability.
                    It empowers individuals to prioritize personal safety, make
                    informed choices, and contribute to community security. By
                    providing reliable information, access to criminal records
                    fosters a fair and just society based on transparency and
                    trust.
                  </h1>
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
