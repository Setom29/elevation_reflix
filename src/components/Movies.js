import Movie from "./Movie";


export default function Movies({moviesList, usersData, setUsersData, setClickedMovie}){    
    return (
        <div className="movies-container">
            {moviesList.map((movie, index)=><Movie movie={movie} usersData={usersData} setUsersData={setUsersData} key={index} setClickedMovie={setClickedMovie}/>)}
        </div>
    )
}