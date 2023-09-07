import React from 'react';

function hotTourLoading(Component) {
	return function hotTourLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) 
		return <Component posts={props.posts} />; // here
		return (
			<p style={{ fontSize: '25px' }}>
				We are waiting for the data to load!...
			</p>
		);
	};
}
export default hotTourLoading;
