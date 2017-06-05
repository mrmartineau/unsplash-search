import React from 'react';
import './Search.css';

const Search = props => (
	<form className="Search" onSubmit={props.handleSearchSubmit}>
		<label htmlFor="searchUnsplash" className="is-visuallyHidden">Search Unsplash</label>
		<input
			id="searchUnsplash"
			className="Search-input"
			type="text"
			placeholder="Search Unsplash"
			value={props.value}
			onChange={props.handleSearchChange}
		/>
		<input className="Search-submit" type="submit" value="Search" />
		<button className="Search-refresh" onClick={props.handleSearchRefresh}>
			<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 7h-2.086l1.293-1.293c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-3.707 3.707 3.707 3.707c0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293c0.391-0.391 0.391-1.023 0-1.414l-1.293-1.293h2.086c1.379 0 2.5 1.346 2.5 3s-1.346 3-3 3v0c-0.553 0-1 0.448-1 1s0.447 1 1 1v0c2.757 0 5-2.243 5-5s-2.019-5-4.5-5z"></path><path d="M8.293 12.293c-0.391 0.391-0.391 1.023 0 1.414l1.293 1.293h-2.086c-1.379 0-2.5-1.346-2.5-3s1.346-3 3-3v0c0.553 0 1-0.448 1-1s-0.447-1-1-1v0c-2.757 0-5 2.243-5 5s2.019 5 4.5 5h2.086l-1.293 1.293c-0.391 0.391-0.391 1.023 0 1.414 0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293l3.707-3.707-3.707-3.707c-0.391-0.391-1.023-0.391-1.414 0z"></path></svg>
		</button>
	</form>
);

export default Search
