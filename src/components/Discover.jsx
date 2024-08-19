import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieMax from "./MovieMax"; // Import the MovieMax component
import { useNavigate } from "react-router-dom";

function Discover() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const imageStyle = {
    width: "150px",
    height: "250px",
    marginLeft: "20px",
    marginBottom: "20px",
    objectFit: "cover",
    cursor: "pointer", // Add cursor pointer to indicate it's clickable
  };

  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  useEffect(() => {
    // Assuming MovieMax fetches and sets the movies
    // Replace with an actual fetch or API call if needed
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=e900f92d148bf8ae9a214d27b5fac540"
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);
  console.log(movies[0]);

  return (
    <div>
      <h4 style={{ color: "white" }}>Movies</h4>
      <Carousel responsive={responsive}>
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => handleClick(movie.id)}>
            <img
              style={imageStyle}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Discover;
