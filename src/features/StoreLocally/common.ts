import {rawContext} from '../../context';

export function generateFieldKey(id: string): string {
    return `${rawContext.appVersion}_${id}`;
}
