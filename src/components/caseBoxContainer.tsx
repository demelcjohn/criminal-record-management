import { Box } from "@mui/material";
import CaseBox from "./casebox";
import { useCaseBoxData } from "@/hooks/useCaseBoxData";
import { BeatLoader } from "react-spinners";
export default function CaseBoxContainer() {
  const onSuccess = (data: any) => {
    console.log("Perform fetching", data);
  };
  const onError = (error: any) => {
    console.log("Perform error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useCaseBoxData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <BeatLoader color="#000000" size={30} />;
  }
  return (
    <Box
      sx={{ width: "80%", height: "90%", bgcolor: "#8BE8D7" }}
      fontSize={"100%"}
      fontWeight={"bold"}
      fontFamily={"sans-serif"}
      overflow={"scroll"}
    >
      {data &&
        data.map((cases: any) => (
          <CaseBox
            id={cases.id}
            description={cases.description}
            status={cases.status}
          />
        ))}
    </Box>
  );
}
