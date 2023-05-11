const React = require('react');

class Index extends React.Component {
  render() {
      const { movies } = this.props;
      return (
              <div>
                  <h1>Movies</h1>
                  <ul>
                      {movies.map((element, i) => {
                          return (
                              <li>
                                  <a href={`/movies/${i}`}> {element.name} </a>
                                  {' '} stars {element.actor}. <br></br>
                                    {element.rating
                                      ? `This is a family movie.`
                                      : `This is not a family movie.`}
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