import {generateFieldKey} from './common';

export function storeLocally<T>(id: string, value: T): void {
    const fieldId = generateFieldKey(id);

    localStorage.setItem(fieldId, JSON.stringify(value));
}
