import { Button, Grid, Stack, TextField, Typography, Box } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

export default function HomeLogin() {
  const router = useRouter();
  const [UID, setUID] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const UIDChangeHandler = (e: any) => {
    setUID(e.target.value);
  };
  const PasswordChangeHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();
    const formData = {
      UID: UID,
      password: Password,
    };

    try {
      setLoading(true);
      const response: any = await axios.post(
        "https://crm-back-end-jiaa-git-main-jjesvin21.vercel.app/api/citizen/login",
        formData
      );
      console.log(response.data);
      localStorage.setItem("token", JSON.stringify(response.data));
      router.push("/citizen");
    } catch (error) {
      console.error("Error");
      alert("Username or Password does not match !!!!");
    }
    setLoading(false);
  };

  return !loading ? (
    <Grid
      item
      p={{ sm: 2, md: 4, lg: 4 }}
      sx={{ width: "40%", height: "100%", bgcolor: "#000000" }}
    >
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Image src="/crm.svg" alt="Icon" width={100} height={100} />
        <Image src="/crmtext.svg" alt="Icon" width={250} height={100} />
      </Stack>
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
            onChange={UIDChangeHandler}
          />
        </Grid>
        <Grid
          item
          xs={5}
          style={{ alignItems: "center" }}
          sx={{ height: "150%" }}
        >
          <Typography sx={{ color: "#FFFFFF" }}>Password</Typography>
        </Grid>
        <Grid item xs={7} sx={{ pl: 2, height: "150%" }}>
          <TextField
            type="password"
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
            onChange={PasswordChangeHandler}
          />
        </Grid>
        <Grid sx={{ height: "80%", width: "30%" }}>
          <Button
            variant="contained"
            sx={{ width: "100%", height: "100%" }}
            onClick={submitHandler}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ width: "40%", height: "100%", bgcolor: "#000000" }}
    >
      <BeatLoader color="#FFFFFF" size={30} />
    </Box>
  );
}
