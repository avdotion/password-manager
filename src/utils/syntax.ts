type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

export const entriesOf = <T>(x: T): Entries<T> => Object.entries(x) as Entries<T>;
export const keysOf = <T>(x: T): (keyof T)[] => Object.keys(x) as (keyof T)[];
export const valuesOf = <T>(x: T): (T[keyof T])[] => Object.values(x) as (T[keyof T])[];

export const times = <T>(n: number, fn: (index: number) => T): T[] =>
    Array.from({length: n}, (_, index) => fn(index));

export const trim = (length: number, value: string): string => value.substring(0, length);
