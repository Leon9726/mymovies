import './App.css';
import { Component } from 'react';


const API_KEY = '793525d8'
const API_URL = 'http://www.omdbapi.com'

function ricercaFilm(params = 'back to the past') {
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

  componentDidMount() {
    ricercaFilm().then(res => {
      this.setState({
        film: res.Search
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>MY MOVIES</h1>
        <ul>
          {this.state.film.map(film => <li key={film.imdbID}>{film.Title}</li>)}
        </ul>
      </div>
    )
  }
}

export default App;
