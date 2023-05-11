const React = require('react')
class Show extends React.Component {
  render () {
   const cars = this.props.cars
    return (
      <div>
      <h1>{cars.name}</h1>
        {cars.name} was made by {cars.company}. 
        {cars.type 
            ? ` This car is a family car.`
            : ` This car is not a family car.`}
            <br></br><br></br>
        <a href="/cars"> Go back </a>
      </div>
      );
     }
   }
  module.exports  = Show;