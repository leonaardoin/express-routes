const React = require('react');

class Index extends React.Component {
  render() {
      return (
              <div>
                <h1>What is it Even?</h1>
                <li><a href="/songs"> Songs</a></li>
                <li><a href="/movies"> Movies</a></li>
                <li><a href="/plants"> Plants</a></li>
                <li><a href="/sports"> Sports</a></li>
                <li><a href="/cars"> Cars</a></li>
              </div>
      );
  }
}
module.exports = Index;