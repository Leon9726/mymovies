import React from 'react'
import MovieItem from './movieItem'

export default function listFilm({film}) {
    if(!film) {
        return null;
    }
    return (
        <div className="row">
            {
                film.map(film => <MovieItem key={film.imdbID} film={film}></MovieItem>)
            }
        </div>
    )
}