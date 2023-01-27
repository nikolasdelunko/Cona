
import axios from "axios";
import { url } from "./url";

export const getUsers = () => axios.get(`${url}/users`);
export const updateUser = (data) => axios.patch(`${url}/users`, data);
