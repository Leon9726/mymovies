import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    searchChange = (event) => {
        this.setState({ term: event.target.value });
    }

    searchFilm = (evt) => {
        evt.preventDefault();
        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <form className="form-inline my-2 my-lg-0" >
                <input className="form-control mr-sm-2" type="search" 
                value={this.state.term} placeholder="Search" 
                onChange={this.searchChange}
                aria-label="Search" />
                <button onClick= {this.searchFilm} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
            </form>
        )
    }

}
