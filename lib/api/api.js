import axios from "axios";
import { API_KEY } from '@env';

const api = axios.create({
    baseURL : "https://newsapi.org"
});

export async function getNewsByCategory(category){
    try {
    const response = await api.get(`/v2/everything?q=${category}&apiKey=${API_KEY}`);
    return response;
    } catch (error) {
        console.error(error)
    }
}


export async function getTopNewsByCountry(country){
    try {
        const response = await api.get(`/v2/top-headlines?country=${country}&apiKey=${API_KEY}`)
        return response;
    } catch (error) {
        console.error(error)
    }
}

export async function getNewsByQuery(query) {
    try{
    const response = await api.get(`/v2/everything?q=${query}&apiKey=${API_KEY}`);
    return response;
    } catch(error){
        console.error(error)
    }
  }