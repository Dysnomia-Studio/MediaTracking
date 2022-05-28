import NavMenu from './NavMenu';
import {
	Routes,
} from 'react-router-dom';

export default function Layout({ children }) {
	return (
		<div>
			<NavMenu />
			<div>
				<Routes>
					{children}
				</Routes>
			</div>
		</div>
	);
}
