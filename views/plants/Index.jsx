const React = require('react');

class Index extends React.Component {
  render() {
      const { plants } = this.props;
      return (
              <div>
                  <h1>Plants</h1>
                  <ul>
                      {plants.map((element, i) => {
                          return (
                              <li>
                                  <a href={`/plants/${i}`}> {element.name} </a>
                                  {' '} is native to {element.country}. <br></br>
                                    {element.season
                                      ? `This plant is a perennial.`
                                      : `This plant is an annual.`}
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