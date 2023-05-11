const React = require('react')
class Show extends React.Component {
  render () {
   const plants = this.props.plants
    return (
      <div>
      <h1>{plants.name}</h1>
        {plants.name} is native to {plants.country}. 
        {plants.season 
            ? ` This plant is a perennial.`
            : ` This plant is an annual.`}
            <br></br><br></br>
        <a href="/plants"> Go back </a>
      </div>
      );
     }
   }
  module.exports  = Show;