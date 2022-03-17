import type { DocumentationParameter } from '../typings/Docs';

export function ParameterTable({ parametersData }: ParameterTablePropsType) {
	return parametersData ? (
		<table className='min-w-full'>
			<thead>
				<tr className='border bg-zinc-900 dark:border-gray-600'>
					{['Parameter', 'Type', 'Description'].map(h => {
						return (
							<th className='p-4' key={h}>
								{h}
							</th>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{parametersData.map(p => {
					return (
						<tr key={p.name} className='border bg-violet-900/40 text-gray-300 dark:border-gray-600'>
							<td className='p-2'>{p.name}</td>
							<td className='p-2'>{p.type}</td>
							<td className='p-2'>{p.description}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	) : (
		<></>
	);
}

export interface ParameterTablePropsType {
	parametersData?: DocumentationParameter[];
}
