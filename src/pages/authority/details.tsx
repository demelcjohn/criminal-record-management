import AddCaseModal from "@/components/addCaseModal";
import CaseList from "@/components/caseList";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function Authority() {
  const [caseIndex, setCaseIndex] = useState(-1);
  const [caseData, setCaseData] = useState([]);
  const [viewId, setViewId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const handleChange = (e: any) => {
    setViewId(e.target.value);
  };
  const handleViewCase = async () => {
    try {
      const storedData: any = localStorage.getItem("token");
      const parsedData = JSON.parse(storedData);
      const response: any = await axios.get(
        "https://crm-back-end-jiaa-git-main-jjesvin21.vercel.app/api/cases/cases/",
        {
          headers: {
            tocken: parsedData.tocken,
            user: parsedData.user,
            role: "authority",
          },
        }
      );

      setCaseData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error");
    }
  };

  useEffect(() => {
    handleViewCase();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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
        <Box
          sx={{ width: "100%", height: "4%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontFamily={"sans-serif"}
          fontWeight="bold"
        >
          AUTHORITY
        </Box>
        <Box sx={{ width: "100%", height: "88%", padding: "7px" }}>
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
              container
              sx={{
                width: "100%",
                height: "20%",
                bgcolor: "#FFF387",
              }}
            >
              <Grid
                sx={{
                  width: "80%",
                  height: "100%",
                }}
              >
                <Grid container sx={{ width: "100%", height: "100%" }}>
                  <Grid
                    // padding={"3%"}
                    display="flex"
                    alignItems="center"
                    sx={{
                      width: "100%",
                      height: "50%",
                    }}
                  >
                    Authority Name: Authority 1
                  </Grid>
                  <Grid
                    // padding={"3%"}
                    display="flex"
                    alignItems="center"
                    sx={{
                      width: "100%",
                      height: "50%",
                    }}
                  >
                    Authority Id: 7A645781
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  width: "20%",
                  height: "100%",
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ width: "50%" }}
                  onClick={handleOpen}
                >
                  Add Case
                </Button>
                <AddCaseModal
                  open={openModal}
                  setOpen={setOpenModal}
                  handleClose={handleClose}
                />
              </Grid>
            </Grid>
            <Grid container sx={{ width: "100%", height: "100%" }}>
              <Grid
                item
                sx={{
                  width: "50%",
                  height: "68%",
                  padding: "2%",
                }}
              >
                {/* <TextField
                  sx={{ width: "100%", bgcolor: "white" }}
                  style={{ marginTop: "10%" }}
                  label="Case Number"
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ width: "100%" }}
                  style={{ marginTop: "2%" }}
                  onClick={handleViewCase}
                >
                  View Case
                </Button> */}
                <Box
                  sx={{ width: "100%", height: "100%", bgcolor: "#8BE8D7" }}
                  overflow={"scroll"}
                >
                  {caseData &&
                    caseData.map((cases: any, index: any) => (
                      // <Button
                      //   onClick={() => {
                      //     setCaseIndex(index);
                      //     console.log(index);
                      //   }}
                      // >
                      <CaseList
                        caseid={cases.caseNo}
                        casetitle={cases.caseTitle}
                        setCaseIndex={setCaseIndex}
                        index={index}
                      />
                    ))}
                </Box>
              </Grid>
              <Grid
                item
                sx={{ width: "50%", height: "68%" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  multiline
                  rows={15}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{
                    width: "90%",
                    bgcolor: "white",
                  }}
                  value={JSON.stringify(caseData[caseIndex], null, 2)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </QueryClientProvider>
  );
}
