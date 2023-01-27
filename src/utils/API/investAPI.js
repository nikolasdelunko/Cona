import axios from "axios";

import { url } from "./url";

export const GetAllInvest = () => axios.get(`${url}/invest`);
