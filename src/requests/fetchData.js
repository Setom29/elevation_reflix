import { fetchOptions } from "../config/constants";

export default async function fetchMovies(url){
    try {
        const response = await fetch(url, fetchOptions);
        const data = await response.json();
        // console.log(`from fetch function: ${JSON.stringify(data)}`)
        return data;
    } catch (err) {
        return console.error(err);
    }
}