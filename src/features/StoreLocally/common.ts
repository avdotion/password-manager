import {CONTEXT} from '../../context';

export function generateFieldKey(id: string): string {
    return `${CONTEXT.version}_${id}`;
}
