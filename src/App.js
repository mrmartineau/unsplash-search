import React from 'react'
import Unsplash, { toJson } from "unsplash-js";
import './App.css';
import Results from './Results';

const unsplash = new Unsplash({
	applicationId: "8efed94039a2e5c308d2ec4cb1ec3136e01b1b163d87354b902fff20c6c48355",
	secret: "f700005be37b7bc0cf57c4976b7ecfdfdbe0bb109d28ecb1d991c2717202dcce",
	callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});

const defaultSearch = 'mountains';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			results: null
		}
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
	}

	componentDidMount() {
		this.searchUnsplash(defaultSearch);
		this.setState((prevState, props) => ({

		}));
	}

	handleSearch(event) {
		event.preventDefault();
		const search = this.state.search.length > 0 ? this.state.search : defaultSearch;
		this.searchUnsplash(search);
	}

	handleSearchChange(event) {
		this.setState({
			search: event.target.value,
		});
	}

	searchUnsplash(search) {
		return unsplash.search.photos(search, 1, 9)
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

	render() {
		const { results } = this.state;
		return (
			<form className="App" onSubmit={this.handleSearch}>
				<input className="App-input" type="search" placeholder="Search Unsplash" value={this.state.search} onChange={this.handleSearchChange}/>
				{ results ? (
					<Results results={results} />
				) : (
					<h2>Loading...</h2>
				)}
			</form>
		);
	}
}
