import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Components/Home/Home';

const App: React.FC = ({ }) => {
	const navigation = useNavigate();

	useEffect(() => {
		const isSignedIn = localStorage.getItem('loggedIn');
		if (!isSignedIn) {
			navigation("/login");
		}
	}, []);

	return <Home />;
}

export default App;
