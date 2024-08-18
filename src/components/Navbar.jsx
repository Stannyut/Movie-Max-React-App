import React, { useState, useEffect } from 'react';
import NavbarPill from './NavbarPill';
import { Carousel } from 'bootstrap';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [movieList, setMovieList] = useState([]);
    const navigate = useNavigate()

    const getMovie = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=e900f92d148bf8ae9a214d27b5fac540')
            .then(response => response.json())
            .then(response => setMovieList(response.results))
            .catch(error => console.error('Error fetching movie data:', error));
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            <NavbarPill />
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {movieList.map((movie, index) => (
                        <div key={movie.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                className="d-block w-100"
                                alt={movie.title}
                                style={{ 
                                    height: '450px', 
                                    objectFit: 'contain', 
                                    objectPosition: 'center' 
                                }}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 style={{ color: 'white' }}>{movie.title}</h3>
                                <p style={{ color: 'white', font:'40px', fontFamily:' ' }}>{movie.overview}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
