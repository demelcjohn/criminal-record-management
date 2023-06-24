// import Demo from "./demo";

import { CasesContext, CasesContextProvider } from "@/context/casesContext";
import { usePersonalData } from "@/hooks/usePersonalData";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
export default function PersonalDetails() {
  const [userData, setUserData] = useState({
    _id: "",
    UID: 0,
    name: "",
    password: "",
    address: "",
    phNo: 0,
    email: "",
    user_Role: "Citizen",
    myCases: [],
    __v: 0,
  });
  const [name, setName] = useState<any>("");
  const [UID, setUID] = useState<any>("");
  const [userStringData, setUserStringData] = useState<string>("");
  const cases = useContext(CasesContext);

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
            role: "citizen",
          },
        }
      );
      setUserData(response.data.data);
      console.log(response.data.data);
      if (cases) {
        cases.setCaseIds(response.data.data.myCases);
      }
      console.log(
        "case ids",
        cases?.caseIds,
        "other",
        response.data.data.myCases
      );
      localStorage.setItem("token", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const extractUserDetails = (userData: any) => {
    const data = userData;
    var keysToRemove = [
      "_id",
      "UID",
      "name",
      "password",
      "user_Role",
      "myCases",
      "__v",
    ];
    keysToRemove.forEach(function (key) {
      if (data.hasOwnProperty(key)) {
        delete data[key];
      }
    });
    return JSON.stringify(userData, null, 2);
  };

  useEffect(() => {
    setName(userData.name);
    setUID(userData.UID);
    setUserStringData(extractUserDetails(userData).replace(/[{}"]/g, ""));
  }, [userData]);

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
          {/* <Grid
            item
            width="30%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src="/photo.jpg" alt="Icon" width={100} height={100} />
          </Grid> */}
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
              <Typography>{UID}</Typography>
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
            value={userStringData}
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
