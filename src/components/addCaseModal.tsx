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
    caseid: "",
    casetitle: "",
    casediscription: "",
    status: "",
    case_user: "",
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
    console.log(formData);
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
              name="caseid"
              label="Case Id"
              value={formData.caseid}
              onChange={handleChange}
              required
              sx={{ width: "25%" }}
            />
            <TextField
              name="casetitle"
              label="Case Title"
              value={formData.casetitle}
              onChange={handleChange}
              required
              sx={{ width: "25%" }}
            />

            <TextField
              name="status"
              label="Status"
              value={formData.status}
              onChange={handleChange}
              sx={{ width: "25%" }}
            />
          </Grid>
          <Grid sx={{ display: "flex", gap: "10%" }} marginBottom={"2%"}>
            <TextField
              name="casediscription"
              label="Case Description"
              value={formData.casediscription}
              onChange={handleChange}
              multiline
              rows={4}
              sx={{ width: "70%" }}
            />
          </Grid>
          <Grid sx={{ display: "flex", gap: "10%" }} marginBottom={"4%"}>
            <TextField
              name="case_user"
              label="Citizens involved"
              value={formData.case_user}
              onChange={handleChange}
              multiline
              rows={4}
              sx={{ width: "70%" }}
            />
          </Grid>
          <Grid display={"flex"} justifyContent={"space-between"}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
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
