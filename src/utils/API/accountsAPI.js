import axios from "axios";

const url = "http://localhost:5000/account";

export const getAccount = () => axios.get(url);
export const updateAccount = (data) => axios.patch(url, data);
