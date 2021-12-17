import './AddedMovieDetails.css'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import StarRating from '../components/StarRating/Star'


function AddedMovieDetails() {
    const history = useHistory()
    //set useState to null to make sure the page only loads when there is details
    const [addNewMovie, setAddedMovieDetails] = useState(null)
    //useParams grabs the parameters past to the url it can have multiple parameters
    const { movieId } = useParams()
    useEffect(() => {
        // creating a function to fetch getItems
        // async is waiting for a response back from the api
        const getItems = async () => {
            //await is waiting for a response back from fetch
            const resp = await fetch(`http://localhost:8088/addNewMovie`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            // waiting for response to return data
            const data = await resp.json();
            // if there is no data return nothing
            if (data === null) return;
            console.log(data)
            //once i get the data set it to movie
            data.forEach((item) => {
                if (item.id === parseInt(movieId)) setAddedMovieDetails(item)
            })
        }
        getItems()

    }, [movieId])

    const handleRemoveFromWatchlist = (movieId) => {

        const fetchOption = {
            method: "DELETE",
            headers: {
                //lets the api know the information its about to get is json
                "Content-Type": "application/json"
            },
        }

        return fetch(`http://localhost:8088/addNewMovie/${movieId}`, fetchOption)
            // after the fetch is complete 
            .then(() => {
                //forces a redirect to movies
                history.push("/your/watchlist")
            })

    }


    return addNewMovie && (
        <div className='AddedMovieDetails'>
            <img alt="movie" width='450' src={`${addNewMovie.imgURL}`} />
            {addNewMovie.overview}
            {/* {addNewMovies.genres?.map((gen) => {
                return <div key={gen.id} value={gen.id}>{gen.name}</div>
            })} */}
            <StarRating {...{ movieId: addNewMovie.id }} />
            <button onClick={() => handleRemoveFromWatchlist(addNewMovie.id)}>Remove from watchlist</button>
        </div>
    )
}

export default AddedMovieDetails
