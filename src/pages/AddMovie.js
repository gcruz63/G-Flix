import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import useResourceResolver from "../resource/useResourceRevolver";

export const AddMovieForm = () => {
    const [movie, updateMovie] = useState({
        overview: "",
        genre: ""
    });
    const { resolveResource, resource } = useResourceResolver()
    const [genre, changeGenre] = useState([])
    const history = useHistory()

    const addMovie = (evt) => {
        evt.preventDefault()

        const newMovie = {
            overview: movie.overview,
            genre: movie.genre,
            userId: parseInt(localStorage.getItem("gflix_user")),
            employeeId: 1,
            dateCompleted: ""
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie)
        }

        return fetch("http://localhost:8088/genres", fetchOption)
            .then(() => {
                history.push("/movies")
            })
            .then(() => {

            })

    }

    const assignGenre = (genreId) => {
        const genreObj = {
            userId: parseInt(userId),
            genreId: genreId,
        }
        const existingUserGenre = userGenres.find(obj => obj.userId === parseInt(userId) && obj.genreId === genreId)

        if (!existingUserGenre) {
            UserRepository.assignGenre(genreObj)
            resolveResource(user, userId, UserRepository.get)
        }
        resolveResource(user, userId, UserRepository.get)
    }


    return (
        <form className="addMovieForm">
            <h2 className="addMovieForm__title">New Movie</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="overview">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief overview of problem"
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
                {resource?.genre?.length < 5
                    ? <><label for="genre-select"> Choose a genre:</label>
                        <select name="genres" id="genre-select" onChange={(evt) => {
                            assignGenre(parseInt(evt.target.value))
                        }} >
                            <option value="">--Please choose a genre--</option>
                            {genres.map((gen) => (
                                <option key={gen.id} value={gen.id}>{gen.genreType}</option>
                            ))}
                        </select></>
                    : ""}

            </fieldset>
            <button className="btn btn-primary" onClick={addMovie}>
                Add Movie
            </button>
        </form>
    )
}