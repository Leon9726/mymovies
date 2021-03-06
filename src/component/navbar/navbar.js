import React from 'react'
import SearchBar from './searchBar'
import MenuBar from './menuBar'

export default function navBar({onSearch}) {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="*">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <MenuBar />
                <SearchBar onSearch={onSearch}/>
            </div>
        </nav>

    )

}