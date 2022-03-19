import type { DocumentationParameter } from '../typings/Docs';

export function ParameterTable({ parametersData }: ParameterTablePropsType) {
	return parametersData ? (
		<div className='custom-scrollbar overflow-auto rounded text-left'>
			<table className='min-w-full'>
				<thead>
					<tr className='bg-zinc-900 text-gray-300'>
						{['Name', 'Type', 'Description'].map(h => {
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
							<tr
								key={p.name}
								className='border-y bg-blue-900/30 text-gray-300 first:border-t-0 last:border-b-0 dark:border-black/30'
							>
								<td className='p-4'>{p.name}</td>
								<td className='p-4'>{p.type}</td>
								<td className='p-4'>{p.description}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	) : (
		<></>
	);
}

export interface ParameterTablePropsType {
	parametersData?: DocumentationParameter[];
}
