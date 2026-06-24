import React from 'react'
import styles from './MovieList.module.css';
import MovieCard from '../MovieCard/MovieCard';
import '../../index.css';

const MovieList = ({ movies, onToggleWatched, onDelete }) => {
    return (
        <div className={`${styles.movieList} flex-row container`}>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onToggleWatched={onToggleWatched}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default MovieList;