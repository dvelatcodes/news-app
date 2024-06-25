import axios from "axios";
import { API_KEY } from '@env';

const api = axios.create({
    baseURL : "https://newsapi.org/v2"
});

export async function getNewsByCategory(category){
    try {
    const response = await api.get(`/v2/everything?q=${category}&apiKey=${API_KEY}`);
    return response;
    } catch (error) {
        console.error(error)
    }
}