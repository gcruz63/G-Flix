import './MovieDetails.css'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import requests from '../requests'
import StarRating from '../components/StarRating/Star'

function MovieDetails() {
    const history = useHistory()
    const [currentUser] = useState(JSON.parse(localStorage.getItem("gflix_user")))
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

    }, [movieId])
    const handleAddToWatchlist = (movieDetails) => {
        movieDetails.userId = currentUser.id
        movieDetails.imgURL = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
        const fetchOption = {
            method: "POST",
            headers: {
                //lets the api know the information its about to get is json
                "Content-Type": "application/json"
            },
            //takes the data an converts it to a string
            body: JSON.stringify(movieDetails)
        }

        return fetch("http://localhost:8088/addNewMovie", fetchOption)
            // after the fetch is complete 
            .then(() => {
                //forces a redirect to movies
                history.push("/your/watchlist")
            })

    }

    // only return dom when we have data in details
    return details && (
        <div className='MovieDetails'>
            <img alt="movie" width='450' src={`https://image.tmdb.org/t/p/original${details.backdrop_path ? details.backdrop_path : details.poster_path}`} />
            {/* <img width='450' src={`https://image.tmdb.org/t/p/original${details.poster_path ? details.poster_path : details.backdrop_path}`} /> */}

            {details.overview}
            {details.genres?.map((gen) => {
                return <div key={gen.id} value={gen.id}>{gen.name}</div>
            })}
            <StarRating {...{ movieId: details.id }} />
            <button onClick={() => handleAddToWatchlist(details)}>add to Watchlist</button>
        </div>
    )
}

export default MovieDetails
