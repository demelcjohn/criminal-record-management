// import Demo from "./demo";

import HomeLogin from "@/components/homeLogin";
import { Box, Grid } from "@mui/material";

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
        />
        <HomeLogin />
      </Grid>
    </Box>
  );
}
