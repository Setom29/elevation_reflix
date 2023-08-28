import { fetchOptions } from "../config/constants";

export default async function fetchMovies(url) {
  try {
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    return data.results.slice(0, 10);
  } catch (err) {
    return console.error(err);
  }
}

export async function fetchYouTubeId(url) {
  try {
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    return data.results[0].key ?? undefined;
  } catch (err) {
    return console.error(err);
  }
}

export async function fetchKeyword(url) {
  try {
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    return data.keywords[0].name;
  } catch (err) {
    return console.error(err);
  }
}

export async function fetchGif(url, keyword) {
  try {
    const response = await fetch(url + keyword);
    const data = await response.json();
    return data.data[0].embed_url;
  } catch (err) {
    return console.error(err);
  }
}
