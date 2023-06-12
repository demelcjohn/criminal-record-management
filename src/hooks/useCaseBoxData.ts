import { useQuery } from "react-query";
import axios from "axios";

const fetchCases = async () => {
  const response = await axios.get("http://localhost:4000/cases");
  return response.data;
};

export const useCaseBoxData = (onSuccess: any, onError: any) => {
  return useQuery("cases", fetchCases, {
    onSuccess,
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
    select: (data) => {
      const caseDetails = data.map((individualCase: any) => individualCase);
      return caseDetails;
    },
  });
};
