import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
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

export default function AddCaseModal({ open, setOpen, handleClose }: any) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData); // You can perform further actions with the form data here
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ height: "90%", width: "100%" }}>
          <Grid sx={{ display: "flex", gap: "10%" }} marginBottom={"2%"}>
            <TextField
              name="UID"
              label="UID"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ width: "25%" }}
            />
            <TextField
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ width: "25%" }}
            />
          </Grid>

          <Grid sx={{ display: "flex", gap: "10%" }} marginBottom={"2%"}>
            <TextField
              name="phone"
              label="Phone"
              value={formData.email}
              onChange={handleChange}
              sx={{ width: "25%" }}
            />
            <TextField
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              sx={{ width: "25%" }}
            />
            <TextField
              name="password"
              label="Password"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              type={"password"}
              sx={{ width: "25%" }}
            />
          </Grid>
          <Grid sx={{ display: "flex", gap: "10%" }} marginBottom={"6%"}>
            <TextField
              name="address"
              label="Address"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              sx={{ width: "40%" }}
            />
          </Grid>
          <Grid display={"flex"} justifyContent={"space-between"}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>

            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
}
