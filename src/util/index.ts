import type { DocumentationClassProperty, DocumentationClassMethod } from '../typings/Docs';

export function scopedName(item: DocumentationClassProperty | DocumentationClassMethod) {
	return `${item.scope === 'static' ? 's-' : ''}${item.name}`;
}

export const sleep = (time: number) => {
	return new Promise(resolve => setTimeout(resolve, time));
};
