import { Route } from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';

export default function App() {
	return (
		<Layout>
			<Route path='/' element={<Home />} />
		</Layout>
	);
}
