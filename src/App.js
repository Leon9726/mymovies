import './App.css';
import { Component } from 'react';
import Film from './component/movies'
import NavBar from './component/navbar/navbar'


const API_KEY = '793525d8'
const API_URL = 'http://www.omdbapi.com'

function ricercaFilm(params = 'back to the future') {
  return fetch(API_URL + '?apikey=' + API_KEY + '&s=' + params).then(res => res.json())
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      film: [],
      totali: 0
    }
  }

  searchMovies = (term = '') => {
    if(term.length < 3) {
      return
    }

    ricercaFilm(term).then( res => {
      this.setState( {
        film: res.Search
      })
    })
  }

  componentDidMount() {
    this.searchMovies("back to the future");
  }

  render() {
    return (
      <>s
      <NavBar onSearch={this.searchMovies} />
      <div className="container">
          <h1>FILM</h1>
          <Film film={this.state.film}></Film>
      </div>
      </>
    )
  }
}

export default App;
