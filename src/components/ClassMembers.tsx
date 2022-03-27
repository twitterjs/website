import { Link } from 'react-router-dom';
import type { DocumentationClass } from '../typings/Docs';
import { scopedName } from '../util';
import { CodeBlock } from './CodeBlock';
import { ParameterTable } from './ParameterTable';

export function ClassMembers({ classItem }: ClassMembersPropsType) {
	return (
		<div className='grid grid-cols-1 gap-8'>
			{classItem.props?.length ? (
				<div>
					<h1 className='text-left text-xl font-extrabold'>Properties</h1>
					<ul className='divide-y dark:divide-slate-800/90'>
						{classItem.props.map(p => {
							return (
								<li className='space-y-4 py-6 text-left' key={scopedName(p)}>
									<h1 className='text-blue-800 dark:text-blue-400' id={scopedName(p)}>
										<Link to={`#${scopedName(p)}`}>.{p.name}</Link>
									</h1>
									<div className='space-y-4'>
										<p>{p.description}</p>
										<p>
											<span className='font-bold'>Type</span>: {p.type}
										</p>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			) : (
				<></>
			)}
			{classItem.methods?.length ? (
				<div>
					<h1 className='text-left text-xl font-extrabold'>Methods</h1>
					<ul className='divide-y dark:divide-slate-800/90'>
						{classItem.methods.map(m => {
							return (
								<li className='space-y-4 py-6 text-left' key={scopedName(m)}>
									<h1 className='text-blue-800 dark:text-blue-400' id={scopedName(m)}>
										<Link to={`#${scopedName(m)}`}>
											.{m.name}({m.params?.map(p => p.name).join(', ')})
										</Link>
									</h1>
									<div className='space-y-4'>
										<p>{m.description}</p>
										<ParameterTable parametersData={m.params} />
										<div className='space-y-2'>
											<span className='font-bold'>Returns:</span> {m.returns}
											<p>{m.returnsDescription}</p>
										</div>
										{m.examples?.length ? (
											<div className='space-y-4'>
												<h1 className='font-bold'>Examples:</h1>
												{m.examples.map(e => {
													return <CodeBlock key={e} content={e} />;
												})}
											</div>
										) : (
											<></>
										)}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

export interface ClassMembersPropsType {
	classItem: DocumentationClass;
}
