import React from 'react'
import MovieForm from './components/MovieForm/MovieForm'
import MovieList from './components/MovieList/MovieList'
import { MdLocalMovies } from "react-icons/md";

const moviesList = [
    {
        id: 1,
        title: "Interstellar",
        watched: false,
    },
    {
        id: 2,
        title: "Inception",
        watched: true,
    },
    {
        id: 3,
        title: "Inception",
        watched: true,
    },

];
const App = () => {
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
            <MovieForm />
            <MovieList movies={moviesList} />
        </>
    )
}

export default App