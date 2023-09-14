import axios from "axios";
import { url } from "./url";

export const getAccount = () => axios.get(`${url}/api/users/70/account`);
export const updateAccount = (data) => axios.patch(`${url}/api/users/70/account`, data);
export const getReport = () => axios.get(`${url}/api/users/70/report`);
