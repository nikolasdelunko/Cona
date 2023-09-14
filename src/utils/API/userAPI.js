import axios from "axios";
import { url } from "./url";

export const getUsers = () => axios.get(`${url}/api/users`);
export const updateUser = (data) => axios.patch(`${url}/api/users`, data);
