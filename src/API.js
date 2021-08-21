import axios from 'axios';

export const fetchData = (id) => {
	const userPromise = fetchUserProfile(id);
	return {
		user: wrapPromise(userPromise),
	};
};

const wrapPromise = (promise) => {
	// Set initial status
	let status = 'pending';
	// Store result
	let result;
	// Wait for promise
	let suspender = promise.then(
		(res) => {
			status = 'success';
			result = res;
		},
		(err) => {
			status = 'error';
			result = err;
		}
	);

	return {
		read() {
			if (status === 'pending') {
				throw suspender;
			} else if (status === 'error') {
				throw result;
			} else if (status === 'success') {
				return result;
			}
		},
	};
};

export const fetchUserProfile = (id) => {
	console.log('Fetching user...');
	return axios
		.get(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then((res) => res.data)
		.catch((err) => console.log(err));
};
