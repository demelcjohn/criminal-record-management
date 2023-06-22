import { Box } from "@mui/material";
import CaseBox from "./casebox";
import { useCaseBoxData } from "@/hooks/useCaseBoxData";
import { BeatLoader } from "react-spinners";
import { CasesContext } from "@/context/casesContext";
import { useContext } from "react";
export default function CaseBoxContainer() {
  const { caseIds, setCaseIds }: any = useContext(CasesContext);
  const onSuccess = (data: any) => {
    console.log("Perform fetching", data);
  };
  const onError = (error: any) => {
    console.log("Perform error", error);
  };

  // const { isLoading, data, isError, error, isFetching, refetch } =
  //   useCaseBoxData(onSuccess, onError);

  // if (isLoading || isFetching) {
  //   return <BeatLoader color="#000000" size={30} />;
  // }
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
          <CaseBox
            id={cases.id}
            description={cases.description}
            status={cases.status}
          />
        ))}
    </Box>
  );
}
