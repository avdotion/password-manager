import {times} from './syntax';

const CHAR_SET = Array.from(new Set('!@#$%^&*(){}"<>'.split('')));

export function choice<T>(iterable: T[]): T {
    const randomIndex = Math.floor(Math.random() * iterable.length);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return iterable[randomIndex]!;
}

export function generateString(length: number): string {
    return times(length, () => choice(CHAR_SET)).join('');
}
