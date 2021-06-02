import {generateFieldKey} from './common';

export function restoreLocally<T>(id: string): T | undefined {
    const fieldId = generateFieldKey(id);

    const storedValue = localStorage.getItem(fieldId);
    if (storedValue === undefined) {
        return undefined;
    }

    try {
        return JSON.parse(storedValue);
    } catch (e: unknown) {
        localStorage.removeItem(fieldId);
        throw new Error(`Unable to parse local stored value with a key: ${fieldId}`);
    }
}
