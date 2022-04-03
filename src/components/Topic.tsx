import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export function Topic({ content }: IntroductionPropsType) {
	return content ? (
		<ReactMarkdown
			rehypePlugins={[rehypeRaw]}
			className='prose text-left prose-img:inline dark:prose-invert lg:prose-lg'
		>
			{content}
		</ReactMarkdown>
	) : (
		<></>
	);
}

export interface IntroductionPropsType {
	content?: string;
}
