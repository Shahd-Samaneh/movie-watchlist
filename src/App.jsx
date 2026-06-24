import React from 'react'
import MovieForm from './components/MovieForm/MovieForm'
import MovieList from './components/MovieList/MovieList'
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
            <MovieForm />
            <MovieList movies={moviesList} />
        </>
    )
}

export default App