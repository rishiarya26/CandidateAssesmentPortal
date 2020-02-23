import axios from "axios";
import { ADRESS_URL } from "../env";

export const getCandidateList = async () => {
  const response = await axios.get(ADRESS_URL + "/candidates", {
    headers: { "Content-Type": "application/json" }
  });

  return response;
};

export const getApplicationDetails = async (id) => {
  const response = await axios.get(ADRESS_URL + "/applications/"+id, {
    headers: { "Content-Type": "application/json" }
  });

  return response;
};
export const getQuestions = async (id) => {
  const response = await axios.get(ADRESS_URL + "/questions/"+id, {
    headers: { "Content-Type": "application/json" }
  });

  return response;
};

export const setApplicationDetails = async (id,videos) => {
  const response = await axios.put(ADRESS_URL + "/applications/"+id,
  {
   id: id,
   videos:videos
  },
  {
    headers: { "Content-Type": "application/json" }
  });

  return response;
};