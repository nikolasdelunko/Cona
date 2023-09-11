import axios from "axios";
import { url } from "./url";

export const getAccount = () => axios.get(`${url}/api/account`);
export const updateAccount = (data) => axios.patch(`${url}/api/account`, data);
export const getReport = () => axios.get(`${url}/api/report`);
