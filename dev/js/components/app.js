import React from 'react';
import MoviesList from '../containers/movies-list';
import MovieDetails from '../containers/active-movie';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Movies list:</h2>
        <MoviesList />
        <h2>Movie details:</h2>
        <MovieDetails />
    </div>
);

export default App;
