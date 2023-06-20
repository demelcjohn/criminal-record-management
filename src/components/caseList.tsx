import { Box, Button } from "@mui/material";
export default function CaseList({
  caseid,
  casetitle,
  setCaseIndex,
  index,
}: any) {
  return (
    <Box
      width="100%"
      height="10%"
      sx={{ bgcolor: "#000000", padding: "1px", overflow: "hidden" }}
      onClick={() => {
        setCaseIndex(index);
      }}
    >
      <Box
        sx={{ bgcolor: "yellow", width: "100%", height: "100%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{ bgcolor: "yellow", width: "95%", height: "100%" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {caseid} {casetitle}
        </Box>
      </Box>
    </Box>
  );
}
