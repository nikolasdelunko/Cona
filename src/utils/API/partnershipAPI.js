import axios from "axios";
import { url } from "./url";

export const GetAllPartnerships = () =>
  axios.get(`${url}/api/users/1/partnerships`);
export const GetPartnership = (data) =>
  axios.patch(`${url}/api/users/1/partnerships/${data}`);

export const createPartnership = (data) =>
  axios.post(`${url}/api/users/70/partnerships`, data);

export const AddAffiliate = (data) =>
  axios.post(`${url}/api/users/70/partnerships/1/3`, data);

export const getPartnersStatistic = () =>
  axios.get(`${url}/api/users/70/partners`);

///! example
// {
// 	"affiliate_profit": 5.0,
// 	"current_investments": 20.0,
// 	"today_profit": 0.0,
// 	"total_investments": 100.0
// }
