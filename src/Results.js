import React from 'react';
import './Results.css';
import Image from './Image';
import Message from './Message';

export default props => {
  const { results } = props;
  const images = results.map(result => (
    <Image
      src={result.urls}
      key={result.id}
      href={result.links.html}
      username={result.user.username}
      color={result.color}
      download={result.links.download}
      active={props.active}
    />
  ));
  return (
    <div className="Results">
      {
        props.results.length > 0
        ?
          images
        : <Message>No results <span role="img" aria-label="sad">😢</span></Message>
      }
    </div>
  );
};
