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

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: 'London',
      page: 2,
      results: null,
      active: false,
    }
    // const search = this.state.search.length > 0
    //   ? this.state.search
    //   : defaultSearch;
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchRefresh = this.handleSearchRefresh.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount() {
    const urlParams = queryString.parse(window.location.search);
    const search = urlParams.search ? urlParams.search : this.state.search;
    this.setState({search: search});
    console.log('componentDidMount', this.state, search);
    this.searchUnsplash(search);
    // this.updateUrl();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState)
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    const search = this.state.search.length > 0
      ? this.state.search
      : 'Bristol';
    console.log('handleSearchSubmit', this.state, event);
    this.searchUnsplash(search);
    //this.updateUrl();
  }

  handleSearchChange(event) {
    console.log('handleSearchChange', event.target.value);
    this.setState({
      search: event.target.value,
    });
  }

  handleSearchRefresh(event) {
    console.log('handleSearchRefresh');
    this.setState({
      page: this.state.page + 1,
    });
    this.handleSearchSubmit(event);
  }

  handleBack() {
    this.setState({
      active: false,
    });
  }

  searchUnsplash(search) {
    // const s = this.state.search || search;
    this.setState({
      search: search,
    });
    console.log('searchUnsplash', this.state.search, search);
    return unsplash.search
      .photos(search, this.state.page, 9)
      .then(toJson)
      .then(json => {
        this.setState({
          results: json.results,
        });
        console.log(this.state);
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
          handleBack={this.handleBack}
          handleSearchRefresh={this.handleSearchRefresh}
        />
        {
          results
          ? <Results results={results} active={this.state.active} /> : <Message><span role="img" aria-label="timer">⏲</span> Loading...</Message>
        }

        <footer className="footer">
          by <a href="https://zander.wtf">Zander</a>
        </footer>
      </div>
    );
  }
}
