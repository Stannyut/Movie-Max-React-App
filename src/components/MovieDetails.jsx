import React from "react";
import MovieMax from "./MovieMax";

function MovieDetails({ movies = [] }) {
  // Default value as empty array
  const container = {
    display: "flex",
    backgroundColor: "#333",
    padding: "20px",
    borderRadius: "10px",
  };

  const imageStyle = {
    borderRadius: "10px",
    marginRight: "20px",
  };

  if (!Array.isArray(movies) || movies.length === 0) {
    return <div style={{ color: "white" }}>No movies available</div>;
  }

  return (
    <div style={container}>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            style={imageStyle}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
      {movies[0] && (
        <div>
          <h3 style={{ color: "white" }}>{movies[0].title}</h3>
          <p
            style={{
              color: "white",
              fontSize: "14px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {movies[0].overview}
          </p>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
