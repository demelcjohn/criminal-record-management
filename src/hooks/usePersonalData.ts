import { useQuery } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const fetchUsers = async () => {
  console.log("Helloworld");

  const response = await axios.get(`http://localhost:4000/users/345678`);
  return response.data;
};

export const usePersonalData = (onSuccess: any, onError: any) => {
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
