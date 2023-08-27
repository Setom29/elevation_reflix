import { useParams } from 'react-router';
import { imageLink, getYouTubeIdLink } from "../config/constants";
import {fetchYouTubeId} from '../requests/fetchData';
import { useState, useEffect } from 'react';

export default function MovieDescription({usersData}){
    const { id } = useParams();
    const movie = usersData.moviesList.find((movie)=>movie.id == id)
    const [movieYouTubeId, setmovieYouTubeId] = useState(null)
    useEffect(() => {
        async function fetchData() {
            const response = await fetchYouTubeId(getYouTubeIdLink(movie.id));
            setmovieYouTubeId(response)
        }
        fetchData();
      }, []);
    return(
        <div className="movie-description-container">
            <div>{`${movie.original_title} (${movie.release_date.slice(0, 4)})`}</div>
            <img src={imageLink + movie.poster_path} className="movie-image" />
            <div>{movie.overview}</div>

            {movieYouTubeId ? <iframe className='movie-description__video-container' src={`https://www.youtube.com/embed/${movieYouTubeId}`}></iframe> : undefined}
        </div>
    )
}

