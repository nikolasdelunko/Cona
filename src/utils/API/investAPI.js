import axios from "axios";

import { url } from "./url";

export const GetAllInvest = () => axios.get(`${url}/api/users/70/invest`);
