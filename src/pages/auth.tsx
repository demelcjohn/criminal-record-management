// import Demo from "./demo";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";

export default function HomeCitizen() {
  return (
    <Box
      width="100%"
      height="100vh"
      sx={{ bgcolor: "#E5ECFF", padding: "7px", overflow: "hidden" }}
    >
      <Box sx={{ height: "40%", width: "100%" }}>
        <Image src="/crm.svg" alt="Icon" width={100} height={100} />
        <Image src="/crmtext.svg" alt="Icon" width={100} height={100} />
      </Box>
      <Box sx={{ height: "100vh", width: "100%" }}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start" // Align items at the top
          alignItems="center"
          style={{ height: "100%" }} // Adjust height to 100%
        >
          <Grid item sx={{ height: "10%", width: "22%" }}>
            <TextField
              sx={{
                width: "100%",
                "& .MuiInputBase-root": { border: "1px solid black" },
              }}
            />
          </Grid>
          <Grid item sx={{ height: "12%", width: "22%" }}>
            <TextField
              sx={{
                width: "100%",
                "& .MuiInputBase-root": { border: "1px solid black" },
              }}
            />
          </Grid>
          <Grid item sx={{ height: "10%", width: "22%" }}>
            <Button variant="contained" sx={{ width: "100%" }}>
              LOGIN
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
