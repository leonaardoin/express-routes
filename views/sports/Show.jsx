const React = require('react')
class Show extends React.Component {
  render () {
   const sports = this.props.sports
    return (
      <div>
      <h1>{sports.name}</h1>
        {sports.name} is played on a {sport.type}. 
        {sport.contact 
            ? ` This sport is a contact sport.`
            : ` This sport is not a contact sport.`}
            <br></br><br></br>
        <a href="/sports"> Go back </a>
      </div>
      );
     }
   }
  module.exports  = Show;