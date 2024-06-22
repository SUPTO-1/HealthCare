import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://unknown-server-seven.vercel.app"
});
const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
