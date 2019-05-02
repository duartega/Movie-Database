import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import axios from './ConfigAxios';
import Table from './Table';
import Signin from './Sign';

// const SIGNIN = (props) => {
//   Signin()
// }

const showTimes_header = ['Movie Title', 'Theater Name', 'Time'];
const showTimes_data = ['movieTitle', 'theaterName', 'time'];

const ShowTimes = (props) => (
  <div className="c">
    <h2 align="middle">Show Times</h2>
		{<Table titles={showTimes_header} attributes={showTimes_data} data={props.data !== '' ? JSON.parse(props.data) : [{}]}/>}

  </div>
)

const cities_header = ['City Name'];
const cities_data = ['cityName'];

const Cities = (props) => (
  <div className="c">
    <h2 align="middle">Cities</h2>
		{<Table titles={cities_header} attributes={cities_data} data={props.data !== '' ? JSON.parse(props.data) : [{}]}/>}

  </div>
)

const locations_header = ['Theater', 'Address', 'City', 'State', 'Zip Code'];
const locations_data_values = ['theaterName', 'address', 'cityName', 'state', 'zipCode'];
const Theaters = (props) => (
  <div className="c">
    <h2 align="middle">Theaters</h2>
		{<Table titles={locations_header} attributes={locations_data_values} data={props.data !== '' ? JSON.parse(props.data) : [{}]}/>}

  </div>
)


const movie_title_header = ['Title', 'Genre', 'Director', 'Description', 'smallImageURL', 'largeImageURL'];
const movie_data_values = ['movieTitle', 'genre', 'director', 'description', 'smallImageURL', 'largeImageURL'];
const Movies = (props) => (
	<div className="c">
		<h2 align="middle">All Movies</h2>
		{<Table titles={movie_title_header} attributes={movie_data_values} data={props.data !== '' ? JSON.parse(props.data) : [{}]}/>}
	</div>
);
const Movie_Genres = (props) => (
	<div className="c">
    <h2 align="middle">{props.match.url}</h2>
		{<Table titles={movie_title_header} attributes={movie_data_values} data={props.data !== '' ? JSON.parse(props.data) : [{}]}/>}
	</div>
);
const home = () => (
<div>
<h1 align="middle"> Welcome to the Home page </h1>
<h2 align="middle"><b>Click on one of the drop downs above to navigate!</b></h2>
<img className="center" src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/movietheater-screen-seats-700x396.jpg"
alt="Movie Theater" width="90%" height="90%"></img>

</div>
  );

  //const CompSci = () => (<h2>Regal Cinema</h2>);
// const department = ( {match} ) => (
//     <div>
//     <h2>Departments</h2>
//       <ol>
//         <li><Link to="/departments/cs">Computer Science</Link></li>
//         <li><Link to={`${match.url}/chem`}>Chemistry</Link></li>
//         <li><Link to="/departments/math">Mathematics</Link></li>
//       </ol>

//       <Route exact path="/departments/cs" component={CompSci} />
//     </div>
// );

// const majors = () => ( <h2> Majors </h2>);



class App extends Component {

  // Create the constructor
  constructor (props) {
    // Must always include
    super(props);

    this.state = {
      movie_genres: '',
      movie_titles: '',
      theaters: '',
      cites: '',
      showTimes: '',
      g_action: '',
      g_actionDramaThriller: '',
      g_actionSciFi: ''
    };

  }

  componentDidMount () {
    axios.get('movies/').then(m_titles => this.setState({movie_titles: JSON.stringify(m_titles.data)}));
    axios.get('movies/').then(m_titles => this.setState({mg: JSON.stringify(m_titles.data)}));
    axios.get('movies/Action').then(m_genre => this.setState({g_action: JSON.stringify(m_genre.data)}));
    axios.get('movies/Action Drama Thriller').then(m_genre => this.setState({g_actionDramaThriller: JSON.stringify(m_genre.data)}));
    axios.get('movies/Action SciFi').then(m_genre => this.setState({g_actionSciFi: JSON.stringify(m_genre.data)}));
    axios.get('movies/t/theaters').then(m_theaters => this.setState({theaters: JSON.stringify(m_theaters.data)}));
    axios.get('cities/').then(m_cities => this.setState({cities: JSON.stringify(m_cities.data)}));
    axios.get('cities/showTimes').then(showTimes => this.setState({showTimes: JSON.stringify(showTimes.data)}));
  }


  render() {
    // console.log(this.state);
    var Genres = ['Action', 'Action Drama Thriller', 'Action SciFi',
                  'Action, Drama', 'Adventure Fantasy', 'Biography Drama History',
                  'Biography Drama Sport', 'Comedy', 'Comedy Drama Romance',
                  'Comedy Fantasy', 'Comedy Romance0', 'Comedy / Romance',
                  'Crime Drama Mystery', 'Drama', 'Drama Thriller',
                  'Horror Thriller', 'Romance--War']
    var Locations = ['Petaluma', 'Rohnert Park', 'Santa Rosa', 'Sebastopol', 'Sonoma']

    var Genres_map = Genres.map((name, index) =>
                  <Link to={ '/'+name } key={index}>{name}</Link>)
    var Locations_map = Locations.map((name, index) =>
    <Link to={ '/'+name } key={index}>{name}</Link>)

    return (
      <div className="App">
          <ul>
              <li><Link to="/">Home</Link></li>

              <li className="dropdown">
                <Link to="/movies" className="dropbtn">Movies</Link>
                <div className="dropdown-content">
                {Genres_map}
                </div>
              </li>

              <li><Link to="/theaters">Theaters</Link></li>


              <li className="dropdown">
              <Link to="/cities" className="dropbtn">Cities</Link>
              <div className="dropdown-content">
              {Locations_map}
              </div>
              </li>

              <li><Link to="/cities/showTimes">Show Times</Link></li>
              <li><Link to="/signin">Sign-in</Link></li>
          </ul>

          <Route exact path="/" component={home}/>
          {/* <Route path="/movies" component={Movies}/> */}
          <Route exact path="/movies" render={(props) => <Movies {...props} data={this.state.movie_titles}/>}/>
          <Route exact path="/Action" render={(props) => <Movie_Genres {...props} data={this.state.g_action}/>}/>
          <Route exact path="/Action Drama Thriller" render={(props) => <Movie_Genres {...props} data={this.state.g_actionDramaThriller}/>}/>

          <Route exact path="/Action SciFi" render={(props) => <Movie_Genres {...props} data={this.state.g_actionSciFi}/>}/>

          <Route exact path="/theaters" render={(props) => <Theaters {...props} data={this.state.theaters}/>}/>
          <Route exact path="/cities" render={(props) => <Cities {...props} data={this.state.cities}/>}/>
          <Route exact path="/cities/showTimes" render={(props) => <ShowTimes {...props} data={this.state.showTimes}/>}/>
          {/* <Route exact path="/signin" component={SIGNIN}/> */}



      </div>
    );
  }
}

{/* <Link to="/movies">Comedy</Link>
<Link to="/movies">Comedy Drama Romance</Link>
<Link to="/movies">Comedy Fantasy</Link>
<Link to="/movies">Comedy Romance</Link>
<Link to="/movies">Comedy / Romance</Link>
<Link to="/movies">Crime Drama Mystery</Link>
<Link to="/movies">Drama</Link>
<Link to="/movies">Drama Thriller</Link>
<Link to="/movies">Horror Thriller</Link>
<Link to="/movies">Romance--War</Link> */}
export default App;
