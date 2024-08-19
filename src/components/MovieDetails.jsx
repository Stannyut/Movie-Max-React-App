import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function MovieDetails() {
  const { movieId } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(""); // State to hold the trailer URL

  const getMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=e900f92d148bf8ae9a214d27b5fac540&append_to_response=videos`
      );
      const data = await response.json();
      setMovie(data);

      // Find the trailer in the movie's videos
      const trailer = data.videos.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div
      style={{ display: "flex", justifyContent: "center", background: "#333" }}
    >
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        {/* Play Trailer Button */}
        {trailerUrl && (
          <iframe
            width="560"
            height="315"
            src={trailerUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ marginBottom: "20px" }}
          ></iframe>
        )}
        {/* Movie Poster and Details */}
        {/* <img
          key={movie.id}
          style={{
            width: "280px",
            height: "360px",
            marginBottom: "20px",
          }}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        /> */}
        <h1 style={{ color: "white" }}>{movie.title}</h1>
        <p style={{ color: "white" }}>{movie.overview}</p>
        <div>
          <p style={{ color: "white" }}>Release date: {movie.release_date}</p>
          <p style={{ color: "white" }}>
            Original language: {movie.original_language}
          </p>
          <p style={{ color: "white" }}>Popularity: {movie.popularity}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
