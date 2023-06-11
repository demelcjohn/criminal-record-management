// import Demo from "./demo";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
export default function CaseBox({ id, description, status }: any) {
  const [color, setColor] = useState("blue");
  useEffect(() => {
    if (status === "ongoing") {
      setColor("#EB5E5E");
    } else if (status === "free") {
      setColor("#6CE561");
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
        justifyContent="left"
        alignItems="center"
      >
        {id} {description}
      </Box>
    </Box>
  );
}
