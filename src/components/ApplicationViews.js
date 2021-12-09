import React from "react"
import { Route } from "react-router-dom";
import { AddMovieForm } from "../pages/AddMovie";
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails';

function ApplicationViews() {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path='/movie/:movieId'>
                <MovieDetails />
            </Route>
            <Route exact path='/movie/create'>
                <AddMovieForm />
            </Route>
            {/* <Route path="/employees/create">
                <EmployeeForm />
            </Route> */}


        </>
    )
}

export default ApplicationViews
