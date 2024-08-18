import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TvData from './TvData';
import { Navigate, useNavigate } from "react-router-dom";

function Tv() {
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
  };

  return (
    <div>
      <h4 style={{ color: "white" }}> Series</h4>
      <div>
        <TvData onMoviesFetched={setMovies} />
        <Carousel responsive={responsive}>
          {movies.map((movie) => (
            <div key={movie.id} onClick={() => navigate(`/${movie.id}`)}>
              <img
                style={imageStyle}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Tv;
