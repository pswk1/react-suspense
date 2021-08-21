import { Suspense } from 'react';
import { fetchData } from './API';
import './App.css';

const App = () => {
	const resources = {
		firstUser: fetchData(1),
		secondUser: fetchData(2),
		thirdUser: fetchData(3),
	};

	return (
		<>
			<SuspensefulUserProfile resource={resources.firstUser} />
			<SuspensefulUserProfile resource={resources.secondUser} />
			<SuspensefulUserProfile resource={resources.thirdUser} />
		</>
	);
};

const SuspensefulUserProfile = ({ resource }) => {
	return (
		<Suspense fallback={<h1>Loading user...</h1>}>
			<UserProfile resource={resource} />
		</Suspense>
	);
};

const UserProfile = ({ resource }) => {
	const user = resource.user.read();
	return (
		<>
			<h1>{user.name}</h1>
			<h2>{user.email}</h2>
		</>
	);
};

export default App;
