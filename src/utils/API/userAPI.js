// http://localhost:5000/faq

// http://localhost:5000/account
// http://localhost:5000/deposits
// http://localhost:5000/partnerships
import axios from "axios";

const url = "http://localhost:5000/users";

export const getUser = () => axios.get(url);
export const updateUser = (data) => axios.patch(url, data);
