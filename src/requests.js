
const API_KEY = "4ae4c24631364126a91e39f66d89ebeb"

const requests = {
    trending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,

    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,

    popular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,


    movieDetails: (movieId) => {
        //returns id from details page and passes it to the movieDetail url that will fetch the movie detail
        return `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    }
}

export default requests;


