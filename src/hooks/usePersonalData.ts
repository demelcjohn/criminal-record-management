import { useQuery } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";

export const usePersonalData = (onSuccess: any, onError: any) => {
  const router = useRouter();

  const fetchUsers = async () => {
    const { id } = router.query;
    console.log("Helloworld", id);

    const response = await axios.get(`http://localhost:4000/users/${id}`);
    return response.data;
  };

  console.log("qwerty");
  return useQuery("users", fetchUsers, {
    onSuccess,
    onError: (error) => {
      console.error("Error Personal fetching data:", error);
    },
    select: (data) => {
      return data;
    },
  });
};
