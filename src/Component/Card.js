import React from 'react';

const Card = ({name,email,id}) => {
	return (
		<div className='bg-light-blue tc dib br3 pa3 ma2 grow bw2 shadow-3'>
		<img alt='robot' width="200" height="200" src={`https://www.robohash.org/${id}`} />
		<div>
		<h2>{name}</h2>
		<p>{email}</p>
		</div>
		</div>
	);
}

export default Card;