import { DocumentationClassConstructor } from '../typings/Docs';
import { ParameterTable } from './ParameterTable';

export function ConstructorComponent({ constructorData }: ConstructorComponentPropsType) {
	const { name, params } = constructorData;

	return (
		<div className='grid grid-cols-1 gap-3'>
			<h1 className='text-left text-xl font-extrabold'>Constructor</h1>
			<div className='text-left'>
				new {name}({params?.map(p => p.name).join(', ')})
			</div>
			<ParameterTable parametersData={params} />
		</div>
	);
}

export interface ConstructorComponentPropsType {
	constructorData: DocumentationClassConstructor;
}
