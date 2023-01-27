import axios from "axios";
import { url } from "./url";

export const getAccount = () => axios.get(`${url}/account`);
export const updateAccount = (data) => axios.patch(`${url}/account`, data);
