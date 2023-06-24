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
          sx={{ bgcolor: "#EDEFF6", padding: "7px" }}
        >
          <Box width="100%" height="100%" sx={{ bgcolor: "#ABC8EA" }}>
            <Grid
              item
              p={{ sm: 2, md: 4, lg: 4 }}
              sx={{ width: "100%", height: "35%" }}
            >
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Image src="/crm.svg" alt="Icon" width={75} height={75} />
                <Image src="/crmtext.svg" alt="Icon" width={200} height={75} />
              </Stack>
            </Grid>
            <Grid container sx={{ width: "100%", height: "65%" }}>
              <Grid
                item
                p={{ sm: 2, md: 4, lg: 4 }}
                sx={{ width: "65%", height: "100%" }}
              >
                <Box
                  p={{ sm: 2, md: 4, lg: 4 }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "#000000",
                    color: "#000000",
                  }}
                >
                  <Box
                    p={{ sm: 2, md: 4, lg: 4 }}
                    sx={{
                      width: "100%",
                      height: "100%",
                      bgcolor: "#FFFFFF",
                    }}
                  >
                    <h1>
                      Criminal record management is a critical aspect of the
                      justice system, ensuring accurate and secure storage of
                      individuals' criminal history information. Blockchain
                      technology offers a promising solution for enhancing the
                      efficiency, transparency, and security of criminal record
                      management.
                    </h1>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                p={{ sm: 2, md: 4, lg: 4 }}
                sx={{ width: "35%", height: "100%" }}
              >
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "100%", height: "100%" }}
                >
                  <h1>Log In...</h1>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{ width: "25%", height: "15%" }}
                    onClick={authNavigater}
                  >
                    Authority
                  </Button>
                  <div style={{ padding: "2%" }}></div>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{ width: "25%", height: "15%" }}
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
