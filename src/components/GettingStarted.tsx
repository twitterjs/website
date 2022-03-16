import { useParams } from 'react-router-dom';

export function GettingStarted() {
	const { topic } = useParams<{ topic: string }>();

	return <>Topic: {topic}</>;
}
