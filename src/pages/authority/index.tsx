import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AuthorityLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const changePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();
    const formData = {
      username: username,
      password: password,
    };

    try {
      const response: any = await axios.post(
        "https://crm-back-end-jiaa-git-main-jjesvin21.vercel.app/api/authority/login",
        formData
      );
      console.log(response.data);
      localStorage.setItem("token", JSON.stringify(response.data));
      router.push("authority/details");
    } catch (error) {
      console.error("Error");
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      sx={{ bgcolor: "#E5ECFF", padding: "7px", overflow: "hidden" }}
    >
      <Box
        sx={{
          height: "40%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Image src="/crm.svg" alt="Icon" width={100} height={100} />
          <Image src="/crmtext.svg" alt="Icon" width={350} height={100} />
        </Stack>
      </Box>

      <Box sx={{ height: "100vh", width: "100%" }}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item sx={{ height: "10%", width: "22%" }}>
            <TextField
              sx={{
                width: "100%",
                // "& .MuiInputBase-root": { border: "1px solid black" },
              }}
              label="Username"
              onChange={changeUsername}
            />
          </Grid>
          <Grid item sx={{ height: "12%", width: "22%" }}>
            <TextField
              sx={{
                width: "100%",
                // "& .MuiInputBase-root": { border: "1px solid black" },
              }}
              label="Password"
              onChange={changePassword}
              type="password"
            />
          </Grid>
          <Grid item sx={{ height: "10%", width: "22%" }}>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={submitHandler}
            >
              LOGIN
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
