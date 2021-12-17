import React from "react"
import { Route } from "react-router-dom";
import AddedMovieDetails from "../pages/AddedMovieDetails";
import AddMovieForm from "../pages/AddMovie";
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails';
import Watchlist from "../pages/Watchlist";

function ApplicationViews() {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path='/movie/:movieId'>
                <MovieDetails />
            </Route>
            <Route exact path='/add/newMovie'>
                <AddMovieForm />
            </Route>
            <Route exact path='/your/watchlist'>
                <Watchlist />
            </Route>
            <Route exact path="/addMovieDetails/:movieId">
                <AddedMovieDetails />
            </Route>
            {/* <Route path="/employees/create">
                <EmployeeForm />
            </Route> */}


        </>
    )
}

export default ApplicationViews
