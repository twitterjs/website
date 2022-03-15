import { DocumentationClassProperty, DocumentationClassMethod } from '../typings/Docs';

export function scopedName(item: DocumentationClassProperty | DocumentationClassMethod) {
	return `${item.scope === 'static' ? 's-' : ''}${item.name}`;
}
