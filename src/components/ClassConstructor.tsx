import { DocumentationClassConstructor } from '../typings/Docs';
import { CodeBlock } from './CodeBlock';
import { ParameterTable } from './ParameterTable';

export function ClassConstructor({ constructorData, className }: ClassConstructorPropsType) {
	const { params } = constructorData;

	return (
		<div className='grid grid-cols-1 gap-3'>
			<h1 className='text-left text-xl font-extrabold'>Constructor</h1>
			<div className='text-left'>
				<CodeBlock content={`new ${className}(${params?.map(p => p.name).join(', ')})`} language='javascript' />
			</div>
			<ParameterTable parametersData={params} />
		</div>
	);
}

export interface ClassConstructorPropsType {
	constructorData: DocumentationClassConstructor;
	className: string;
}
