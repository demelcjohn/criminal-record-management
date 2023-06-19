import Image from "next/image";
import { Grid, Box, TextField, Typography, Button, Stack } from "@mui/material";
import React from "react";
import { StrictMode } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import HomeCitizen from "./home";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const authNavigater = () => {
    router.push("/authority");
  };
  const citizenNavigater = () => {
    router.push("/home");
  };
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
              item
              p={{ sm: 2, md: 4, lg: 4 }}
              sx={{ width: "100%", height: "35%", bgcolor: "#000000" }}
            >
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Image src="/crm.svg" alt="Icon" width={100} height={100} />
                <Image src="/crmtext.svg" alt="Icon" width={250} height={100} />
              </Stack>
            </Grid>
            <Grid container sx={{ width: "100%", height: "65%" }}>
              <Grid item sx={{ width: "40%", height: "100%" }}></Grid>
              <Grid
                item
                p={{ sm: 2, md: 4, lg: 4 }}
                sx={{ width: "60%", height: "100%" }}
              >
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "100%", height: "100%" }}
                >
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{ width: "20%", height: "15%" }}
                    onClick={authNavigater}
                  >
                    Authority
                  </Button>
                  <div style={{ padding: "2%" }}></div>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{ width: "20%", height: "15%" }}
                    onClick={citizenNavigater}
                  >
                    Citizen
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </StyledEngineProvider>
    </StrictMode>
  );
}
