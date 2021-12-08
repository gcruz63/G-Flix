import './MovieDetails.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import requests from '../requests'

function MovieDetails() {
    //set useState to null to make sure the page only loads when there is details
    const [details, setMovieDetails] = useState(null)
    //useParams grabs the parameters past to the url it can have multiple parameters
    const { movieId } = useParams()
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3${requests.movieDetails(movieId)}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                //checks if there is data and if there is call setMovieDetails to set data to details state
                if (data) {
                    console.log(data)
                    setMovieDetails(data)
                }
            })

    }, [])
    // only return dom when we have data in details
    return details && (
        <div className='MovieDetails'>

            {/* <img width='900' src={`https://image.tmdb.org/t/p/original${details.backdrop_path ? details.backdrop_path : details.poster_path}`} /> */}
            <img width='450' src={`https://image.tmdb.org/t/p/original${details.poster_path ? details.poster_path : details.backdrop_path}`} />
            {details.genre}
            {details.overview}
        </div>
    )
}

export default MovieDetails
