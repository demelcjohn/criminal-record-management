import { Box } from "@mui/material";
import CaseBox from "./casebox";
import { useCaseBoxData } from "@/hooks/useCaseBoxData";
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
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {data &&
        data.map((cases: any) => (
          <CaseBox
            id={cases.id}
            description={cases.description}
            status={cases.status}
          />
        ))}
    </div>
  );
}
