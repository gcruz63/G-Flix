import "./Spot.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
function Spot({ sectionTitle, fetchURL }) {
    const [addNewMovies, setMoviesAdded] = useState([])

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
            setMoviesAdded(data)
        }
        getItems()
    }, [fetchURL])




    return (
        <div className="Spot">
            {/* section title */}
            <h2 className="title">{sectionTitle}</h2>
            { /*movies list container that contains list of movie elements*/}
            <div className="MovieContainer">
                {/* movie.map iterates over an array of movie */}
                {addNewMovies?.map((addedMovie) => (
                    //  the link is an href for the addedMovies and the to= is the path that the link will goto when clicked
                    <Link key={addedMovie.id} to={`/addMovieDetails/${addedMovie.id}`}>
                        <div className="movieItem" >

                            <img alt="movie" src={`${addedMovie.imgURL}`} />

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Spot;