import axios from "axios";
import { Api_url } from "../constants/ApiConstants";

//Get Media item
export const fetchMediaItems = async (listedNum) =>{
    try {
        const response = await axios.get(`${Api_url}/posts`);
        const start = (listedNum - 1) * 6;
        const end = start + 6;
        const limitedItems = response.data.slice(start, end);

        return limitedItems.map(item => ({
            ...item,
            image: 'https://picsum.photos/200/200'
        }));
    }catch (error) {
        console.error('Error Fetching Media:', error);
        throw error;
    }
};
