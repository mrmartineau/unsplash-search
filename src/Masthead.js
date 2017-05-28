import React from 'react';

const Masthead = props => (
  <header className="Masthead">
    <form className="Search" onSubmit={props.handleSearchSubmit}>
      <input
        className="Search-input"
        type="search"
        placeholder="Search Unsplash"
        value={props.value}
        onChange={props.handleSearchChange}
      />
      <button className="Search-submit">Go</button>
    </form>
  </header>
);

export default Masthead;
