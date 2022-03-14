import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Docs } from './components/Docs';
import { DocsList } from './components/DocsList';
import { FourOhFour } from './components/FourOhFour';

export function App() {
	return (
		<>
			<nav>
				<Navbar />
			</nav>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/docs'>
						<Route path='' element={<DocsList />} />
						<Route path=':source/:version/*' element={<Docs />} />
					</Route>
					<Route path='*' element={<FourOhFour />} />
				</Routes>
			</main>
		</>
	);
}
