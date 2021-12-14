import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import GenreRepository from "../components/GenreRepository";


function AddMovieForm() {
    const [movie, updateMovie] = useState({
        userId: "",
        imgURL: "",
        overview: "",
        genre: ""
    });
    const [genre, changeGenre] = useState([])
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("gflix_user")))
    const history = useHistory()
    const [userGenres, setUserGenres] = useState([])


    useEffect(() => {
        GenreRepository.getGenres()
            .then((res) => setUserGenres(res))
    }, [])

    const addMovie = (evt) => {
        //stops the form from refreshing the page
        evt.preventDefault()

        const copy = { ...movie }
        copy.userId = currentUser.id
        updateMovie(copy)



        const fetchOption = {
            method: "POST",
            headers: {
                //lets the api know the information its about to get is json
                "Content-Type": "application/json"
            },
            //takes the data an converts it to a string
            body: JSON.stringify(movie)
        }

        return fetch("http://localhost:8088/addNewMovie", fetchOption)
            // after the fetch is complete 
            .then(() => {
                //forces a redirect to movies
                history.push("/your/watchlist")
            })

    }

    // const assignGenre = (genreId) => {
    //     const genreObj = {
    //         userId: currentUser.id,
    //         genreId: genreId,
    //     }
    //     const existingUserGenre = userGenres.find(obj => obj.userId === currentUser.id && obj.genreId === genreId)
    //     // if existing user genre is not found
    //     if (!existingUserGenre) {
    //         //add genre to the user
    //         GenreRepository.assignGenre(genreObj)
    //     }
    // }


    return (
        <form className="addMovieForm">
            <h2 className="addMovieForm__title">Add New Movie</h2>
            <fieldset className="fieldset">
                <input type="url" name="url" placeholder="URL of img"
                    onChange={
                        (evt) => {
                            const copy = { ...movie }
                            copy.imgURL = evt.target.value
                            updateMovie(copy)
                        }
                    }
                />
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="overview">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description about the movie"
                        onChange={
                            (evt) => {
                                const copy = { ...movie }
                                copy.overview = evt.target.value
                                updateMovie(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>

                <><label htmlFor="genre-select"> Choose a genre:</label>
                    <select name="genres" id="genre-select" onChange={(evt) => {
                        const copy = { ...movie }
                        copy.genre = parseInt(evt.target.value)
                        updateMovie(copy)
                    }} >
                        <option value="">--Please choose a genre--</option>
                        {userGenres.map((gen) => (
                            <option key={gen.id} value={gen.id}>{gen.genreType}</option>
                        ))}
                    </select></>


            </fieldset>
            <button className="btn btn-primary" onClick={addMovie}>
                Add Movie
            </button>
        </form>
    )
}

export default AddMovieForm