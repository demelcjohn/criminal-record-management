import { Box, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ViewCaseModal from "./viewCaseModal";
export default function CaseBox({ id }: any) {
  const [color, setColor] = useState("#6AB2F5");
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const fetchData = async () => {
    try {
      const storedData: any = localStorage.getItem("token");
      const parsedData = JSON.parse(storedData);
      const response: any = await axios.get(
        "https://crm-back-end-jiaa-git-main-jjesvin21.vercel.app/api/cases/cases/" +
          id,
        {
          headers: {
            tocken: parsedData.tocken,
            user: parsedData.user,
            role: "citizen",
          },
        }
      );

      console.log("cases 6ABC:", response.data.data);

      localStorage.setItem("token", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (status === "accused") {
      setColor("#6AB2F5");
    } else if (status === "convicted") {
      setColor("#F55252");
    } else {
      setColor("#67F75A");
    }
  }, []);

  console.log("case detaile ggahsh", id);
  return (
    <Box
      width="100%"
      height="10%"
      sx={{ bgcolor: "#000000", padding: "1px", overflow: "hidden" }}
    >
      <Box
        sx={{ bgcolor: color, width: "100%", height: "100%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{ bgcolor: color, width: "95%", height: "100%" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {id} {}
          <Button
            variant="contained"
            size="small"
            color="info"
            onClick={handleOpen}
          >
            Status
          </Button>
          <ViewCaseModal
            open={openModal}
            setOpen={setOpenModal}
            handleClose={handleClose}
          />
        </Box>
      </Box>
    </Box>
  );
}
