import { useEffect } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { ClassItem } from './ClassItem';
import { TypedefItem } from './TypedefItem';

export function DocsMain() {
	// const { itemType, itemName } = useParams<{ itemType: string; itemName: string }>();
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (itemType && itemName) navigate(`${itemType}/${itemName}`);
	// }, []);

	return (
		<Routes>
			<Route path='classes/:className/*' element={<ClassItem />} />
			<Route path='typedefs/:typedefName/*' element={<TypedefItem />} />
		</Routes>
	);
}
