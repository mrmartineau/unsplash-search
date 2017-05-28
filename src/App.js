import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import queryString from 'query-string';
import './App.css';
import Results from './Results';
import Masthead from './Masthead';
import Message from './Message';

const unsplash = new Unsplash({
  applicationId: '8efed94039a2e5c308d2ec4cb1ec3136e01b1b163d87354b902fff20c6c48355',
  secret: 'f700005be37b7bc0cf57c4976b7ecfdfdbe0bb109d28ecb1d991c2717202dcce',
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob',
});

const defaultSearch = 'space';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: defaultSearch,
      results: null,
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    const urlParams = queryString.parse(location.search);
    const search = urlParams.search ? urlParams.search : defaultSearch;
    this.searchUnsplash(search);
    this.setState({search});
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    const search = this.state.search.length > 0
      ? this.state.search
      : defaultSearch;
    this.searchUnsplash(search);
    this.updateUrl();
  }

  handleSearchChange(event) {
    this.setState({
      search: event.target.value,
    });
  }

  searchUnsplash(search) {
    return unsplash.search
      .photos(search, 1, 9)
      .then(toJson)
      .then(json => {
        this.setState({
          results: json.results,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateUrl() {
    return window.location.search = `?search=${this.state.search}`;
  }

  render() {
    const { results } = this.state;

    return (
      <div className="App">
        <Masthead
          value={this.state.search}
          handleSearchChange={this.handleSearchChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        {
          results
          ? <Results results={results} /> : <Message>⏲ Loading...</Message>
        }
      </div>
    );
  }
}
