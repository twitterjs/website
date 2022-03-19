import { Navigate, Route, Routes } from 'react-router-dom';
import { BackToTop } from './BackToTop';
import { ClassItem } from './ClassItem';
import { GettingStarted } from './GettingStarted';
import { TypedefItem } from './TypedefItem';

export function DocsMain() {
	return (
		<>
			<Routes>
				<Route path='' element={<Navigate to='getting-started/general' />} />
				<Route path='getting-started/:topic' element={<GettingStarted />} />
				<Route path='classes/:className/*' element={<ClassItem />} />
				<Route path='typedefs/:typedefName/*' element={<TypedefItem />} />
			</Routes>
			<BackToTop />
		</>
	);
}
