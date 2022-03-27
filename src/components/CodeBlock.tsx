import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark-dimmed.css';

export function CodeBlock({ content, language }: CodeBlockPropsType) {
	const highlighted = language ? hljs.highlight(content, { language }) : hljs.highlightAuto(content);

	return (
		<pre className='hljs custom-scrollbar overflow-auto rounded-md p-4'>
			<code dangerouslySetInnerHTML={{ __html: highlighted.value }} />
		</pre>
	);
}

interface CodeBlockPropsType {
	content: string;
	language?: string;
}
