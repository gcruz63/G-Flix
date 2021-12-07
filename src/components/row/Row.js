import "./Row.css"
import { useState, useEffect } from "react"

function Row({ title, fetchURL }) {
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
            <h2 className="title">{title}</h2>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
                    <p>

                    </p>
                </div>

            ))}
        </div>
    );
}

export default Row;