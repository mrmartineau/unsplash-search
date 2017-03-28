import React from 'react';
import './Results.css';
import Image from './Image';

export default (props) => {
	const {results} = props;
	console.log('results', results);
	const images = results.map(result => (
		<Image src={result.urls} key={result.id} href={result.links.html} username={result.user.username} color={result.color} download={result.links.download} />
	));
	return (
		<div className="Results">
			{images}
		</div>
	)
}