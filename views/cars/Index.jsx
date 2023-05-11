const React = require('react');

class Index extends React.Component {
  render() {
      const { cars } = this.props;
      return (
              <div>
                  <h1>Cars</h1>
                  <ul>
                      {cars.map((element, i) => {
                          return (
                              <li>
                                  <a href={`/cars/${i}`}> {element.name} </a>
                                  {' '} was made by {element.company}. <br></br>
                                    {element.type
                                      ? `This car is a family car.`
                                      : `This car is not a family car.`}
                                  <br />
                              </li>
                          );
                      })}
                  </ul>
                  <a href="/"> Go back </a>
              </div>
      );
  }
}
module.exports = Index;