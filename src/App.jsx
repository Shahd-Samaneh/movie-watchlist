import React, { useEffect , useState } from 'react'
import MovieForm from './components/MovieForm/MovieForm'
import MovieList from './components/MovieList/MovieList'
import { MdLocalMovies } from "react-icons/md";

const App = () => {
    const [movies, setMovies] = useState(() => {
        const savedMovies = localStorage.getItem('movies');

        return savedMovies ? JSON.parse(savedMovies) : [];
    });
    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    const handleAddMovie = (title) => {
        const newMovie = {
            id: Date.now(),
            title,
            watched: false,
        };

        setMovies([...movies, newMovie]);
    };

    const handleToggleWatched = (id) => {
        setMovies(
            movies.map((movie) => {
                if (movie.id === id) {
                    return {
                        ...movie,
                        watched: !movie.watched,
                    };
                }

                return movie;
            })
        );
    };

    const handleDelete = (id) => {
        setMovies(
            movies.filter((movie) => movie.id !== id)
        );
    };
    return (
        <>
            <header className="header container">
                <h1>
                    <MdLocalMovies className="movieIcon" />
                    <span>Movie Watchlist</span>
                    <MdLocalMovies className="movieIcon" />
                </h1>
                <p>Keep track of movies you want to watch</p>
            </header>

            <MovieForm onAddMovie={handleAddMovie} />

            <MovieList movies={movies} onToggleWatched={handleToggleWatched} onDelete={handleDelete} />
        </>
    )
}

export default App