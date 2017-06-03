export const selectMovie = (movie) => {
    console.log(`You've clicked a movie: ${movie.name}`);
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
};