const React = require('react');

class Index extends React.Component {
  render() {
      const { sports } = this.props;
      return (
              <div>
                  <h1>Sports</h1>
                  <ul>
                      {sports.map((element, i) => {
                          return (
                              <li>
                                  <a href={`/sports/${i}`}> {element.name} </a>
                                  {' '} is played on a {element.type}. <br></br>
                                    {element.contact
                                      ? `This sport is a contact sport.`
                                      : `This sport is not a contact sport.`}
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