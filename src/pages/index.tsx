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
          <Box width="100%" height="100%" sx={{ bgcolor: "#D2D3F7" }}>
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
                <Image src="/crm.svg" alt="Icon" width={100} height={100} />
                <Image src="/crmtext.svg" alt="Icon" width={250} height={100} />
              </Stack>
            </Grid>
            <Grid container sx={{ width: "100%", height: "65%" }}>
              <Grid
                item
                p={{ sm: 2, md: 4, lg: 4 }}
                sx={{ width: "35%", height: "100%" }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "100%", height: "20%" }}
                >
                  <h1>Empowering Justice </h1>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "100%", height: "10%" }}
                >
                  <h3>Shaping a Future Beyond Criminal Records</h3>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "100%", height: "40%" }}
                >
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{
                      width: "30%",
                      height: "35%",
                      backgroundColor: "white",
                      color: "green",
                    }}
                    onClick={authNavigater}
                  >
                    Authority
                  </Button>
                  <div style={{ padding: "2%" }}></div>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{
                      width: "30%",
                      height: "35%",
                      backgroundColor: "green",
                    }}
                    onClick={citizenNavigater}
                  >
                    Citizen
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "100%", height: "30%" }}
                ></Stack>
              </Grid>
              <Grid
                item
                p={{ sm: 2, md: 4, lg: 4 }}
                sx={{ width: "65%", height: "100%" }}
              >
                <Box
                  padding=".2%"
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "#000000",
                    color: "#000000",
                  }}
                  borderRadius="5%"
                >
                  <Box
                    display={"flex"}
                    alignItems="center"
                    justifyContent="center"
                    p={{ sm: 2, md: 4, lg: 4 }}
                    sx={{
                      width: "100%",
                      height: "100%",
                      bgcolor: "#AEB6FF",
                    }}
                    borderRadius="5%"
                  >
                    <h1>
                      Criminal record management is a critical aspect of the
                      justice system, ensuring accurate and secure storage of
                      criminal history information of individuals . Blockchain
                      technology offers a promising solution for enhancing the
                      efficiency, transparency, and security of criminal record
                      management.
                    </h1>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </StyledEngineProvider>
    </StrictMode>
  );
}
