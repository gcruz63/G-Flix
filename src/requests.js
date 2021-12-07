const API_KEY = "4ae4c24631364126a91e39f66d89ebeb"

const requests = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,

    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,

    popular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`


}

export default requests;