import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Authority() {
  const [openModal, setOpenModal] = useState(true);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
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
              sx={{
                width: "100%",
                height: "20%",
                bgcolor: "#FFF387",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "left",
                  marginBottom: "5px",
                }}
              >
                <Typography>Name :</Typography>
                <Typography>{" qwerty"}</Typography>
              </div>

              <div style={{ display: "flex", alignItems: "left" }}>
                <Typography>Identity Number :</Typography>
                <Typography>{" identityNumber"}</Typography>
              </div>
            </Grid>
            <Grid container sx={{ width: "100%", height: "100%" }}>
              <Grid
                item
                sx={{
                  width: "50%",
                  height: "68%",
                  padding: "5%",
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ width: "100%" }}
                  onClick={handleOpen}
                >
                  Add Case
                </Button>
                <Modal
                  open={openModal}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography>
                  </Box>
                </Modal>
                <TextField
                  sx={{ width: "100%", bgcolor: "white" }}
                  style={{ marginTop: "10%" }}
                  label="Case Number"
                >
                  View Case
                </TextField>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ width: "100%" }}
                  style={{ marginTop: "2%" }}
                >
                  View Case
                </Button>
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
                  value=""
                  sx={{
                    width: "90%",
                    bgcolor: "white",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </QueryClientProvider>
  );
}
