import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function postMethod(url, payload) {
  try {
    const apiDataResponse = await axios.post(url, payload);
    const apiData = apiDataResponse.data;
    if (apiData?.error) {
      throw new Error(apiData?.error?.message);
    } else {
      toast.success(
        `Welcome ${apiData?.user?.username}! Registration successful.`
      );
      return apiData;
    }
  } catch (error) {
    console.log("error in postApiResponse", error);
    toast.error(`Error: ${error.message}`);
  }
}
