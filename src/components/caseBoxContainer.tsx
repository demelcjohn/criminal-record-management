import { Box } from "@mui/material";
import CaseBox from "./casebox";
import { BeatLoader } from "react-spinners";
import { CasesContext } from "../context/CasesContext";
import { useContext } from "react";
export default function CaseBoxContainer() {
  const { caseIds, setCaseIds }: any = useContext(CasesContext);

  return (
    <Box
      sx={{ width: "80%", height: "90%", bgcolor: "#8BE8D7" }}
      fontSize={"100%"}
      fontWeight={"bold"}
      fontFamily={"sans-serif"}
      overflow={"scroll"}
    >
      {caseIds &&
        caseIds.map((cases: any) => (
          <CaseBox key={cases.case_id} id={cases.case_id} />
        ))}
    </Box>
  );
}
