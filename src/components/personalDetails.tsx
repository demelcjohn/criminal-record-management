// import Demo from "./demo";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
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
        <Grid container width="100%" height="30%">
          <Grid
            item
            width="30%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src="/photo.jpg" alt="Icon" width={100} height={100} />
          </Grid>
          <Grid
            item
            width="70%"
            height="100%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "left",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "left",
                marginBottom: "5px",
              }}
            >
              <Typography>Name:</Typography>
              <Typography>{"Demel C John"}</Typography>
            </div>

            <div style={{ display: "flex", alignItems: "left" }}>
              <Typography>Identity Number:</Typography>
              <Typography>{"636783"}</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid width="100%" height="70%">
          <TextField
            multiline
            rows={15}
            InputProps={{
              readOnly: true,
            }}
            value=""
            sx={{
              width: "100%",
              bgcolor: "white",
            }}
          />
        </Grid>
      </Box>
    </Box>
  );
}
