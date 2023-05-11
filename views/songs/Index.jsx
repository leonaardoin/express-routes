const React = require('react');

class Index extends React.Component {
  render() {
      const { songs } = this.props;
      return (
    <div>
        <h1>Songs</h1>
                  <ul>
                      {songs.map((element, i) => {
                          return (
                              <li>
                                  <a href={`/songs/${i}`}> {element.name} </a>
                                  {' '} is a song by {element.artist}. <br></br>
                                    {element.advisory
                                      ? `This song has a parental advisory.`
                                      : `This song is family friendly.`}
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