import axios from "axios";

import { url } from "./url";

export const GetAllDeposits = () => axios.get(`${url}/api/deposits`);
export const GetUserDeposits = () => axios.get(`${url}/api/users/1/deposits`);

export const GetDeposit = (data) =>
  axios.get(`${url}/${data}/api/users/1/deposits/1`);
export const CreateDeposit = (type, amount) =>
  axios.post(`${url}/api/users/1/deposits/?type=${type}&amount=${amount}`);
