import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { movieId } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  const getMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=e900f92d148bf8ae9a214d27b5fac540`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div style={{ display: "flex", background: "black" }}>
      <div>
        <img
          key={movie.id}
          style={{
            width: "280px",
            height: "360px",
            marginLeft: "15px",
            marginTop: "30px",
          }}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div>
          <p>Release date: {movie.release_date} </p>
          <p>Original language: {movie.original_language} </p>
          <p>Popularity: {movie.popularity} </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
