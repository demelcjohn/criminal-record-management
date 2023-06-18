// import Demo from "./demo";

import { usePersonalData } from "@/hooks/usePersonalData";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function PersonalDetails() {
  const [name, setName] = useState("John Doe");
  const [identityNumber, setIdentityNumber] = useState("1234567890");

  const [userData, setUserData] = useState();

  // const onSuccess = (data: any) => {
  //   console.log("Perform fetching", data);
  // };
  // const onError = (error: any) => {
  //   console.log("Perform error", error);
  // };

  // const { isLoading, data, isError, error, isFetching, refetch } =
  //   usePersonalData(onSuccess, onError);

  // useEffect(() => {
  //   console.log("Hello personal data");
  //   setName(data?.name);
  //   setIdentityNumber(data?.id);
  // }, [data]);

  // if (isLoading || isFetching) {
  //   return <h2>Loading...</h2>;
  // }

  const fetchData = async () => {
    try {
      const storedData: any = localStorage.getItem("token");
      const parsedData = JSON.parse(storedData);
      const response: any = await axios.get(
        "https://crm-back-end-jiaa-git-main-jjesvin21.vercel.app/api/citizen/all_citizens/" +
          parsedData.user,
        {
          headers: {
            tocken: parsedData.tocken,
            user: parsedData.user,
            role: "Citizen",
          },
        }
      );
      console.log(response);
      console.log(response.data);
      localStorage.setItem("token", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error");
      alert("Username or Password does not match !!!!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              <Typography>{name}</Typography>
            </div>

            <div style={{ display: "flex", alignItems: "left" }}>
              <Typography>Identity Number:</Typography>
              <Typography>{identityNumber}</Typography>
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
