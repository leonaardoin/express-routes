const React = require('react')
class Show extends React.Component {
  render () {
   const movies = this.props.movies
    return (
      <div>
      <h1>{movies.name}</h1>
        {movies.name} stars {movies.actor}. 
        {movies.rating 
            ? ` This is a family movie.`
            : ` This is not a family movie.`}
            <br></br><br></br>
        <a href="/plants"> Go back </a>
      </div>
      );
     }
   }
  module.exports  = Show;