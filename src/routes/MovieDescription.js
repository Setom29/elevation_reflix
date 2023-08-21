import { useParams } from 'react-router';
import { imageLink } from "../config/constants";

export default function MovieDescription({moviesList}){
    const { id } = useParams();
    console.log(moviesList.find(movie=>movie.id == id))
    const movie = moviesList.find((movie)=>movie.id == id)
    return(
        <div className="movie-description-container">
            <div>{`${movie.original_title} (${movie.release_date.slice(0, 4)})`}</div>
            <img src={imageLink + movie.poster_path} className="movie-image" />
            <div>{movie.overview}</div>
        </div>
    )
}

