import axios from "axios";

import { url } from "./url";

export const GetAllDeposits = () => axios.get(`${url}/deposits`);
export const GetUserDeposits = () => axios.get(`${url}/users/1/deposits`);

export const GetDeposit = (data) =>
  axios.get(`${url}/${data}/users/1/deposits/1`);
export const CreateDeposit = (type, amount) =>
  axios.post(`${url}/users/1/deposits/?type=${type}&amount=${amount}`);
