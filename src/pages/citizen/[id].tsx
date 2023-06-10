// import Demo from "./demo";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export default function Citizen() {
  const [name, setName] = useState("John Doe");
  const [identityNumber, setIdentityNumber] = useState("1234567890");
  const [address, setAddress] = useState("123 Main Street");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [dob, setDob] = useState("1990-01-01");

  return (
    <Box
      width="100%"
      height="100vh"
      sx={{ bgcolor: "#E5ECFF", padding: "7px", overflow: "hidden" }}
    >
      <Box sx={{ width: "100%", height: "8%" }}>
        <Grid container width="100%" height="50%" item xs={12} sx={{ mb: 1 }}>
          <Grid item sx={{ height: "50%" }}>
            <Image src="/crm.svg" alt="Icon" width={70} height={70} />
          </Grid>
          <Grid item sx={{ height: "50%" }}>
            <Image src="/crmtext.svg" alt="Icon" width={300} height={100} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%", height: "92%", padding: "7px" }}>
        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "#ABC8EA",
            padding: "7px",
          }}
        >
          <Grid
            item
            sx={{
              width: "50%",
              height: "100%",
              bgcolor: "#ABC8EA",
              padding: "5px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                bgcolor: "#E5ECFF",
              }}
            ></Box>
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
              height: "100%",
              bgcolor: "#ABC8EA",
              padding: "5px",
            }}
          >
            {" "}
            <Box
              sx={{ width: "100%", height: "100%", bgcolor: "#E5ECFF" }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}