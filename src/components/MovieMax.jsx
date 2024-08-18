import React, { useEffect } from 'react';

function MovieMax({ onMoviesFetched }) {
    useEffect(() => {
      const getMovie = async () => {
        try {
          const response = await fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=e900f92d148bf8ae9a214d27b5fac540"
          );
          const data = await response.json();
          onMoviesFetched(data.results);
        } catch (error) {
          console.error("Error fetching movie data:", error);
        }
      };

      getMovie();
    }, [onMoviesFetched]);

    return null; 
}

export default MovieMax;



// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function MovieMax() {

//     const [movieList, setMovieList] = useState([]);

//     const getMovie = () => {
//         fetch('https://api.themoviedb.org/3/discover/movie?api_key=e900f92d148bf8ae9a214d27b5fac540')
//             .then(response => response.json())
//             .then(response => setMovieList(response.results))
//             .catch(error => console.error('Error fetching movie data:', error));
//     }
//     useEffect(() => {
//         getMovie(); 
//     }, []);

//   return (
//       <div>
//           {/* <h4>Discover</h4>
//           {movieList.map((movie) => (
//                 <img 
//                     style={{width:"150px", height:"250px", marginLeft:"15px", marginBottom:"30px" }}
//                     key={movie.id} 
//                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
//                     alt={movie.title} 
//                 />
//             ))} */}
//     </div>
//   )
// }

// export default MovieMax