import React from 'react'
import styles from './MovieList.module.css';
import MovieCard from '../MovieCard/MovieCard';
import '../../index.css';


const MovieList = (props) => {
    return (
        <>
            <div className={`${styles.movieList} flex-row container`}>
                {props.movies.map(movie =>
                    <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        </>
    )
}

export default MovieList