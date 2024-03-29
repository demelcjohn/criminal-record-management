import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ViewCaseModal({ open, setOpen, handleClose }: any) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ height: "90%", width: "100%" }}>
          <Grid display={"flex"} justifyContent={"space-between"}>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
}
