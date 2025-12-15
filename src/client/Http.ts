import axios from "axios";
import { url } from "inspector";
// Wrap axios
export default class Http {
	async get(url: string) {
		const response = await axios.get(url);
		return response.data;
	}
}
