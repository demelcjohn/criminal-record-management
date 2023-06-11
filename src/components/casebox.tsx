// import Demo from "./demo";

import { Box } from "@mui/material";
export default function CaseBox() {
  return (
    <Box
      width="100%"
      height="10%"
      sx={{ bgcolor: "#000000", padding: "1px", overflow: "hidden" }}
    >
      <Box sx={{ bgcolor: "red", width: "100%", height: "100%" }}></Box>
    </Box>
  );
}
