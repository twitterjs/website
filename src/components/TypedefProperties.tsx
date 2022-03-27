import type { DocumentationTypeDefinition } from '../typings/Docs';
import { ParameterTable } from './ParameterTable';

export function TypedefProperties({ typedefItem }: TypedefPropertiesPropsType) {
	return typedefItem.props?.length ? (
		<div className='grid grid-cols-1 gap-3'>
			<h1 className='text-left text-xl font-extrabold'>Properties</h1>
			<ParameterTable parametersData={typedefItem.props} />
		</div>
	) : (
		<></>
	);
}

export interface TypedefPropertiesPropsType {
	typedefItem: DocumentationTypeDefinition;
}
