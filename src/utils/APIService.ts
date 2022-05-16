import axios from "axios";
import { API } from "../constants/api";

const APIService =  {
    fetchUsers: async () => {
        const response = await axios.get(API.user);
        return response.data;
    },
    fetchCharacters: async () => {
        const response = await axios.get(API.character);
        return response.data.results;
    }
}

export default APIService;