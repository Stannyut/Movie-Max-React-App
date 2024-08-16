import React, { useEffect } from 'react';

function TvData({ onMoviesFetched }) {
    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=e900f92d148bf8ae9a214d27b5fac540');
                const data = await response.json();
                onMoviesFetched(data.results); // Pass all TV shows to parent
            } catch (error) {
                console.error('Error fetching TV show data:', error);
            }
        };

        getMovie();
    }, [onMoviesFetched]);

    return null;
}

export default TvData;
