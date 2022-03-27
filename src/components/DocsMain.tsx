import { Route, Routes } from 'react-router-dom';
import { BackToTop } from './BackToTop';
import { ClassItem } from './ClassItem';
import { TypedefItem } from './TypedefItem';

export function DocsMain() {
	return (
		<>
			<Routes>
				<Route path='' element={`:)`} />
				<Route path='classes/:className/*' element={<ClassItem />} />
				<Route path='typedefs/:typedefName/*' element={<TypedefItem />} />
			</Routes>
			<BackToTop />
		</>
	);
}
