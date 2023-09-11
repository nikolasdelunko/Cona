import axios from "axios";
import { url } from "./url";

export const getVideo = () => axios.get(`${url}/api/faq`);

