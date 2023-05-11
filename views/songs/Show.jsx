const React = require('react')
class Show extends React.Component {
  render () {
   const movies = this.props.movies
    return (
      <div>
      <h1>{movie.name}</h1>
        {movie.name} stars {movie.actor}. 
        {movie.rating 
            ? ` This is a family movie.`
            : ` This game is not a family movie.`}
            <br></br><br></br>
        <a href="/movie"> back </a>
      </div>
      );
     }
   }
  module.exports  = Show;