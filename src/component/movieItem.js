import React from 'react'

export default function movieItem({ film }) {

    return (
    <div className="card col-md-3">
        <img className="card-img-top" src={film.Poster} alt={film.Title}/>
        <div className="card-body">
            <h5 className="card-title">{film.Title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary">Go somewhere</button>
        </div>
    </div>
    )

    
}