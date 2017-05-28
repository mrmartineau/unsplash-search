import React from 'react';
import './Results.css';
import Image from './Image';
import Message from './Message';

export default props => {
  const { results } = props;
  console.log('results', results);
  const images = results.map(result => (
    <Image
      src={result.urls}
      key={result.id}
      href={result.links.html}
      username={result.user.username}
      color={result.color}
      download={result.links.download}
    />
  ));
  return (
    <div className="Results">
      {
        props.results.length > 0
        ?
          images
        : <Message>No results 😢</Message>
      }
    </div>
  );
};
