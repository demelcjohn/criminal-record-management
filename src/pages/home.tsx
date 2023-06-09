// import Demo from "./demo";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";

export default function HomeCitizen() {
  return (
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
        ></Grid>

        <Grid
          item
          p={{ sm: 2, md: 4, lg: 4 }}
          sx={{ width: "40%", height: "100%", bgcolor: "#000000" }}
        >
          <Grid width="100%" height="50%" item xs={12} sx={{ mb: 1 }}>
            <Image src="/crm.svg" alt="Icon" width={100} height={100} />
            <Image src="/crmtext.svg" alt="Icon" width={100} height={100} />
          </Grid>
          <Grid
            container
            padding={"10px"}
            alignItems="center"
            justifyContent="center"
            sx={{ height: "10%" }}
          >
            <Grid item xs={5} sx={{ height: "150%" }}>
              <Typography sx={{ color: "#FFFFFF" }}>
                Identification Number
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ pl: 2, height: "150%" }}>
              <TextField
                sx={{
                  width: "100%",
                  marginBottom: "2%",
                  bgcolor: "#FFFFFF",
                }}
                size="small"
                variant="outlined"
                inputProps={{
                  style: {
                    width: "100%",
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={5}
              style={{ alignItems: "center" }}
              sx={{ height: "150%" }}
            >
              <Typography sx={{ color: "#FFFFFF" }}>Access key</Typography>
            </Grid>
            <Grid item xs={7} sx={{ pl: 2, height: "150%" }}>
              <TextField
                sx={{
                  width: "100%",
                  marginBottom: "2%",
                  bgcolor: "#FFFFFF",
                }}
                size="small"
                variant="outlined"
                inputProps={{
                  style: {
                    width: "100%",
                  },
                }}
              />
            </Grid>
            <Grid sx={{ height: "80%", width: "30%" }}>
              <Button
                variant="contained"
                sx={{ width: "100%", height: "100%" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
