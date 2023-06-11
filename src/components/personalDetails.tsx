// import Demo from "./demo";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
export default function PersonalDetails({ id, description, status }: any) {
  return (
    <Box
      width="100%"
      height="100%"
      sx={{ overflow: "hidden" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="90%" height="90%" sx={{ padding: "5%", overflow: "hidden" }}>
        <Grid container width="100%" height="30%" sx={{ bgcolor: "red" }}>
          <Grid
            item
            width="30%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ bgcolor: "blue" }}
          >
            <Image src="/photo.jpg" alt="Icon" width={100} height={100} />
          </Grid>
          <Grid item width="70%" height="100%" sx={{ bgcolor: "green" }}>
            <Grid
              width="100%"
              height="50%"
              sx={{ bgcolor: "pink" }}
              display="flex"
              justifyContent="left"
              alignItems="center"
            >
              <Typography>Hey</Typography>
            </Grid>
            <Grid
              width="100%"
              height="50%"
              display="flex"
              justifyContent="left"
              alignItems="center"
            >
              <Typography>Hey</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid width="100%" height="70%" sx={{ bgcolor: "yellow" }}></Grid>
      </Box>
    </Box>
  );
}
