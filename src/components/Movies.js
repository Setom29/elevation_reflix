import Movie from "./Movie";


export default function Movies({moviesList, user, setUser}){    
    return (
        <div className="movies-container">
            {moviesList.map((movie, index)=><Movie movie={movie} user={user} setUser={setUser} key={index} />)}
        </div>
    )
}