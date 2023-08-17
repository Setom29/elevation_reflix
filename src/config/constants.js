export const fetchOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmRkOWFmMTA0ZmE0NDk0OWU5M2Y0NDM5ZjIzOTQ0MyIsInN1YiI6IjY0ZGNlM2IxYjU0MDAyMDEzYWQ3YmQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RtSmjR6p4VSS8S7YAVpBB-7XpmViXn0rntqXNUH2qpA'
    }
  };

export const apiKey = "3fdd9af104fa44949e93f4439f239443";
export const MoviesListAPILink = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
export const imageLink = "https://image.tmdb.org/t/p/w500"


export const defaultUser={
    "name": "default",
    "balance":0,
    "rentedMovies":[]
};

export const usersData=[
    {
        "name": "Mona",
        "balance": 10,
        "rentedMovies":[]
    },
    {
        "name": "Jasmyne",
        "balance": 10,
        "rentedMovies":[]
    },
    {
        "name": "Aura",
        "balance": 10,
        "rentedMovies":[]
    },
    {
        "name": "Tina",
        "balance": 10,
        "rentedMovies":[]
    }
]