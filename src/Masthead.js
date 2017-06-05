import React from 'react';
import Search from './Search';
import './Masthead.css';

const Masthead = props => (
  <header className="Masthead">
    <div className="Masthead-inner">
      <svg onClick={props.handleBack} className="Masthead-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 27.9" fill="currentColor"><title>Unsplash Search</title><path d="M16,11.3a4.8,4.8,0,1,0,4.8,4.8A4.87,4.87,0,0,0,16,11.3Z"/><path d="M27.7,4.4H24L23.2,2a3.3,3.3,0,0,0-2.9-2H11.7A3.3,3.3,0,0,0,8.8,2L8,4.3H4.3A4.33,4.33,0,0,0,0,8.6v15a4.27,4.27,0,0,0,4.3,4.3H27.7A4.33,4.33,0,0,0,32,23.6V8.7A4.27,4.27,0,0,0,27.7,4.4ZM26.18,24a1.55,1.55,0,0,1-2.17.22L20.95,21.7a7.76,7.76,0,0,1-5,2,7.5,7.5,0,1,1,7.5-7.5,7.38,7.38,0,0,1-.64,3L26,21.8A1.55,1.55,0,0,1,26.18,24Z"/></svg>

      <Search handleSearchSubmit={props.handleSearchSubmit} handleSearchChange={props.handleSearchChange} handleSearchRefresh={props.handleSearchRefresh} value={props.value} />
    </div>
  </header>
);

export default Masthead;
