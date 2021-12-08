import "./Row.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
function Row({ sectionTitle, fetchURL }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        // creating a function to fetch getItems
        // async is waiting for a response back from the api
        const getItems = async () => {
            //await is waiting for a response back from fetch
            const resp = await fetch(`https://api.themoviedb.org/3${fetchURL}`, {
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
            setMovies(data.results)
        }
        getItems()
    }, [fetchURL])




    return (
        <div className="Row">
            {/* section title */}
            <h2 className="title">{sectionTitle}</h2>
            { /*movies list container that contains list of movie elements*/}
            <div className="MovieContainer">
                {/* movie.map itrates over an array of movie */}
                {movies.map((movie) => (
                    //  the link is an href for the movies and the to= is the path that the link will goto when clicked
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <div className="movieItem" >

                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Row;