import { fetchOptions } from "../config/constants";

export default async function fetchMovies(url){
    try {
        const response = await fetch(url, fetchOptions);
        const data = await response.json();
        // console.log(`from fetch function: ${JSON.stringify(data)}`)
        return data.results.slice(0, 10);
    } catch (err) {
        return console.error(err);
    }
}


export async function fetchYouTubeId(url){
    try {
        const response = await fetch(url, fetchOptions);
        const data = await response.json();
        return data.results[0].key ?? undefined
    } catch (err) {
        return console.error(err);
    }
}