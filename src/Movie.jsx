import React, { useEffect, useState } from 'react'

function Movie() {

    const [movieList,setMovieList] = useState([])

    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=e900f92d148bf8ae9a214d27b5fac540")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
        .catch(error => console.error('Error fetching movie data:', error));
    }

    useEffect(()=>{
     getMovie()
    },[])
    console.log(movieList)
    
  return (
      <div>
          {movieList.map((movie) => (
                <img 
                    style={{width:"150px", height:"250px", marginLeft:"15px", marginTop:"30px" }}
                    key={movie.id} 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                />
            ))}
    </div>
  )
}

export default Movie