import axios from "axios";

interface ApiResponse {
  result: string;
}

const getCreatedStateFromApi = async (): Promise<string> => {
  const res = await axios.get<ApiResponse>("/api/create-state");
  return res.data.result;
};


export default getCreatedStateFromApi;
