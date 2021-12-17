const jsonRequests = {
    remoteURL: "http://localhost:8088",

    movieDetails: (movieId) => {
        //returns id from details page and passes it to the movieDetail url that will fetch the movie detail
        return `/addedMovieDetails/${movieId}&language=en-US`
    }

}

export default jsonRequests;